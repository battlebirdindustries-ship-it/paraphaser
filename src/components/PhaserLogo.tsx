"use client";
import { useId } from "react";

export default function PhaserLogo({ size = 32, color = "#00ffc8", firing = false }: { size?: number; color?: string; firing?: boolean }) {
  const id = useId();
  // Centered viewBox around the gun body (no beam extending left)
  return (
    <svg width={size} height={size} viewBox="10 2 30 30" fill="none" aria-label="paraphaser.ai logo" style={{ display: "block" }}>
      <defs>
        <filter id={`g${id}`}><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {/* Barrel */}
      <rect x="1" y="10" width="14" height="6" rx="1.5" fill={`${color}30`} stroke={color} strokeWidth="0.8" />
      <line x1="2" y1="13" x2="12" y2="13" stroke={color} strokeWidth="0.6" opacity="0.5" />
      {/* Muzzle flash */}
      {firing && <circle cx="1" cy="13" r="4" fill={color} opacity="0.4" filter={`url(#g${id})`}><animate attributeName="r" values="3;5;3" dur="0.2s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.3;0.6;0.3" dur="0.15s" repeatCount="indefinite" /></circle>}
      {/* Body */}
      <rect x="13" y="7" width="22" height="12" rx="3" fill={`${color}15`} stroke={color} strokeWidth="0.8" />
      {/* Screen */}
      <rect x="18" y="9.5" width="10" height="7" rx="1.5" fill="#060810" stroke={color} strokeWidth="0.5" opacity="0.8" />
      <text x="20" y="14.5" fill={color} fontSize="3.5" fontFamily="monospace" fontWeight="bold" opacity="0.9">P</text>
      {/* Indicator lights */}
      <circle cx="31" cy="11" r="1.2" fill={firing ? "#ff4040" : `${color}40`} stroke={color} strokeWidth="0.4" />
      <circle cx="31" cy="15" r="1.2" fill={`${color}20`} stroke={color} strokeWidth="0.4" />
      {/* Grip */}
      <path d="M 22 19 L 26 19 L 28 29 C 28.3 30 27.5 31 26.5 31 L 21.5 31 C 20.5 31 19.7 30 20 29 Z" fill={`${color}15`} stroke={color} strokeWidth="0.8" />
      <line x1="22" y1="22" x2="26" y2="22" stroke={color} strokeWidth="0.4" opacity="0.3" />
      <line x1="21.5" y1="25" x2="26.5" y2="25" stroke={color} strokeWidth="0.4" opacity="0.3" />
      {/* Antenna */}
      <path d="M 20 7 L 21.5 2 L 26.5 2 L 28 7" fill={`${color}10`} stroke={color} strokeWidth="0.6" />
      <line x1="24" y1="3" x2="24" y2="6.5" stroke={color} strokeWidth="0.6" opacity="0.6" filter={`url(#g${id})`} />
      {/* Energy cell */}
      <rect x="33" y="9" width="4" height="8" rx="1" fill="#060810" stroke="#00b4ff60" strokeWidth="0.5" />
      <rect x="33.8" y="10" width="2.4" height="2" rx="0.5" fill="#00b4ff" opacity={firing ? "0.7" : "0.2"} />
      <rect x="33.8" y="13" width="2.4" height="2" rx="0.5" fill="#00b4ff" opacity="0.1" />
    </svg>
  );
}
