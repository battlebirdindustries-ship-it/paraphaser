import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — paraphaser.ai",
  description: "Privacy policy for paraphaser.ai. Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-extrabold text-white mb-5 tracking-tight">Privacy Policy</h1>
      <p className="text-[11px] text-[#4a5068] mb-5">Last updated: February 2026</p>
      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">Information We Collect</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        When you use paraphaser.ai, we collect basic analytics data such as page views and tool usage counts. We use cookies to remember your preferences and track anonymous usage patterns. We do not collect, store, or sell any text you input into our tools.
      </p>
      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">How We Use Your Data</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        Analytics data helps us understand which tools are most popular and how to improve the user experience. We use Google Analytics and may display ads through Google AdSense, which uses cookies to serve relevant advertisements.
      </p>
      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">Third-Party Services</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        We use third-party AI APIs to process your text. Your input is sent to these services for processing and is not stored permanently. We also use Google AdSense for advertising, which may collect data according to Google&apos;s privacy policies.
      </p>
      <h2 className="text-lg font-bold text-white mt-7 mb-2.5">Your Rights</h2>
      <p className="text-sm text-[#8892a8] leading-relaxed mb-4">
        You can clear your browser cookies at any time to reset any locally stored preferences. If you have questions about your data, contact us at the email listed on our Contact page.
      </p>
    </div>
  );
}
