import fs from "fs";
import path from "path";
import type { BlogPost } from "../../types/blog";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const PUBLISHED_FILE = path.join(__dirname, "published.json");

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function publishPost(post: BlogPost): string {
  ensureDir(CONTENT_DIR);
  const filePath = path.join(CONTENT_DIR, `${post.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2), "utf-8");
  markPublished(post.slug, post.title, post.category);
  console.log(`Published: ${post.title} -> ${filePath}`);
  return filePath;
}

export function markPublished(slug: string, title: string, category: string): void {
  const data = getPublishedData();
  data.published.push({
    slug,
    title,
    category,
    publishedAt: new Date().toISOString(),
  });
  fs.writeFileSync(PUBLISHED_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export function getPublishedTopics(): string[] {
  const data = getPublishedData();
  return data.published.map((p: { title: string }) => p.title);
}

export function getPostCount(): number {
  const data = getPublishedData();
  return data.published.length;
}

interface PublishedEntry {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
}

interface PublishedData {
  published: PublishedEntry[];
}

function getPublishedData(): PublishedData {
  if (!fs.existsSync(PUBLISHED_FILE)) {
    return { published: [] };
  }
  try {
    const raw = fs.readFileSync(PUBLISHED_FILE, "utf-8");
    return JSON.parse(raw) as PublishedData;
  } catch {
    return { published: [] };
  }
}

export function getPublishedByCategory(): Record<string, number> {
  const data = getPublishedData();
  const counts: Record<string, number> = {};
  for (const entry of data.published) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
}
