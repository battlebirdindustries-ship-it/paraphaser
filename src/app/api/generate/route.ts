import { NextRequest } from "next/server";

const SYSTEM_PROMPTS: Record<string, (tone: string) => string> = {
  "ai-paraphraser": (tone) =>
    `You are an expert paraphrasing tool. Rewrite the user's text in a ${tone.toLowerCase()} tone. Keep the same meaning but change the wording, sentence structure, and style. Do NOT add any preamble like "Here's the rewritten text:" — just output the rewritten text directly.${
      tone === "Academic"
        ? " Use formal academic language, sophisticated vocabulary, and complex sentence structures."
        : tone === "Casual"
        ? " Use conversational, everyday language. Keep it friendly and natural."
        : tone === "Creative"
        ? " Use vivid language, metaphors, and engaging prose. Make it interesting to read."
        : tone === "Simplified"
        ? " Use simple words and short sentences. Make it easy to understand for anyone."
        : " Use clear, polished, business-appropriate language."
    }`,

  "ai-summarizer": (tone) =>
    `You are an expert text summarizer. Condense the user's text into a clear, concise summary. Extract the key points and present them in a ${tone.toLowerCase()} tone. Do NOT add any preamble — just output the summary directly.${
      tone === "Professional"
        ? " Use bullet points with a KEY POINTS header. Be concise and business-like."
        : tone === "Casual"
        ? " Start with TLDR: and keep it brief and conversational."
        : tone === "Academic"
        ? " Start with SUMMARY: and use formal academic language."
        : tone === "Creative"
        ? " Make the summary engaging and vivid while keeping it accurate."
        : " Use simple words and short sentences. Keep it very brief."
    }`,

  "ai-email-writer": (tone) =>
    `You are an expert email writer. Generate a complete email based on the user's description. Write it in a ${tone.toLowerCase()} tone. Include a subject line. Do NOT add any preamble — start directly with "Subject:" followed by the email body.${
      tone === "Professional"
        ? " Be polished, respectful, and business-appropriate. Include relevant details and a clear call to action."
        : tone === "Casual"
        ? " Be friendly, warm, and conversational. Keep it natural."
        : tone === "Academic"
        ? " Be formal and structured. Use proper salutations."
        : tone === "Creative"
        ? " Be engaging and memorable. Stand out from typical emails."
        : " Be short and direct. Use simple language."
    }`,

  "ai-ad-copy": (tone) =>
    `You are an expert advertising copywriter. Generate ad copy based on the user's product/service description. Write for both Google Ads and Facebook/social media formats. Use a ${tone.toLowerCase()} tone. Do NOT add any preamble — start directly with the ad copy. Include headlines and descriptions for Google Ads, then a Facebook ad.${
      tone === "Professional"
        ? " Focus on value propositions and clear benefits."
        : tone === "Casual"
        ? " Be relatable and conversational. Use everyday language."
        : tone === "Creative"
        ? " Be bold, surprising, and attention-grabbing. Use powerful imagery."
        : tone === "Simplified"
        ? " Keep it very simple and direct. Short sentences."
        : " Use data and specifics. Be authoritative."
    }`,

  "ai-seo-meta": (tone) =>
    `You are an SEO expert. Generate optimized meta titles and descriptions for the user's page topic. Provide 3 title options and 2-3 meta description options. Keep titles under 60 characters and descriptions under 160 characters. Include character counts. Use a ${tone.toLowerCase()} tone. Do NOT add any preamble — start directly with "META TITLE OPTIONS:" followed by the options.`,

  "ai-headlines": (tone) =>
    `You are an expert headline writer and content strategist. Generate 10 headline/title options for the user's topic. Make them compelling and click-worthy in a ${tone.toLowerCase()} tone. Do NOT add any preamble — start directly with "HEADLINE OPTIONS:" followed by a numbered list.${
      tone === "Creative"
        ? " Be bold, surprising, and use powerful literary devices."
        : tone === "Casual"
        ? " Be relatable and use conversational language people actually use."
        : tone === "Academic"
        ? " Use formal, scholarly language appropriate for journals and papers."
        : tone === "Simplified"
        ? " Use simple words everyone can understand."
        : " Be clear, authoritative, and professional."
    }`,
};

export async function POST(request: NextRequest) {
  try {
    const { text, tool, tone } = await request.json();

    if (!text || !tool || !tone) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json({ error: "OpenAI API key not configured" }, { status: 500 });
    }

    const getSystemPrompt = SYSTEM_PROMPTS[tool];
    if (!getSystemPrompt) {
      return Response.json({ error: "Unknown tool" }, { status: 400 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        stream: true,
        max_tokens: 1024,
        temperature: 0.7,
        messages: [
          { role: "system", content: getSystemPrompt(tone) },
          { role: "user", content: text },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI error:", err);
      return Response.json({ error: "AI generation failed" }, { status: 502 });
    }

    // Stream the response back
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data: ")) continue;
              const data = trimmed.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {
                // skip malformed chunks
              }
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Generate error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
