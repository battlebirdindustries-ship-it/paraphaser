import { Tool } from "@/types";

export const TOOLS: Tool[] = [
  {
    name: "Paraphraser",
    slug: "ai-paraphraser",
    setting: "STUN",
    desc: "Rewrite text in any tone or style",
    longDesc:
      "Transform your writing instantly. Paste any text and our AI will rewrite it in your chosen tone — professional, casual, academic, or creative. Perfect for essays, emails, and content.",
    color: "#00ffc8",
    metaTitle: "Free AI Paraphraser — Rewrite Text Instantly | paraphaser.ai",
    metaDesc:
      "Paraphrase any text for free with AI. Rewrite in professional, casual, academic, or creative tones. No signup required.",
    sampleInput:
      "Artificial intelligence has fundamentally transformed the way businesses operate across every industry. Companies are now leveraging machine learning algorithms to analyze vast datasets, predict consumer behavior, and automate repetitive tasks that previously required significant human labor.",
    sampleOutputs: {
      Professional:
        "AI has reshaped how companies function across all sectors. Organizations now harness ML algorithms to process massive data collections, forecast customer patterns, and streamline routine workflows that once demanded considerable manual effort.",
      Casual:
        "AI is basically changing everything about how businesses work. Companies are using smart algorithms to crunch tons of data, figure out what customers want, and handle boring tasks that used to need actual people to do.",
      Academic:
        "The advent of artificial intelligence has precipitated a paradigm shift in organizational operations across diverse industrial sectors. Contemporary enterprises increasingly deploy machine learning methodologies to interrogate voluminous datasets, prognosticate consumer behavioral patterns, and systematize iterative processes formerly dependent upon human capital.",
      Creative:
        "Like a digital revolution sweeping through every corner of commerce, AI has rewritten the rules of business. Smart algorithms now dance through mountains of data, reading consumer minds and handling the mundane — freeing human hands for the work that truly matters.",
      Simplified:
        "AI is changing how businesses work. Companies use smart computer programs to look at lots of information, understand what customers want, and do routine work automatically.",
    },
    affiliateName: "QuillBot Pro",
    affiliateDesc: "Advanced AI rewriting with 8 modes and no word limit.",
    affiliateCta: "Try QuillBot Free →",
  },
  {
    name: "Summarizer",
    slug: "ai-summarizer",
    setting: "COMPRESS",
    desc: "Condense long text into key points",
    longDesc:
      "Turn lengthy articles, documents, and essays into clear, concise summaries. Our AI extracts the key points and delivers them in seconds.",
    color: "#00b4ff",
    metaTitle: "Free AI Text Summarizer — Condense Any Text | paraphaser.ai",
    metaDesc:
      "Summarize articles, essays, and documents instantly with AI. Get key points in seconds. Free, no signup required.",
    sampleInput:
      "The development of renewable energy sources has become one of the most critical challenges facing humanity in the 21st century. As fossil fuel reserves continue to deplete and the effects of climate change become increasingly severe, governments and private enterprises worldwide are investing billions of dollars into solar, wind, and hydroelectric power generation. Solar energy, in particular, has seen remarkable growth, with the cost of photovoltaic panels dropping by over 90% in the last decade. Wind energy has similarly expanded, with offshore wind farms now capable of powering entire cities. Despite these advances, significant challenges remain, including energy storage limitations, grid infrastructure modernization, and the political complexities of transitioning away from established fossil fuel industries.",
    sampleOutputs: {
      Professional:
        "KEY POINTS:\n\n• Renewable energy development is a critical 21st-century priority driven by fossil fuel depletion and climate change\n• Solar panel costs have dropped 90%+ in the past decade, driving massive adoption\n• Offshore wind farms can now power entire cities\n• Major remaining challenges: energy storage, grid modernization, and political barriers to fossil fuel transition\n• Governments and private sector are investing billions globally",
      Casual:
        "TLDR: Renewable energy is booming — solar costs dropped 90% and wind farms can power whole cities now. But we still need better batteries, updated power grids, and to deal with oil industry politics. Basically, we're making progress but there's still work to do.",
      Academic:
        "SUMMARY: The transition to renewable energy constitutes a paramount contemporary challenge. While photovoltaic cost reductions exceeding 90% and offshore wind developments demonstrate significant technological progress, persistent obstacles in energy storage capacity, grid infrastructure, and fossil fuel industry political dynamics continue to impede the pace of transition.",
      Creative:
        "The green energy revolution is here — and it's winning. Solar got 90% cheaper in just a decade. Wind farms are lighting up cities. But the old guard isn't going quietly, and we still need to crack the battery puzzle. The race to a clean future is on.",
      Simplified:
        "Renewable energy like solar and wind power is growing fast. Solar panels are 90% cheaper now. Wind farms can power whole cities. But we still need better ways to store energy and update our power systems.",
    },
    affiliateName: "TLDR This Pro",
    affiliateDesc: "Summarize entire web pages, PDFs, and documents instantly.",
    affiliateCta: "Try TLDR This →",
  },
  {
    name: "Email Writer",
    slug: "ai-email-writer",
    setting: "TRANSMIT",
    desc: "Generate professional emails in seconds",
    longDesc:
      "Write polished, effective emails instantly. Describe what you need and our AI crafts the perfect email — from cold outreach to follow-ups, apologies to thank-yous.",
    color: "#7b61ff",
    metaTitle: "Free AI Email Generator — Write Emails Instantly | paraphaser.ai",
    metaDesc:
      "Generate professional emails with AI. Cold outreach, follow-ups, thank-yous, and more. Free email writer, no signup.",
    sampleInput:
      "Write a follow-up email to a potential client named Sarah at TechCorp. We had a demo call last week where I showed our analytics platform. She seemed interested but mentioned budget concerns. I want to address the budget issue and suggest a pilot program.",
    sampleOutputs: {
      Professional:
        "Subject: Following Up — Flexible Options for TechCorp\n\nHi Sarah,\n\nThank you for taking the time to explore our analytics platform last week. I really enjoyed learning about TechCorp's data challenges and showing how we can help.\n\nI understand budget considerations are important, and I want to make this as easy as possible for your team. That's why I'd like to propose a 30-day pilot program — no long-term commitment, just a chance to see the ROI firsthand.\n\nThe pilot would include:\n• Full access to our core analytics suite\n• Dedicated onboarding support\n• Custom dashboard setup for your key metrics\n\nWould you be open to a quick 15-minute call this week to discuss the details?\n\nBest regards",
      Casual:
        "Subject: Hey Sarah — Quick idea for TechCorp\n\nHey Sarah!\n\nGreat chatting with you last week about the analytics platform. I've been thinking about what you mentioned regarding the budget.\n\nWhat if we started with a no-strings-attached pilot? 30 days, full access, and we'll even set up your dashboards for you. That way your team can see the value before committing to anything.\n\nWant to hop on a quick call this week to talk it through?\n\nCheers!",
      Academic:
        "Subject: Proposal for Pilot Program — Analytics Platform Evaluation\n\nDear Sarah,\n\nI am writing to follow up on our demonstration session regarding our analytics platform. I appreciate your thorough evaluation and the insightful questions posed during our meeting.\n\nIn consideration of the budgetary constraints you outlined, I would like to formally propose a structured pilot program of 30 days duration. This would enable TechCorp to conduct a comprehensive assessment of the platform's capabilities and return on investment prior to any financial commitment.\n\nI would welcome the opportunity to discuss this proposal at your earliest convenience.\n\nRespectfully,",
      Creative:
        "Subject: Let's take the analytics platform for a test drive\n\nHi Sarah,\n\nOur call last week got me excited about what we could build together for TechCorp. And I totally hear you on the budget — nobody wants to leap before they look.\n\nSo here's my pitch: a 30-day pilot, zero risk. Think of it as a test drive. We'll set up everything, configure your dashboards, and let the results speak for themselves.\n\nIf the numbers don't wow you, no hard feelings. But I have a feeling they will.\n\nFree for 15 minutes this week?",
      Simplified:
        "Subject: Following up on our call\n\nHi Sarah,\n\nThanks for meeting with me last week. I know budget is a concern.\n\nI'd like to offer a free 30-day trial of our analytics platform. No commitment needed. We'll help set everything up.\n\nWould you like to chat about it this week?\n\nThanks!",
    },
    affiliateName: "Lavender AI",
    affiliateDesc: "AI email coach that helps you write better emails that get replies.",
    affiliateCta: "Try Lavender Free →",
  },
  {
    name: "Ad Copy",
    slug: "ai-ad-copy",
    setting: "TARGET",
    desc: "Create high-converting ad copy",
    longDesc:
      "Generate scroll-stopping ad copy for Google Ads, Facebook, Instagram, and more. Describe your product and get multiple variations optimized for conversions.",
    color: "#ff4040",
    metaTitle: "Free AI Ad Copy Generator — Google & Facebook Ads | paraphaser.ai",
    metaDesc:
      "Generate high-converting ad copy for Google Ads, Facebook, and Instagram. Multiple variations in seconds. Free AI ad writer.",
    sampleInput:
      "Product: Noise-canceling wireless earbuds called 'SilentPods Pro'. Price: $79. Key features: 40-hour battery, active noise cancellation, IPX5 waterproof, memory foam tips. Target audience: remote workers and commuters.",
    sampleOutputs: {
      Professional:
        "GOOGLE ADS:\n\nHeadline 1: SilentPods Pro — 40Hr ANC Earbuds | $79\nHeadline 2: Block Distractions. Stay Focused.\nHeadline 3: Premium Noise-Canceling | Free Shipping\nDescription: Active noise cancellation, 40-hour battery, IPX5 waterproof. Memory foam comfort for all-day wear. Perfect for remote work & commuting. Order now.\n\nFACEBOOK AD:\n\nYour open office doesn't stand a chance.\n\nSilentPods Pro blocks the noise so you can focus on what matters. 40 hours of battery. Active noise cancellation. Waterproof design.\n\nAll for just $79.\n\n→ Shop Now",
      Casual:
        "GOOGLE ADS:\n\nHeadline 1: These $79 Earbuds Block EVERYTHING\nHeadline 2: 40 Hours of Pure Silence\nHeadline 3: Your Commute Just Got an Upgrade\nDescription: ANC earbuds that actually work. 40hrs battery, waterproof, crazy comfortable memory foam tips. Remote workers are obsessed. Just $79.\n\nFACEBOOK AD:\n\nThat coworker who won't stop talking? Problem solved.\n\nSilentPods Pro — 40 hours of noise-canceling bliss for just $79. Waterproof, ultra-comfy, and they'll last your entire work week on one charge.\n\nYour ears will thank you.",
      Academic:
        "GOOGLE ADS:\n\nHeadline 1: SilentPods Pro — Advanced ANC Technology\nHeadline 2: Engineered for Focused Productivity\nHeadline 3: Professional-Grade Audio | 40-Hour Battery\nDescription: Featuring advanced active noise cancellation, extended 40-hour battery life, and IPX5 water resistance. Ergonomic memory foam design for sustained comfortable use.\n\nFACEBOOK AD:\n\nDesigned for professionals who demand focus.\n\nSilentPods Pro delivers advanced active noise cancellation with a 40-hour battery life, ensuring uninterrupted productivity throughout your workday.\n\nInvest in your focus — $79.",
      Creative:
        "GOOGLE ADS:\n\nHeadline 1: Silence Is a Superpower. Get It for $79.\nHeadline 2: 40 Hours of Focus in Your Pocket\nHeadline 3: The Earbuds That Mute the World\nDescription: SilentPods Pro. Active noise cancellation that turns chaos into calm. 40hrs battery. Waterproof. Memory foam comfort. Your new secret weapon.\n\nFACEBOOK AD:\n\nImagine pressing play on silence.\n\nNo office chatter. No subway rumble. Just you, your thoughts, and 40 hours of pure, uninterrupted focus.\n\nSilentPods Pro — $79 for your sanity back.",
      Simplified:
        "GOOGLE ADS:\n\nHeadline 1: SilentPods Pro Earbuds — Only $79\nHeadline 2: Block Noise. 40-Hour Battery.\nHeadline 3: Wireless Earbuds | Waterproof\nDescription: Noise-canceling earbuds with 40-hour battery. Waterproof and comfortable. Great for work and travel. $79.\n\nFACEBOOK AD:\n\nNeed quiet while you work?\n\nSilentPods Pro blocks outside noise. Battery lasts 40 hours. Waterproof and super comfortable.\n\nOnly $79. Free shipping.\n\nGet yours now →",
    },
    affiliateName: "Jasper AI",
    affiliateDesc: "Enterprise AI for marketing teams. Generate ads, copy, and content at scale.",
    affiliateCta: "Try Jasper Free →",
  },
  {
    name: "SEO Meta",
    slug: "ai-seo-meta",
    setting: "SCAN",
    desc: "Generate optimized meta descriptions",
    longDesc:
      "Create SEO-optimized meta titles and descriptions that boost click-through rates. Enter your page topic and get multiple variations ready to paste into your CMS.",
    color: "#ffb800",
    metaTitle: "Free AI Meta Description Generator — SEO Tool | paraphaser.ai",
    metaDesc:
      "Generate SEO-optimized meta titles and descriptions with AI. Boost your click-through rates. Free SEO meta tag generator.",
    sampleInput:
      "Page about: Best budget laptops for college students in 2026. The article reviews 10 laptops under $600 with pros and cons for each. Covers brands like Lenovo, HP, Acer, and ASUS.",
    sampleOutputs: {
      Professional:
        "META TITLE OPTIONS:\n\n1. 10 Best Budget Laptops for College Students (2026) | Under $600\n2. Best College Laptops Under $600 in 2026 — Expert Reviews\n3. Top 10 Student Laptops 2026: Budget Picks Under $600\n\nMETA DESCRIPTIONS:\n\n1. Looking for an affordable college laptop? We reviewed the 10 best laptops under $600 from Lenovo, HP, Acer & ASUS. Find your perfect student laptop for 2026. (155 chars)\n\n2. Our experts tested 10 budget laptops under $600 for college students. Compare specs, battery life & value from top brands. Updated for 2026. (142 chars)\n\n3. Don't overspend on a college laptop. See our 2026 guide to the best student laptops under $600 — with honest pros, cons & recommendations. (140 chars)",
      Casual:
        "META TITLE OPTIONS:\n\n1. Best Cheap Laptops for College 2026 (All Under $600!)\n2. 10 Laptops College Students Actually Love — Under $600\n3. College Laptop Guide 2026: Great Picks That Won't Break the Bank\n\nMETA DESCRIPTIONS:\n\n1. College is expensive enough — your laptop doesn't have to be. We found 10 awesome laptops under $600 from Lenovo, HP, Acer & more. (132 chars)\n\n2. Need a solid laptop for school without breaking the bank? Here are 10 budget laptops under $600 that students swear by in 2026. (127 chars)",
      Academic:
        "META TITLE OPTIONS:\n\n1. Comprehensive Review: 10 Best Budget Laptops for Students (2026)\n2. 2026 Student Laptop Guide: Sub-$600 Options Evaluated\n3. Budget Laptop Analysis for Academic Use — 2026 Edition\n\nMETA DESCRIPTIONS:\n\n1. A comprehensive evaluation of 10 budget laptops under $600 optimized for academic use. Detailed analysis of specifications, performance metrics, and value. (158 chars)\n\n2. This guide examines the most cost-effective laptop options for college students in 2026, featuring thorough assessments of Lenovo, HP, Acer, and ASUS models. (157 chars)",
      Creative:
        "META TITLE OPTIONS:\n\n1. 10 Laptops That Prove College Students Can Win (2026)\n2. Your $600 College Laptop Guide — Because Budgets Exist\n3. Best Budget Laptops for Students 2026: Big Performance, Small Price\n\nMETA DESCRIPTIONS:\n\n1. Your GPA shouldn't suffer because of your bank account. Discover 10 incredible laptops under $600 that'll power you through college in 2026. (154 chars)\n\n2. Great news: you don't need a fortune for a solid college laptop. We found 10 winners under $600. Lenovo, HP, Acer & ASUS — all reviewed. (145 chars)",
      Simplified:
        "META TITLE OPTIONS:\n\n1. 10 Best Cheap Laptops for College Students 2026\n2. Good College Laptops Under $600 — 2026 Guide\n3. Affordable Student Laptops 2026: Top 10 Picks\n\nMETA DESCRIPTIONS:\n\n1. Find the best laptop for college under $600. We reviewed 10 popular laptops from Lenovo, HP, Acer, and ASUS for students in 2026. (145 chars)\n\n2. Need a good laptop for school? See our list of 10 affordable laptops under $600. Easy-to-read reviews with pros and cons. (122 chars)",
    },
    affiliateName: "SurferSEO",
    affiliateDesc: "AI-powered SEO tool for content optimization and keyword research.",
    affiliateCta: "Try Surfer Free →",
  },
  {
    name: "Headlines",
    slug: "ai-headlines",
    setting: "BLAST",
    desc: "Generate catchy, click-worthy headlines",
    longDesc:
      "Create irresistible headlines for blog posts, articles, and social media. Enter your topic and get 10 headline variations optimized for engagement.",
    color: "#ff4ecb",
    metaTitle: "Free AI Headline Generator — Blog & Article Titles | paraphaser.ai",
    metaDesc:
      "Generate catchy headlines and blog titles with AI. Get 10 click-worthy headline variations in seconds. Free headline generator.",
    sampleInput:
      "Topic: How remote workers can stay productive and avoid burnout while working from home",
    sampleOutputs: {
      Professional:
        "HEADLINE OPTIONS:\n\n1. Remote Work Productivity: 12 Strategies to Stay Focused and Avoid Burnout\n2. The Complete Guide to Thriving as a Remote Worker in 2026\n3. How Top Performers Stay Productive Working From Home\n4. Remote Work Without the Burnout: A Framework for Sustainable Productivity\n5. Work From Home Smarter: Expert Tips for Focus, Balance, and Performance\n6. The Remote Worker's Playbook: Productivity Without Sacrificing Wellbeing\n7. Beyond the Home Office: Building Habits That Prevent Remote Burnout\n8. Stay Sharp, Stay Sane: The Modern Guide to Remote Productivity\n9. Why Some Remote Workers Thrive While Others Burn Out\n10. Mastering Remote Work: Proven Methods to Boost Output and Protect Your Energy",
      Casual:
        "HEADLINE OPTIONS:\n\n1. Working From Home Without Losing Your Mind: A Real Guide\n2. 12 WFH Hacks That Actually Keep You Productive (And Sane)\n3. How I Stopped Burning Out Working From Home — And You Can Too\n4. The No-BS Guide to Being Productive in Your Pajamas\n5. Remote Work Burnout Is Real. Here's How to Beat It.\n6. Your Home Office Doesn't Have to Be a Trap: Tips for Staying Sharp\n7. From Couch Potato to Productivity Machine: A WFH Transformation\n8. How to Actually Get Stuff Done When Your Bed Is 10 Feet Away\n9. The Secret to WFH Productivity? It's Not What You Think.\n10. Stop Overworking Yourself at Home: A Guide to Remote Balance",
      Academic:
        "HEADLINE OPTIONS:\n\n1. Telecommuting Efficacy: Evidence-Based Strategies for Sustained Productivity\n2. Occupational Burnout in Remote Work Environments: Prevention and Mitigation\n3. A Systematic Approach to Productivity Optimization in Distributed Work\n4. The Psychology of Remote Work: Maintaining Performance and Wellbeing\n5. Work-From-Home Productivity: A Comprehensive Review of Best Practices\n6. Balancing Autonomy and Structure: Frameworks for Remote Work Success\n7. Digital Workplace Wellbeing: Strategies to Counter Remote Work Fatigue\n8. Cognitive Performance in Home Office Environments: Challenges and Solutions\n9. The Remote Productivity Paradox: Working More While Achieving Less\n10. Sustainable Remote Work: An Integrated Model for Productivity and Health",
      Creative:
        "HEADLINE OPTIONS:\n\n1. Your Living Room Is Lying to You: The Truth About WFH Productivity\n2. The Art of Working From Home Without Becoming a Zombie\n3. Burn Bright, Not Out: A Remote Worker's Survival Manual\n4. Warning: Your Home Office May Be Slowly Destroying You (Here's the Fix)\n5. The 5am Club Is Wrong. Here's What Actually Works Remotely.\n6. How to Turn Your Sweatpants Into a Power Suit (Metaphorically)\n7. The Remote Work Trap Nobody Talks About — And 12 Ways to Escape\n8. From Burnout to Breakthrough: Rewriting Your Work-From-Home Story\n9. What Your Boss Won't Tell You About Staying Productive at Home\n10. The Lazy Person's Guide to Being Ridiculously Productive From Home",
      Simplified:
        "HEADLINE OPTIONS:\n\n1. 12 Simple Tips for Working From Home Without Getting Tired\n2. How to Stay Focused When Working From Home\n3. A Simple Guide to Remote Work Productivity\n4. Working From Home: How to Get More Done and Feel Better\n5. Easy Ways to Be More Productive at Home\n6. Don't Let Working From Home Wear You Out: 10 Tips\n7. How to Work From Home and Still Have Energy\n8. Remote Work Made Easy: A Beginner's Guide to Productivity\n9. Simple Habits That Make Working From Home Better\n10. How to Avoid Burnout When You Work Remotely",
    },
    affiliateName: "CoSchedule Headline Analyzer",
    affiliateDesc: "Score your headlines and get data-driven suggestions to improve CTR.",
    affiliateCta: "Try CoSchedule →",
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
