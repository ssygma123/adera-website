export type ProductKind = "ad-package" | "prompt-package" | "prompt";

export type ShopCategory = "ad-copy" | "image" | "video" | "social";

export interface Product {
  id: string;
  kind: ProductKind;
  name: string;
  tagline: string;
  description: string;
  priceEUR: number;
  features?: string[];
  highlight?: boolean;
  category?: ShopCategory;
}

export const adPackages: Product[] = [
  {
    id: "ads-starter",
    kind: "ad-package",
    name: "Starter",
    tagline: "Test the waters",
    description: "Three AI-crafted ads to validate your messaging.",
    priceEUR: 299,
    features: [
      "3 AI Ads (static + video)",
      "2 revisions",
      "Delivery in 3 days",
      "Source files included"
    ]
  },
  {
    id: "ads-growth",
    kind: "ad-package",
    name: "Growth",
    tagline: "Scale what works",
    description: "Production-ready ad set with strategy guidance.",
    priceEUR: 699,
    highlight: true,
    features: [
      "10 AI Ads (static + video)",
      "Unlimited revisions",
      "30-min strategy call",
      "Delivery in 5 days",
      "A/B test variants"
    ]
  },
  {
    id: "ads-premium",
    kind: "ad-package",
    name: "Premium",
    tagline: "Full creative ops",
    description: "Dedicated manager + monthly retainer option.",
    priceEUR: 1499,
    features: [
      "25 AI Ads",
      "Dedicated account manager",
      "Monthly retainer option",
      "Priority delivery",
      "Brand guideline integration",
      "Performance reports"
    ]
  }
];

export const promptPackages: Product[] = [
  {
    id: "prompts-starter",
    kind: "prompt-package",
    name: "Prompt Starter Pack",
    tagline: "Get going fast",
    description: "Hand-picked prompts to spin up your first AI ad campaign.",
    priceEUR: 29,
    features: [
      "10 premium prompts for ads",
      "Copy + image variants",
      "Plain-English usage notes"
    ]
  },
  {
    id: "prompts-pro",
    kind: "prompt-package",
    name: "Prompt Pro Bundle",
    tagline: "Most popular",
    description: "A comprehensive prompt library with worked examples.",
    priceEUR: 79,
    highlight: true,
    features: [
      "35 prompts",
      "Use cases for every prompt",
      "Real before/after examples",
      "Lifetime updates"
    ]
  },
  {
    id: "prompts-agency",
    kind: "prompt-package",
    name: "Prompt Agency Kit",
    tagline: "For studios & teams",
    description: "Everything we use internally — copy, image, video, all of it.",
    priceEUR: 149,
    features: [
      "100+ prompts",
      "Video prompts (Sora, Runway)",
      "Midjourney style library",
      "Quarterly updates",
      "Commercial-use license"
    ]
  }
];

export const shopPrompts: Product[] = [
  {
    id: "prompt-hook-headlines",
    kind: "prompt",
    category: "ad-copy",
    name: "Scroll-Stopping Hooks",
    tagline: "12 headline frameworks",
    description: "Tested hook formulas that earn the click.",
    priceEUR: 9.99
  },
  {
    id: "prompt-conversion-copy",
    kind: "prompt",
    category: "ad-copy",
    name: "High-Converting Body Copy",
    tagline: "PAS, AIDA, and beyond",
    description: "Long-form ad copy generators tuned for conversion.",
    priceEUR: 14.99
  },
  {
    id: "prompt-mj-product",
    kind: "prompt",
    category: "image",
    name: "Midjourney Product Shots",
    tagline: "Photoreal product mockups",
    description: "Studio-grade Midjourney prompts for ecommerce hero shots.",
    priceEUR: 12.99
  },
  {
    id: "prompt-mj-lifestyle",
    kind: "prompt",
    category: "image",
    name: "Lifestyle Image Prompts",
    tagline: "Editorial-grade scenes",
    description: "Cinematic Midjourney prompts for lifestyle ad creative.",
    priceEUR: 14.99
  },
  {
    id: "prompt-mj-textures",
    kind: "prompt",
    category: "image",
    name: "Background & Texture Pack",
    tagline: "Endless ad backdrops",
    description: "30 prompts for textured backgrounds and abstract scenes.",
    priceEUR: 7.99
  },
  {
    id: "prompt-runway-pack",
    kind: "prompt",
    category: "video",
    name: "Runway Motion Prompts",
    tagline: "Camera moves that hook",
    description: "Cinematic Runway / Gen-3 prompts for short-form video ads.",
    priceEUR: 19.99
  },
  {
    id: "prompt-sora-loops",
    kind: "prompt",
    category: "video",
    name: "Sora Loop Templates",
    tagline: "Seamless 6-second loops",
    description: "Ten loop-friendly Sora prompts ideal for paid social.",
    priceEUR: 17.99
  },
  {
    id: "prompt-ig-reels",
    kind: "prompt",
    category: "social",
    name: "Instagram Reel Scripts",
    tagline: "Hook → payoff in 30s",
    description: "Reel script generator with proven 3-act structure.",
    priceEUR: 9.99
  },
  {
    id: "prompt-tiktok-ads",
    kind: "prompt",
    category: "social",
    name: "TikTok Ad Generator",
    tagline: "Native-feel scripts",
    description: "Prompts that sound like creators, not brands.",
    priceEUR: 11.99
  },
  {
    id: "prompt-x-threads",
    kind: "prompt",
    category: "social",
    name: "X Thread Builder",
    tagline: "Threads that go viral",
    description: "Generate hook-driven X threads with built-in CTA pacing.",
    priceEUR: 6.99
  },
  {
    id: "prompt-linkedin-b2b",
    kind: "prompt",
    category: "ad-copy",
    name: "LinkedIn B2B Ads",
    tagline: "Sober but effective",
    description: "Professional B2B ad copy without the cringe.",
    priceEUR: 12.99
  },
  {
    id: "prompt-email-funnel",
    kind: "prompt",
    category: "ad-copy",
    name: "Email Funnel Sequences",
    tagline: "Welcome → upsell",
    description: "5-email sequences for lead-magnet conversion flows.",
    priceEUR: 4.99
  }
];

export const allProducts: Product[] = [
  ...adPackages,
  ...promptPackages,
  ...shopPrompts
];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export const shopCategories: { id: ShopCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ad-copy", label: "Ad Copy" },
  { id: "image", label: "Image Prompts" },
  { id: "video", label: "Video Prompts" },
  { id: "social", label: "Social Media" }
];
