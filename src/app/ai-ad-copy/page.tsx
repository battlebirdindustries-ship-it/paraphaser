import { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools";
import ToolPageClient from "@/components/ToolPageClient";

const tool = getToolBySlug("ai-ad-copy")!;

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDesc,
  openGraph: {
    title: tool.metaTitle,
    description: tool.metaDesc,
    url: `https://paraphaser.ai/${tool.slug}`,
    siteName: "paraphaser.ai",
    type: "website",
  },
};

export default function Page() {
  return <ToolPageClient tool={tool} />;
}
