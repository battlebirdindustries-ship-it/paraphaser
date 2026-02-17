import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — paraphaser.ai",
  description: "Learn about paraphaser.ai, our mission, and why we built free AI-powered writing tools with a phaser theme.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-extrabold text-white mb-5 tracking-tight">About paraphaser.ai</h1>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        paraphaser.ai is a free suite of AI-powered writing tools designed to help anyone write better, faster. Whether you&apos;re a student rewriting an essay, a marketer crafting ad copy, or a professional polishing an email — our tools are built to save you time without sacrificing quality.
      </p>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        We believe great writing tools should be accessible to everyone, not locked behind expensive subscriptions. That&apos;s why our core tools are completely free to use, powered by cutting-edge language models that understand context, tone, and nuance.
      </p>
      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">Our Mission</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        To democratize AI-powered writing. We&apos;re building tools that are fast, intuitive, and genuinely useful — without the bloat. Every feature we ship has one goal: help you get your writing done.
      </p>
      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">The Phaser Theme</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        Why phasers? Because writing should feel powerful. We wanted to make the experience of using AI tools feel exciting — not clinical. So we built paraphaser.ai with a sci-fi edge that makes transforming text feel like firing a beam of pure creative energy.
      </p>
    </div>
  );
}
