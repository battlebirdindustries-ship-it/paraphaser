import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "paraphaser.ai — Free AI Writing Tools | Paraphrase, Summarize & More",
  description:
    "Free AI-powered tools to paraphrase, summarize, generate emails, ad copy, SEO meta descriptions, and headlines. No signup required. Set phasers to paraphrase!",
  keywords: [
    "AI paraphraser",
    "free paraphrasing tool",
    "AI summarizer",
    "AI email writer",
    "AI ad copy generator",
    "SEO meta description generator",
    "AI headline generator",
    "free AI writing tools",
  ],
  openGraph: {
    title: "paraphaser.ai — Free AI Writing Tools",
    description: "Set phasers to paraphrase! Free AI tools to rewrite, summarize, and transform your text.",
    url: "https://paraphaser.ai",
    siteName: "paraphaser.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "paraphaser.ai — Free AI Writing Tools",
    description: "Set phasers to paraphrase! Free AI tools to rewrite, summarize, and transform your text.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
