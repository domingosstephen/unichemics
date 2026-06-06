import type { BlogPost } from "@/types/blog";
import blogIndex from "../../content/blog-index.json";

const posts = blogIndex as BlogPost[];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
export function getPostBySlug(slug: string): BlogPost | null {
  return posts.find((p) => p.slug === slug) || null;
}
export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({ p, s: (p.category === current.category ? 10 : 0) }))
    .sort((a, b) => b.s - a.s).slice(0, limit).map(({ p }) => p);
}
