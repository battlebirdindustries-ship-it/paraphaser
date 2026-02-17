"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PhaserLogo from "./PhaserLogo";
import { TOOLS } from "@/lib/tools";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 md:px-8 py-3 border-b border-white/[0.06] bg-[#080a14]/90 backdrop-blur-xl sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <PhaserLogo size={28} />
        <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-phaser-green to-phaser-blue bg-clip-text text-transparent">
          paraphaser
        </span>
        <span className="text-lg font-normal text-[#8892a8]">.ai</span>
      </Link>

      <div className="hidden md:flex gap-1.5">
        {TOOLS.slice(0, 4).map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className={`px-4 py-1.5 rounded-lg text-sm no-underline transition-all ${
              pathname === `/${tool.slug}`
                ? "bg-[rgba(0,255,200,0.06)] text-phaser-green font-bold"
                : "text-[#8892a8] hover:text-white"
            }`}
          >
            {tool.name}
          </Link>
        ))}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-1.5 rounded-lg text-sm text-[#4a5068] hover:text-white bg-transparent border-none cursor-pointer font-[inherit]"
          >
            More ▾
          </button>
          {menuOpen && (
            <div className="absolute top-full right-0 mt-1 bg-[#0f1423] border border-white/[0.06] rounded-xl p-2 min-w-[180px] z-50">
              {TOOLS.slice(4).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-3 py-2.5 rounded-lg text-sm text-[#8892a8] hover:text-white hover:bg-white/[0.04] no-underline transition-colors"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link
        href="/ai-paraphraser"
        className="px-5 py-2 rounded-lg border border-[rgba(0,255,200,0.2)] text-phaser-green text-sm font-semibold no-underline hover:bg-[rgba(0,255,200,0.06)] transition-colors"
      >
        Go Pro
      </Link>
    </nav>
  );
}
