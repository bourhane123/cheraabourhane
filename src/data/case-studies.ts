export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  duration: string;
  services: string[];
  overview: string;
  objectives: string[];
  strategy: string[];
  execution: string[];
  metrics: { v: string; l: string }[];
  insights: { t: string; d: string }[];
  takeaway: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "classy-house",
    client: "Classy House",
    industry: "Home Decor & Accessories",
    title: "Scaling a home decor brand to 18.2x ROAS",
    tagline: "Offer-driven creatives, retargeting, and daily optimization that turned engagement into profitable purchases.",
    year: "2025",
    role: "Lead Performance Marketer",
    duration: "8 months",
    services: ["Meta Ads", "Catalog Setup", "Creative Testing", "Retargeting"],
    overview:
      "Classy House came in with a strong product line but inconsistent return on ad spend. We rebuilt their Meta funnel from the ground up — structured campaigns, a clean product catalog, and a creative testing system anchored in four high-performing themes.",
    objectives: [
      "Increase qualified purchases month over month",
      "Drive ROAS above 10x sustainably",
      "Strengthen brand engagement and repeat traffic",
    ],
    strategy: [
      "Catalog ads layered with broad and lookalike audiences",
      "Dedicated retargeting funnel for warm traffic",
      "Weekly creative testing across video, image, and mixed formats",
      "Theme-led messaging: Store, Community, Happiness, Design",
    ],
    execution: [
      "82 campaigns launched and optimized over the engagement window",
      "Daily budget pacing tuned around delivery and cost-per-purchase",
      "Top format (Video) drove 52.2% of total spend",
      "Continuous fatigue analysis kept creative rotation healthy",
    ],
    metrics: [
      { v: "18.2x", l: "ROAS (Purchases)" },
      { v: "3,120", l: "Purchases" },
      { v: "€7.14", l: "Cost / Purchase" },
      { v: "5.12%", l: "CTR (All)" },
      { v: "618.8K", l: "Reach (30d)" },
      { v: "82", l: "Campaigns Managed" },
    ],
    insights: [
      { t: "Video drove 52.2% of spend", d: "Short-form lifestyle video outperformed every static format. We doubled down with weekly hook iterations." },
      { t: "Store theme led at €12.1K", d: "The 'Store' creative theme consistently produced the lowest CPA and highest engagement rate." },
      { t: "Mixed creatives boosted reach", d: "Combining image, video, and carousel inside the same ad set widened delivery and lifted CTR by 22%." },
    ],
    takeaway:
      "Sustainable ROAS doesn't come from one winning ad — it comes from a system of testing, theme analysis, and daily optimization.",
  },
  {
    slug: "multi-account-scaling",
    client: "Agency Portfolio",
    industry: "Multi-Account Infrastructure",
    title: "Scaling multi-account Meta advertising systems",
    tagline: "Built and managed a scalable Meta Ads infrastructure across 14 accounts to drive consistent delivery and profitable scaling.",
    year: "2024 — 2026",
    role: "Performance Lead",
    duration: "Ongoing",
    services: ["Account Architecture", "Spend Allocation", "Delivery Monitoring", "Scaling Systems"],
    overview:
      "Operating €300K+ across multiple active Meta ad accounts requires more than good creative — it needs infrastructure. We built a scaling system that distributes spend intelligently, monitors delivery in real time, and keeps account health stable through volatility.",
    objectives: [
      "Manage €300K+ across multiple accounts without delivery drops",
      "Maintain consistent scaling and protect account health",
      "Reduce time-to-launch for new client campaigns",
    ],
    strategy: [
      "Centralized account dashboard with live spend and balance tracking",
      "Spend-limit pacing to avoid mid-flight disruption",
      "Risk segmentation across geos, payment methods, and account age",
      "Standardized naming and structure for cross-account reporting",
    ],
    execution: [
      "14 active accounts under simultaneous management",
      "2,000+ active ads orchestrated across the portfolio",
      "Weekly performance reviews and reallocation against ROAS",
      "Backup account pipeline to maintain continuity",
    ],
    metrics: [
      { v: "€300K+", l: "Total Ad Spend" },
      { v: "2,000+", l: "Active Ads" },
      { v: "14", l: "Active Accounts" },
      { v: "220+", l: "Accounts Managed Lifetime" },
      { v: "0", l: "Major Disruptions" },
      { v: "24/7", l: "Delivery Monitoring" },
    ],
    insights: [
      { t: "Smart systems beat manual effort", d: "Automated alerts on spend limits and balance recovered hours of weekly admin work." },
      { t: "Account diversity is leverage", d: "Distributing spend across geos and payment rails dramatically reduced single-point-of-failure risk." },
      { t: "Structure compounds", d: "Standardized naming made cross-account reporting fast — and made scaling repeatable." },
    ],
    takeaway:
      "Successful scaling comes from smart systems, constant monitoring, and a relentless focus on what drives profit.",
  },
  {
    slug: "multi-page-ecosystem",
    client: "Multi-brand Portfolio",
    industry: "Meta Pages & Organic Growth",
    title: "Building & scaling multi-page Meta ecosystems",
    tagline: "Seven active pages, 165K+ likes, and a system that pairs organic content with paid page-growth campaigns.",
    year: "2021 — 2026",
    role: "Page Growth & Content Lead",
    duration: "5+ years",
    services: ["Page Strategy", "Organic Content", "Page Growth Ads", "Engagement Systems"],
    overview:
      "Built and managed multiple Facebook and Instagram pages across different clients, combining niche positioning, organic content systems, and ongoing optimization to attract real audiences and support long-term business growth.",
    objectives: [
      "Build and scale multiple Meta pages from scratch",
      "Establish brand presence and audience trust",
      "Support paid campaigns with strong organic foundations",
    ],
    strategy: [
      "Niche-first page positioning per client vertical",
      "Optimized page setup, visuals, and content templates",
      "Organic + paid audience acquisition layered together",
      "Engaging, shareable content systems for compounding reach",
    ],
    execution: [
      "7 active pages across different clients",
      "1,555+ ads running concurrently across the page portfolio",
      "Ongoing engagement, comment moderation, and community work",
      "5+ years of continuous performance management",
    ],
    metrics: [
      { v: "7", l: "Active Pages" },
      { v: "165K+", l: "Total Likes" },
      { v: "1,555+", l: "Ads Running" },
      { v: "70+", l: "Pages Managed Lifetime" },
      { v: "5+", l: "Years Experience" },
      { v: "On-going", l: "Real Engagement" },
    ],
    insights: [
      { t: "Niche positioning compounds", d: "Pages with a tight, specific identity grew faster and converted paid traffic more efficiently." },
      { t: "Content systems beat one-offs", d: "Repeatable content templates kept output consistent without burning out the creative pipeline." },
      { t: "Organic supports paid", d: "Strong organic engagement signals lowered paid CPMs and lifted ad relevance scores." },
    ],
    takeaway:
      "Over 5+ years of managing client pages, structured content and paid page-growth systems built engaged audiences that performance campaigns could compound on.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const getAdjacent = (slug: string) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const len = caseStudies.length;
  return {
    prev: caseStudies[(i - 1 + len) % len],
    next: caseStudies[(i + 1) % len],
  };
};
