import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — paraphaser.ai",
  description: "Articles and updates from the paraphaser.ai team about AI writing tools, tips, and product news.",
};

export default function BlogPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-extrabold text-white mb-5 tracking-tight">Blog</h1>
      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-5 rounded-2xl bg-[rgba(15,20,35,0.8)] border border-white/[0.06] hover:border-[rgba(0,255,200,0.2)] transition-all no-underline"
          >
            <div className="text-[11px] text-[#4a5068] font-mono mb-1.5">{post.date}</div>
            <div className="text-[17px] font-bold text-white mb-2">{post.title}</div>
            <div className="text-[13px] text-[#8892a8] leading-relaxed">{post.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
