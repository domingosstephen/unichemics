import type { MetadataRoute } from "next";
import { products, categories } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://sociedadeteoflorchemi.com";
const LAST_UPDATED = "2026-06-27";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/industries/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog/`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/privacy/`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/category/${cat.id}/`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.slug}/`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...blogPages];
}
