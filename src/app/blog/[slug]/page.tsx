import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDesc,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <Link
        href="/blog"
        className="text-[12px] font-mono text-[#4a5068] hover:text-phaser-green transition-colors no-underline"
      >
        ← Back to Blog
      </Link>
      <div className="text-[11px] text-[#4a5068] font-mono mt-5 mb-2">{post.date}</div>
      <h1 className="text-[28px] font-extrabold text-white mb-6 tracking-tight leading-tight">
        {post.title}
      </h1>
      <div
        className="blog-content text-[15px] text-[#c0c8d8] leading-[1.8]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {/* CTA */}
      <div className="mt-10 p-6 rounded-2xl bg-[rgba(0,255,200,0.04)] border border-[rgba(0,255,200,0.15)] text-center">
        <div className="text-lg font-bold text-white mb-1">Ready to try it yourself?</div>
        <div className="text-[13px] text-[#8892a8] mb-4">
          Six free AI writing tools — no signup required.
        </div>
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-xl text-sm font-bold no-underline transition-all"
          style={{
            background: "linear-gradient(135deg, #00ffc8, #00b4ff)",
            color: "#080a14",
            boxShadow: "0 0 30px rgba(0,255,200,0.2)",
          }}
        >
          Explore All Tools
        </Link>
      </div>

      <div className="mt-6 pt-6 border-t border-white/[0.06]">
        <Link
          href="/blog"
          className="text-[13px] text-phaser-green hover:underline no-underline"
        >
          ← More articles
        </Link>
      </div>
    </div>
  );
}
