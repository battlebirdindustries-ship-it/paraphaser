import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — paraphaser.ai",
  description: "Get in touch with the paraphaser.ai team. Questions, feedback, or feature requests — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-extrabold text-white mb-5 tracking-tight">Contact Us</h1>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        Have a question, feature request, or just want to say hi? We&apos;d love to hear from you.
      </p>
      <div className="mt-6 p-6 rounded-2xl bg-[rgba(15,20,35,0.8)] border border-white/[0.06] text-center">
        <div className="text-[11px] font-mono font-bold text-phaser-green tracking-[1.5px] mb-3">SEND TRANSMISSION</div>
        <a href="mailto:hello@paraphaser.ai" className="text-xl font-bold text-white no-underline hover:text-phaser-green transition-colors">
          hello@paraphaser.ai
        </a>
        <p className="text-[13px] text-[#4a5068] mt-3">We typically respond within 24 hours.</p>
      </div>
      <div className="mt-7">
        <h2 className="text-lg font-bold text-white mb-2.5">Common Questions</h2>
        <div className="flex flex-col gap-3 mt-3">
          {[
            ["Is paraphaser.ai really free?", "Yes — our core tools are completely free to use with no signup required."],
            ["Do you store my text?", "No. We do not store any text you input into our tools."],
            ["Can I use the output commercially?", "Absolutely. You own the output and can use it however you like."],
            ["How do I report a bug?", "Send us an email and we'll look into it right away."],
          ].map(([q, a]) => (
            <div key={q} className="p-4 rounded-xl bg-[rgba(0,255,200,0.03)] border border-white/[0.06]">
              <div className="text-sm font-semibold text-white mb-1">{q}</div>
              <div className="text-[13px] text-[#8892a8] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
