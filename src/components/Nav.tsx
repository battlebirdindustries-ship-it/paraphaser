"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PhaserLogo from "./PhaserLogo";
import { TOOLS } from "@/lib/tools";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/[0.06] bg-[#080a14]/90 backdrop-blur-xl sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-1.5 no-underline shrink-0">
        <PhaserLogo size={24} />
        <span className="text-base font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-phaser-green to-phaser-blue bg-clip-text text-transparent">paraphaser</span><span className="text-[#8892a8] font-normal">.ai</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-0.5 mx-4">
        {TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap no-underline transition-all ${
              pathname === `/${tool.slug}`
                ? "bg-[rgba(0,255,200,0.06)] text-phaser-green font-bold"
                : "text-[#8892a8] hover:text-white"
            }`}
          >
            {tool.name}
          </Link>
        ))}
      </div>

      <Link
        href="/ai-paraphraser"
        className="px-4 py-1.5 rounded-lg border border-[rgba(0,255,200,0.2)] text-phaser-green text-xs font-semibold no-underline hover:bg-[rgba(0,255,200,0.06)] transition-colors shrink-0"
      >
        Go Pro
      </Link>
    </nav>
  );
}
