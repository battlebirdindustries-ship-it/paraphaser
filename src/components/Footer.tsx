import Link from "next/link";
import PhaserLogo from "./PhaserLogo";

export default function Footer() {
  const links: [string, string][] = [
    ["About", "/about"],
    ["Blog", "/blog"],
    ["Privacy Policy", "/privacy"],
    ["Terms of Service", "/terms"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="px-8 py-8 border-t border-white/[0.06] text-center">
      <div className="flex justify-center mb-3">
        <PhaserLogo size={20} color="#4a5068" />
      </div>
      <div className="flex justify-center gap-5 mb-3 flex-wrap">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="text-[#4a5068] text-[13px] hover:text-white no-underline transition-colors">
            {label}
          </Link>
        ))}
      </div>
      <div className="text-[#1e2030] text-[11px]">
        © {new Date().getFullYear()} paraphaser.ai — Free AI-powered writing tools
      </div>
    </footer>
  );
}
