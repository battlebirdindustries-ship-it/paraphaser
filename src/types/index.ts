export type Tone = "Professional" | "Casual" | "Academic" | "Creative" | "Simplified";

export interface Tool {
  name: string;
  slug: string;
  setting: string;
  desc: string;
  longDesc: string;
  color: string;
  metaTitle: string;
  metaDesc: string;
  sampleInput: string;
  sampleOutputs: Record<Tone, string>;
  affiliateName: string;
  affiliateDesc: string;
  affiliateCta: string;
}

export const TONES: Tone[] = ["Professional", "Casual", "Academic", "Creative", "Simplified"];
