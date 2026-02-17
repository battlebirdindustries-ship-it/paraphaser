"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Tool, TONES, Tone } from "@/types";
import { TOOLS } from "@/lib/tools";
import PhaserLogo from "./PhaserLogo";
import MiniPhaser from "./MiniPhaser";

function PhaserBeam({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="relative h-1 my-4 rounded bg-[rgba(0,255,200,0.06)] overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full rounded animate-pulse"
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #00ffc8, #00b4ff, #7b61ff)",
          boxShadow: "0 0 20px rgba(0,255,200,0.25)",
        }}
      />
    </div>
  );
}

export default function ToolPageClient({ tool }: { tool: Tool }) {
  const [input, setInput] = useState(tool.sampleInput);
  const [output, setOutput] = useState("");
  const [firing, setFiring] = useState(false);
  const [selectedTone, setSelectedTone] = useState<Tone>("Professional");
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const handleFire = async () => {
    if (!input.trim() || firing) return;
    setFiring(true);
    setOutput("");
    setError("");

    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input, tool: tool.slug, tone: selectedTone }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "Generation failed" }));
        throw new Error(data.error || "Generation failed");
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let result = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;
        setOutput(result);
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      // Fallback to sample output if API fails
      setOutput(tool.sampleOutputs[selectedTone] || tool.sampleOutputs.Professional);
    } finally {
      setFiring(false);
      abortRef.current = null;
    }
  };

  const otherTools = TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 3);

  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-8 py-9">
      {/* Header */}
      <div className="text-center mb-7">
        <div className="flex justify-center mb-3">
          <PhaserLogo size={36} color={tool.color} firing={firing} />
        </div>
        <div
          className="inline-block px-3.5 py-1.5 mb-3 rounded-lg text-[10px] font-mono font-bold tracking-[2px]"
          style={{ background: `${tool.color}10`, border: `1px solid ${tool.color}20`, color: tool.color }}
        >
          MODE: {tool.setting}
        </div>
        <h1 className="text-3xl font-extrabold text-white mb-1.5 tracking-tight">
          AI {tool.name}
        </h1>
        <p className="text-sm text-[#8892a8] mb-1">{tool.longDesc}</p>
      </div>

      {/* Tone selector */}
      <div className="flex gap-2 mt-5 mb-3.5 flex-wrap">
        {TONES.map((tone) => (
          <button
            key={tone}
            onClick={() => setSelectedTone(tone)}
            className={`px-4 py-2 rounded-lg text-sm border transition-all cursor-pointer font-[inherit] ${
              selectedTone === tone
                ? "border-[rgba(0,255,200,0.25)] bg-[rgba(0,255,200,0.06)] text-phaser-green font-semibold"
                : "border-white/[0.06] bg-transparent text-[#8892a8] hover:border-white/[0.12]"
            }`}
          >
            {tone}
          </button>
        ))}
      </div>

      {/* Input / Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
        <div className="bg-[rgba(15,20,35,0.8)] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-white/[0.06] flex justify-between items-center">
            <span className="text-[11px] font-semibold text-[#4a5068] tracking-wider">INPUT</span>
            <span className="text-[10px] font-mono text-[#4a5068]">{input.length} chars</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full min-h-[220px] p-4 bg-transparent border-none text-white text-sm leading-relaxed resize-y outline-none font-[inherit] box-border"
          />
        </div>

        <div className="bg-[rgba(15,20,35,0.8)] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-white/[0.06] flex justify-between items-center">
            <span className="text-[11px] font-semibold text-[#4a5068] tracking-wider">OUTPUT</span>
            {output && !firing && (
              <button
                onClick={() => navigator.clipboard?.writeText(output)}
                className="text-[10px] font-mono font-semibold text-phaser-green bg-[rgba(0,255,200,0.06)] border border-[rgba(0,255,200,0.25)] rounded-md px-2.5 py-1 cursor-pointer"
              >
                COPY
              </button>
            )}
          </div>
          <div className="p-4 min-h-[220px] text-sm leading-relaxed whitespace-pre-wrap overflow-y-auto max-h-[400px]" style={{ color: output ? "#fff" : "#4a5068" }}>
            {output || (firing ? "" : `Your ${tool.name.toLowerCase()} output will appear here...`)}
          </div>
        </div>
      </div>

      <PhaserBeam active={firing} />

      {error && (
        <div className="text-[11px] text-[#ff4040] font-mono text-center mb-2">
          {error} — showing sample output
        </div>
      )}

      {/* Fire button */}
      <div className="flex justify-end mt-5 mb-7">
        <button
          onClick={handleFire}
          disabled={firing}
          className="px-12 py-4 rounded-2xl border-none text-base font-bold tracking-wide cursor-pointer font-[inherit] transition-all"
          style={{
            background: firing ? "rgba(0,255,200,0.08)" : "linear-gradient(135deg, #00ffc8, #00b4ff)",
            color: firing ? "#00ffc8" : "#080a14",
            boxShadow: firing ? "none" : "0 0 40px rgba(0,255,200,0.25)",
            cursor: firing ? "default" : "pointer",
          }}
        >
          {firing ? "⚡ FIRING..." : `⚡ FIRE — ${selectedTone}`}
        </button>
      </div>

      {/* SEO content */}
      <div className="mt-9 p-6 rounded-2xl bg-[rgba(0,255,200,0.04)] border border-white/[0.06]">
        <h2 className="text-lg font-bold text-white mb-2">What is the AI {tool.name}?</h2>
        <p className="text-sm text-[#8892a8] leading-relaxed">
          The paraphaser.ai {tool.name} is a free AI-powered tool that helps you {tool.desc.toLowerCase()}. Simply paste your text, choose a tone, and fire the phaser to get instant results. No signup, no credit card, no limits. Our AI understands context and nuance, delivering high-quality output every time. Whether you&apos;re a student, professional, or content creator, the {tool.name} saves you time and elevates your writing.
        </p>
      </div>

      {/* Related tools */}
      <div className="mt-9">
        <span className="text-xs font-semibold text-[#4a5068] uppercase tracking-[1.5px]">Other Phaser Modes</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3.5">
          {otherTools.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="p-4 rounded-2xl bg-[rgba(15,20,35,0.8)] border border-white/[0.06] hover:border-[rgba(0,255,200,0.2)] transition-all no-underline"
            >
              <div className="flex items-center gap-2.5">
                <MiniPhaser color={t.color} size={14} />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-[10px] font-mono tracking-wider" style={{ color: t.color }}>
                    MODE: {t.setting}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
