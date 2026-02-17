"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeroPhaser from "@/components/HeroPhaser";
import MiniPhaser from "@/components/MiniPhaser";
import { TOOLS } from "@/lib/tools";

function Hero() {
  const [gunFiring, setGunFiring] = useState(false);
  useEffect(() => {
    const i = setInterval(() => {
      setGunFiring(true);
      setTimeout(() => setGunFiring(false), 1400);
    }, 4500);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="text-center pt-12 md:pt-14 pb-5 px-8 relative overflow-hidden">
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(0,255,200,0.06)_0%,rgba(0,180,255,0.03)_40%,transparent_70%)] pointer-events-none" />
      <HeroPhaser firing={gunFiring} />
      <div className="inline-block px-4 py-1.5 mt-4 mb-5 rounded-full bg-[rgba(0,255,200,0.06)] border border-[rgba(0,255,200,0.25)]">
        <span className="text-xs font-mono font-semibold text-phaser-green tracking-[1.5px]">
          SET PHASERS TO PARAPHRASE
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mx-auto max-w-[680px] tracking-tight">
        <span className="text-white">Rewrite anything</span>
        <br />
        <span className="bg-gradient-to-r from-phaser-green via-phaser-blue to-phaser-purple bg-clip-text text-transparent">
          at lightspeed
        </span>
      </h1>
      <p className="text-[17px] text-[#8892a8] max-w-[480px] mx-auto mt-5 mb-9 leading-relaxed">
        Free AI-powered tools to paraphrase, summarize, and transform your text. No signup required.
      </p>
      <Link
        href="/ai-paraphraser"
        className="inline-block px-11 py-4 rounded-2xl bg-gradient-to-r from-phaser-green to-phaser-blue text-[#080a14] text-base font-extrabold no-underline shadow-[0_0_40px_rgba(0,255,200,0.25)] hover:shadow-[0_0_60px_rgba(0,255,200,0.35)] transition-shadow"
      >
        Fire It Up — It&apos;s Free
      </Link>
      <div className="mt-12 flex justify-center gap-12 md:gap-14 flex-wrap">
        {[["12M+", "Texts Fired"], ["4.9★", "User Rating"], ["< 1s", "Avg Speed"]].map(([v, l]) => (
          <div key={l as string}>
            <div className="text-2xl font-black text-white">{v}</div>
            <div className="text-xs text-[#4a5068] mt-1">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolGrid() {
  return (
    <section className="py-10 px-8 max-w-[1000px] mx-auto">
      <div className="text-center mb-8">
        <span className="text-sm font-semibold text-[#4a5068] uppercase tracking-[2px]">Phaser Modes</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className="group p-6 rounded-2xl bg-[rgba(15,20,35,0.8)] border border-white/[0.06] hover:border-[rgba(0,255,200,0.25)] transition-all no-underline hover:shadow-[0_0_30px_rgba(0,255,200,0.05)]"
          >
            <div className="flex items-center gap-3.5 mb-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${tool.color}10`, border: `1px solid ${tool.color}20` }}
              >
                <MiniPhaser color={tool.color} size={18} />
              </div>
              <div>
                <div className="font-bold text-white text-base">{tool.name}</div>
                <div
                  className="text-[10px] font-bold tracking-[1.5px] font-mono opacity-80"
                  style={{ color: tool.color }}
                >
                  MODE: {tool.setting}
                </div>
              </div>
            </div>
            <div className="text-sm text-[#8892a8] leading-relaxed">{tool.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Paste your text", desc: "Drop in any text you want to transform", icon: "📋" },
    { n: "02", title: "Choose your mode", desc: "Pick a tone — casual, formal, academic, etc.", icon: "⚙️" },
    { n: "03", title: "Fire the phaser", desc: "Hit fire and get results in seconds", icon: "⚡" },
  ];
  return (
    <section className="py-10 px-8 max-w-[900px] mx-auto">
      <div className="text-center mb-9">
        <span className="text-sm font-semibold text-[#4a5068] uppercase tracking-[2px]">How It Works</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {steps.map((s) => (
          <div key={s.n} className="text-center">
            <div className="text-3xl mb-3">{s.icon}</div>
            <div className="text-[11px] font-mono font-bold text-phaser-green tracking-[2px] mb-2">STEP {s.n}</div>
            <div className="text-base font-bold text-white mb-1.5">{s.title}</div>
            <div className="text-sm text-[#8892a8] leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Alex R.", role: "Content Writer", text: "I use the paraphraser daily. It's faster than anything else I've tried and the tone options are great." },
    { name: "Jamie L.", role: "Marketing Manager", text: "The ad copy tool alone saves me hours every week. And the phaser theme makes it actually fun to use." },
    { name: "Priya K.", role: "College Student", text: "The summarizer is a lifesaver for research papers. And it's completely free — can't believe it." },
  ];
  return (
    <section className="pt-5 pb-14 px-8 max-w-[1000px] mx-auto">
      <div className="text-center mb-8">
        <span className="text-sm font-semibold text-[#4a5068] uppercase tracking-[2px]">What Users Say</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {reviews.map((r) => (
          <div key={r.name} className="p-6 rounded-2xl bg-[rgba(15,20,35,0.8)] border border-white/[0.06]">
            <div className="text-sm text-[#8892a8] leading-relaxed mb-4 italic">&quot;{r.text}&quot;</div>
            <div className="text-sm font-bold text-white">{r.name}</div>
            <div className="text-xs text-[#4a5068]">{r.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-[600px] mx-auto px-8 pb-14 text-center">
      <h2 className="text-3xl font-extrabold text-white mb-3">Ready to fire?</h2>
      <p className="text-[15px] text-[#8892a8] mb-6">Join millions of users who trust paraphaser.ai for fast, free AI writing tools.</p>
      <Link
        href="/ai-paraphraser"
        className="inline-block px-10 py-3.5 rounded-2xl bg-gradient-to-r from-phaser-green to-phaser-blue text-[#080a14] text-[15px] font-extrabold no-underline shadow-[0_0_30px_rgba(0,255,200,0.25)]"
      >
        Get Started — Free
      </Link>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolGrid />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
