import { Tool } from "@/types";

export default function AffiliateBox({ tool }: { tool: Tool }) {
  return (
    <div className="mt-6 p-6 rounded-2xl bg-[rgba(0,255,200,0.03)] border border-white/[0.06] hover:border-[rgba(0,255,200,0.15)] transition-colors">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <div className="text-[10px] font-mono font-semibold text-phaser-green tracking-[1.5px] mb-1.5">
            ⚡ UPGRADE YOUR ARSENAL
          </div>
          <div className="text-base font-bold text-white mb-1">
            Need more power? Try {tool.affiliateName}
          </div>
          <div className="text-sm text-[#8892a8]">{tool.affiliateDesc}</div>
        </div>
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-phaser-green to-phaser-blue text-[#080a14] text-sm font-bold cursor-pointer whitespace-nowrap border-none">
          {tool.affiliateCta}
        </button>
      </div>
    </div>
  );
}
