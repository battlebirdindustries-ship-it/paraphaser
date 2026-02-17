import Link from "next/link";
import PhaserLogo from "./PhaserLogo";
import { TOOLS } from "@/lib/tools";

export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-white/[0.06] text-center">
      <div className="flex justify-center mb-4">
        <PhaserLogo size={22} color="#4a5068" />
      </div>
      <div className="flex justify-center gap-6 mb-5 flex-wrap">
        {TOOLS.map((t) => (
          <Link key={t.slug} href={`/${t.slug}`} className="text-[#4a5068] text-xs hover:text-white no-underline transition-colors">
            {t.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-6 mb-3.5 flex-wrap">
        {["About", "Blog", "Privacy Policy", "Terms of Service", "Contact"].map((l) => (
          <span key={l} className="text-[#4a5068] text-sm cursor-pointer hover:text-white transition-colors">{l}</span>
        ))}
      </div>
      <div className="text-[#1e2030] text-xs">
        © {new Date().getFullYear()} paraphaser.ai — Free AI-powered writing tools
      </div>
    </footer>
  );
}
