"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavPhaserLogo from "./NavPhaserLogo";
import { TOOLS } from "@/lib/tools";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="relative flex items-center px-4 md:px-8 lg:px-12 py-3 border-b border-white/[0.06] bg-[#080a14]/90 backdrop-blur-xl sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-0 no-underline shrink-0 relative">
        <div className="mt-1.5">
          <NavPhaserLogo size={26} />
        </div>
        {/* Beam behind text */}
        <svg width="120" height="10" viewBox="0 0 120 10" fill="none" className="absolute pointer-events-none" style={{ left: 44, top: "50%", transform: "translateY(-50%)", zIndex: 0 }}>
          <defs>
            <linearGradient id="navbeam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00ffc8" />
              <stop offset="40%" stopColor="#00b4ff" />
              <stop offset="100%" stopColor="#00ffc8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="3" width="120" height="4" rx="2" fill="url(#navbeam)" opacity="0.35">
            <animate attributeName="opacity" values="0.25;0.45;0.25" dur="0.8s" repeatCount="indefinite" />
          </rect>
          <rect x="0" y="4" width="90" height="2" rx="1" fill="#00ffc8" opacity="0.15">
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="0.6s" repeatCount="indefinite" />
          </rect>
        </svg>
        <span className="text-lg font-extrabold tracking-tight relative z-10">
          <span className="bg-gradient-to-r from-phaser-green to-phaser-blue bg-clip-text text-transparent">paraphaser</span>
          <span className="text-[#8892a8] font-normal">.ai</span>
        </span>
      </Link>

      <div className="hidden lg:flex items-center justify-center gap-0.5 absolute left-1/2 -translate-x-1/2">
        {TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className={`px-3 py-1.5 rounded-lg text-[13px] whitespace-nowrap no-underline transition-all ${
              pathname === `/${tool.slug}`
                ? "bg-[rgba(0,255,200,0.06)] text-phaser-green font-bold"
                : "text-[#8892a8] hover:text-white"
            }`}
          >
            {tool.name}
          </Link>
        ))}
      </div>

    </nav>
  );
}
