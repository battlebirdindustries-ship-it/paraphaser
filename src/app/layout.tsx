import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free AI Paraphrasing Tool Online — Rewrite, Summarize & More | paraphaser.ai",
  description:
    "Free AI paraphrasing tool, text summarizer, email writer, ad copy generator, and more. Rewrite text online instantly in any tone — no signup required. 100% free AI writing tools.",
  keywords: [
    "AI paraphraser",
    "free paraphrasing tool",
    "paraphrasing tool online free",
    "AI text rewriter",
    "sentence rewriter",
    "word changer",
    "rephrase tool online free",
    "AI summarizer",
    "text summarizer free",
    "AI email writer",
    "AI email generator free",
    "AI ad copy generator",
    "SEO meta description generator",
    "AI headline generator",
    "free AI writing tools",
    "free AI writing tools no signup",
    "rewrite text online free",
    "paragraph rewriter",
    "content rewriter",
    "AI rewording tool",
    "paraphrase generator",
    "article rewriter free",
  ],
  openGraph: {
    title: "Free AI Paraphrasing Tool — Rewrite Text Online Instantly",
    description: "Free AI-powered paraphrasing tool, text summarizer, email writer, and more. Rewrite in any tone — no signup required.",
    url: "https://paraphaser.ai",
    siteName: "paraphaser.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Paraphrasing Tool — Rewrite Text Online Instantly",
    description: "Free AI-powered paraphrasing tool, text summarizer, email writer, and more. Rewrite in any tone — no signup required.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://paraphaser.ai" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GY3GLR28NZ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GY3GLR28NZ');`,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4118298040987575"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
