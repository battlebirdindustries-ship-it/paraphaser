"use client";
import { useId } from "react";

export default function NavPhaserLogo({ size = 28 }: { size?: number }) {
  const id = useId();
  const color = "#00ffc8";
  return (
    <svg width={size * 1.5} height={size * 1.1} viewBox="-4 -1 48 36" fill="none" style={{ display: "block" }}>
      <defs>
        <filter id={`ng${id}`}><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {/* Barrel — right side */}
      <rect x="23" y="10" width="15" height="6" rx="1.5" fill={`${color}30`} stroke={color} strokeWidth="0.8" />
      <line x1="25" y1="13" x2="37" y2="13" stroke={color} strokeWidth="0.6" opacity="0.5" />
      {/* Muzzle flash */}
      <circle cx="38" cy="13" r="3" fill={color} opacity="0.4" filter={`url(#ng${id})`}>
        <animate attributeName="r" values="2;4;2" dur="0.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="0.15s" repeatCount="indefinite" />
      </circle>
      {/* Body */}
      <rect x="3" y="7" width="22" height="12" rx="3" fill={`${color}15`} stroke={color} strokeWidth="0.8" />
      {/* Screen */}
      <rect x="10" y="9.5" width="10" height="7" rx="1.5" fill="#060810" stroke={color} strokeWidth="0.5" opacity="0.8" />
      <text x="12" y="14.5" fill={color} fontSize="3.5" fontFamily="monospace" fontWeight="bold" opacity="0.9">P</text>
      {/* Indicator lights */}
      <circle cx="7" cy="11" r="1.2" fill="#ff4040" stroke={color} strokeWidth="0.4" />
      <circle cx="7" cy="15" r="1.2" fill={`${color}20`} stroke={color} strokeWidth="0.4" />
      {/* Grip */}
      <path d="M 12 19 L 16 19 L 18 29 C 18.3 30 17.5 31 16.5 31 L 11.5 31 C 10.5 31 9.7 30 10 29 Z" fill={`${color}15`} stroke={color} strokeWidth="0.8" />
      <line x1="12" y1="22" x2="16" y2="22" stroke={color} strokeWidth="0.4" opacity="0.3" />
      <line x1="11.5" y1="25" x2="16.5" y2="25" stroke={color} strokeWidth="0.4" opacity="0.3" />
      {/* Antenna */}
      <path d="M 10 7 L 11.5 2 L 16.5 2 L 18 7" fill={`${color}10`} stroke={color} strokeWidth="0.6" />
      <line x1="14" y1="3" x2="14" y2="6.5" stroke={color} strokeWidth="0.6" opacity="0.6" filter={`url(#ng${id})`} />
      {/* Energy cell — left */}
      <rect x="1" y="9" width="4" height="8" rx="1" fill="#060810" stroke="#00b4ff60" strokeWidth="0.5" />
      <rect x="1.8" y="10" width="2.4" height="2" rx="0.5" fill="#00b4ff" opacity="0.7" />
      <rect x="1.8" y="13" width="2.4" height="2" rx="0.5" fill="#00b4ff" opacity="0.1" />
    </svg>
  );
}
