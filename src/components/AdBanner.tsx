export default function AdBanner({ label }: { label?: string }) {
  return (
    <div className="border border-dashed border-white/[0.06] rounded-xl px-4 py-5 text-center text-[#4a5068] text-[11px] tracking-wider font-mono">
      {label || "[ AD PLACEMENT — 728×90 LEADERBOARD ]"}
    </div>
  );
}
