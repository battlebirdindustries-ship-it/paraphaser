import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About paraphaser.ai — Free AI Paraphrasing & Writing Tools Online",
  description: "Learn about paraphaser.ai — a free suite of AI writing tools including a paraphraser, text summarizer, email writer, ad copy generator, and more. No signup required.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-extrabold text-white mb-5 tracking-tight">About paraphaser.ai</h1>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        paraphaser.ai is a free suite of AI-powered writing tools designed to help anyone write better, faster, and with more confidence. Whether you&apos;re a student looking for a free paraphrasing tool to rewrite an essay, a marketer generating ad copy, or a professional crafting the perfect email — our AI writing tools are built to save you time without sacrificing quality.
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        We believe powerful writing tools should be accessible to everyone — not locked behind expensive subscriptions. That&apos;s why all six of our tools are completely free to use online with no signup required, powered by cutting-edge AI language models that understand context, tone, and nuance.
      </p>

      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">Our Free AI Writing Tools</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        paraphaser.ai offers six specialized AI tools, each designed for a specific writing task:
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-2">
        <Link href="/ai-paraphraser" className="text-phaser-green no-underline hover:underline">AI Paraphraser</Link> — Free online paraphrasing tool to rewrite and rephrase text in any tone. Works as a sentence rewriter, word changer, and paragraph rephraser.
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-2">
        <Link href="/ai-summarizer" className="text-phaser-green no-underline hover:underline">AI Text Summarizer</Link> — Condense long articles, documents, research papers, and essays into clear key points instantly.
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-2">
        <Link href="/ai-email-writer" className="text-phaser-green no-underline hover:underline">AI Email Writer</Link> — Generate professional emails in seconds. Perfect for cold outreach, follow-ups, and business correspondence.
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-2">
        <Link href="/ai-ad-copy" className="text-phaser-green no-underline hover:underline">AI Ad Copy Generator</Link> — Create high-converting ad copy for Google Ads, Facebook, and social media.
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-2">
        <Link href="/ai-seo-meta" className="text-phaser-green no-underline hover:underline">SEO Meta Generator</Link> — Generate optimized meta titles and descriptions to boost search click-through rates.
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        <Link href="/ai-headlines" className="text-phaser-green no-underline hover:underline">AI Headline Generator</Link> — Get 10 catchy, click-worthy headline variations for blog posts, articles, and social media.
      </p>

      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">Our Mission</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        To democratize AI-powered writing. We&apos;re building free online writing tools that are fast, intuitive, and useful — without the bloat, paywalls, or forced signups. Every feature we ship has one goal: help you get your writing done faster and better.
      </p>

      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">Why &ldquo;Paraphaser&rdquo;?</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        The name combines &ldquo;paraphrase&rdquo; with &ldquo;phaser&rdquo; — because writing should feel powerful. We wanted to make the experience of using AI writing tools feel exciting, not clinical. So we built paraphaser.ai with a sci-fi edge where you &ldquo;fire&rdquo; your text through AI and get transformed results in seconds.
      </p>
    </div>
  );
}
