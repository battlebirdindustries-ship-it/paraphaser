import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — paraphaser.ai",
  description: "Articles and updates from the paraphaser.ai team about AI writing tools, tips, and product news.",
};

const posts = [
  { title: "Introducing paraphaser.ai", date: "Feb 2026", excerpt: "We're launching six free AI writing tools with a phaser-powered twist. Here's the story behind the product and where we're headed." },
  { title: "5 Ways AI Can Improve Your Writing Today", date: "Coming Soon", excerpt: "Practical tips for using AI paraphrasers, summarizers, and generators to level up your writing workflow." },
  { title: "How We Built paraphaser.ai", date: "Coming Soon", excerpt: "A behind-the-scenes look at the tech stack, design decisions, and AI models powering our tools." },
];

export default function BlogPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-extrabold text-white mb-5 tracking-tight">Blog</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.title} className="p-5 rounded-2xl bg-[rgba(15,20,35,0.8)] border border-white/[0.06]">
            <div className="text-[11px] text-[#4a5068] font-mono mb-1.5">{post.date}</div>
            <div className="text-[17px] font-bold text-white mb-2">{post.title}</div>
            <div className="text-[13px] text-[#8892a8] leading-relaxed">{post.excerpt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
