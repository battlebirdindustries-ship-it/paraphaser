export default function MiniPhaser({ color = "#00ffc8", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 32 20" fill="none">
      <rect x="1" y="7" width="9" height="4" rx="1" fill={`${color}30`} stroke={color} strokeWidth="0.6" />
      <rect x="9" y="5" width="14" height="8" rx="2" fill={`${color}15`} stroke={color} strokeWidth="0.6" />
      <rect x="12" y="6.5" width="6" height="5" rx="1" fill="#060810" stroke={color} strokeWidth="0.4" opacity="0.7" />
      <path d="M 15 13 L 17 13 L 18 19 C 18.1 19.5 17.8 20 17.3 20 L 14.7 20 C 14.2 20 13.9 19.5 14 19 Z" fill={`${color}15`} stroke={color} strokeWidth="0.5" />
      <path d="M 13 5 L 14 1.5 L 18 1.5 L 19 5" fill={`${color}10`} stroke={color} strokeWidth="0.4" />
      <line x1="16" y1="2" x2="16" y2="4.5" stroke={color} strokeWidth="0.4" opacity="0.5" />
    </svg>
  );
}
