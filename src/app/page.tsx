"use client";
import Link from "next/link";
import MiniPhaser from "@/components/MiniPhaser";
import { TOOLS } from "@/lib/tools";

function Hero() {
  return (
    <section className="text-center pt-14 pb-5 px-8 relative overflow-hidden">
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(0,255,200,0.06)_0%,rgba(0,180,255,0.03)_40%,transparent_70%)] pointer-events-none" />
      <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-[rgba(0,255,200,0.06)] border border-[rgba(0,255,200,0.25)]">
        <span className="text-[10px] font-mono font-bold text-phaser-green tracking-[1.5px]">
          SET PHASERS TO PARAPHRASE
        </span>
      </div>
      <h1 className="text-4xl md:text-[52px] font-extrabold leading-tight mx-auto max-w-[700px] tracking-tight">
        <span className="text-white">Rewrite anything</span>
        <br />
        <span className="bg-gradient-to-r from-phaser-green via-phaser-blue to-phaser-purple bg-clip-text text-transparent">
          at lightspeed
        </span>
      </h1>
      <p className="text-base text-[#8892a8] max-w-[480px] mx-auto mt-4 leading-relaxed">
        Free AI-powered tools to paraphrase, summarize, and transform your text.
      </p>
    </section>
  );
}

function ToolGrid() {
  return (
    <section className="px-8 pb-8 pt-2 max-w-[960px] mx-auto">
      <div className="text-center mb-7">
        <span className="text-xs font-semibold text-[#4a5068] uppercase tracking-[2px]">Phaser Modes</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className="group p-5 rounded-2xl bg-[rgba(15,20,35,0.8)] border border-white/[0.06] hover:border-[rgba(0,255,200,0.25)] transition-all no-underline hover:shadow-[0_0_30px_rgba(0,255,200,0.05)]"
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center"
                style={{ background: `${tool.color}10`, border: `1px solid ${tool.color}20` }}
              >
                <MiniPhaser color={tool.color} size={16} />
              </div>
              <div>
                <div className="font-bold text-white text-sm">{tool.name}</div>
                <div
                  className="text-[9px] font-bold tracking-[1.5px] font-mono"
                  style={{ color: tool.color }}
                >
                  MODE: {tool.setting}
                </div>
              </div>
            </div>
            <div className="text-[13px] text-[#8892a8] leading-relaxed">{tool.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolGrid />
    </>
  );
}
