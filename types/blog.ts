export interface BlogAuthor {
  name: string;
  title: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  keywords: string[];
  author: BlogAuthor;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  readingTime: number;
  featured: boolean;
  faqItems?: { question: string; answer: string }[];
  tldr?: string;
}

export type BlogCategory =
  | "chemical-guide"
  | "industry-application"
  | "safety-handling"
  | "market-insight"
  | "comparison"
  | "how-to";

export const BLOG_CATEGORIES: Record<BlogCategory, { label: string; description: string }> = {
  "chemical-guide": {
    label: "Chemical Guide",
    description: "Detailed guides on specific chemicals, their properties, and uses",
  },
  "industry-application": {
    label: "Industry Application",
    description: "How chemicals are used across different industries",
  },
  "safety-handling": {
    label: "Safety & Handling",
    description: "Chemical safety, SDS guidelines, and proper handling procedures",
  },
  "market-insight": {
    label: "Market Insight",
    description: "Chemical market trends, pricing, and supply chain analysis",
  },
  comparison: {
    label: "Comparison",
    description: "Side-by-side chemical comparisons for buyers",
  },
  "how-to": {
    label: "How-To",
    description: "Step-by-step guides for chemical procurement and use",
  },
};
