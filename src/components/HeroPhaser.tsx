"use client";

export default function HeroPhaser({ firing }: { firing: boolean }) {
  return (
    <svg width="360" height="200" viewBox="0 0 360 200" fill="none" className="mx-auto">
      <defs>
        <linearGradient id="hbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1a1e30" /><stop offset="100%" stopColor="#0d1020" /></linearGradient>
        <linearGradient id="hbm" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#00ffc8" /><stop offset="50%" stopColor="#00b4ff" /><stop offset="100%" stopColor="#00ffc8" stopOpacity="0" /></linearGradient>
        <linearGradient id="hac" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#00ffc8" /><stop offset="100%" stopColor="#00b4ff" /></linearGradient>
        <filter id="hg"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="hbg2"><feGaussianBlur stdDeviation="8" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {firing && (<g>
        <rect x="62" y="68" width="300" height="10" rx="5" fill="url(#hbm)" filter="url(#hbg2)" opacity="0.8"><animate attributeName="opacity" values="0.6;0.9;0.6" dur="0.2s" repeatCount="indefinite" /></rect>
        <rect x="62" y="71" width="300" height="4" rx="2" fill="#00ffc8" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="0.15s" repeatCount="indefinite" /></rect>
        <circle cx="62" cy="73" r="16" fill="#00ffc8" opacity="0.3" filter="url(#hbg2)"><animate attributeName="r" values="12;18;12" dur="0.12s" repeatCount="indefinite" /></circle>
      </g>)}
      <rect x="22" y="64" width="52" height="18" rx="4" fill="url(#hbg)" stroke="#2a2f48" strokeWidth="1.5" />
      <rect x="26" y="72" width="40" height="2" rx="1" fill="url(#hac)" opacity="0.4" filter="url(#hg)" />
      <rect x="12" y="67" width="14" height="12" rx="3" fill="#252940" stroke="#00ffc850" strokeWidth="1" />
      <rect x="14" y="71" width="10" height="4" rx="1" fill="#00ffc8" opacity={firing ? "0.6" : "0.15"} />
      <path d="M 66 48 L 186 48 C 196 48 204 56 204 66 L 204 82 C 204 92 196 100 186 100 L 66 100 C 56 100 48 92 48 82 L 48 66 C 48 56 56 48 66 48 Z" fill="url(#hbg)" stroke="#2a2f48" strokeWidth="1.5" />
      <path d="M 72 48 L 180 48" stroke="url(#hac)" strokeWidth="2" opacity="0.3" filter="url(#hg)" />
      <rect x="92" y="58" width="64" height="32" rx="6" fill="#060810" stroke="#00ffc8" strokeWidth="1" opacity="0.7" />
      <text x="104" y="74" fill="#00ffc8" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.9">STUN</text>
      <text x="104" y="84" fill="#4a5068" fontSize="7" fontFamily="monospace">PWR ████░░</text>
      <circle cx="80" cy="66" r="4" fill="#151828" stroke="#00ffc8" strokeWidth="1" opacity="0.6" />
      <circle cx="80" cy="82" r="4" fill="#151828" stroke="#00b4ff" strokeWidth="1" opacity="0.6" />
      <circle cx="168" cy="66" r="4" fill={firing ? "#ff4040" : "#151828"} stroke={firing ? "#ff4040" : "#2a2f48"} strokeWidth="1">
        {firing && <animate attributeName="opacity" values="0.5;1;0.5" dur="0.2s" repeatCount="indefinite" />}
      </circle>
      <circle cx="168" cy="82" r="4" fill="#151828" stroke="#ffb800" strokeWidth="0.8" opacity="0.4" />
      <path d="M 110 100 L 142 100 L 154 160 C 156 168 150 174 142 174 L 110 174 C 102 174 96 168 98 160 Z" fill="url(#hbg)" stroke="#2a2f48" strokeWidth="1.5" />
      {[112,120,128,136,144,152].map(y=><line key={y} x1="106" y1={y} x2="146" y2={y} stroke="#2a2f48" strokeWidth="0.8" opacity="0.4" />)}
      <line x1="126" y1="104" x2="126" y2="168" stroke="#00ffc8" strokeWidth="0.6" opacity="0.15" />
      <path d="M 124 108 Q 108 125 114 138" stroke="#3a3f58" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 80 48 L 88 28 L 104 28 L 112 48" fill="url(#hbg)" stroke="#2a2f48" strokeWidth="1.2" />
      <line x1="96" y1="30" x2="96" y2="46" stroke="#00ffc8" strokeWidth="1.2" opacity="0.5" filter="url(#hg)" />
      <circle cx="96" cy="30" r="2" fill="#00ffc8" opacity="0.4" filter="url(#hg)" />
      <rect x="178" y="56" width="22" height="36" rx="5" fill="#0c0f1c" stroke="#00b4ff60" strokeWidth="1" />
      <rect x="182" y="60" width="14" height="8" rx="2" fill="#00b4ff" opacity={firing ? "0.6" : "0.15"}>
        {firing && <animate attributeName="opacity" values="0.15;0.6;0.15" dur="0.35s" repeatCount="indefinite" />}
      </rect>
      <rect x="182" y="71" width="14" height="8" rx="2" fill="#00b4ff" opacity={firing ? "0.35" : "0.08"} />
      <rect x="182" y="82" width="14" height="6" rx="2" fill="#00b4ff" opacity="0.04" />
    </svg>
  );
}
