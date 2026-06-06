import Anthropic from "@anthropic-ai/sdk";
import type { BlogPost, BlogCategory } from "../../types/blog";
import { getRandomAuthor, GENERATION_CONFIG } from "./config";
import type { TopicConfig } from "./config";

const anthropic = new Anthropic();

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, "");
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 250);
}

function selectImage(category: BlogCategory): { image: string; imageAlt: string } {
  const imageMap: Record<BlogCategory, { image: string; imageAlt: string }> = {
    "chemical-guide": { image: "/images/blog/chemicals-industrial.jpg", imageAlt: "Industrial chemicals in a laboratory setting" },
    "industry-application": { image: "/images/blog/water-treatment.jpg", imageAlt: "Chemical application in industrial process" },
    "safety-handling": { image: "/images/blog/safety-equipment.jpg", imageAlt: "Chemical safety equipment and protective gear" },
    "market-insight": { image: "/images/blog/warehouse-storage.jpg", imageAlt: "Chemical warehouse and supply chain operations" },
    comparison: { image: "/images/blog/laboratory-analysis.jpg", imageAlt: "Laboratory chemical analysis and comparison" },
    "how-to": { image: "/images/blog/chemicals-industrial.jpg", imageAlt: "Step-by-step chemical process guide" },
  };
  return imageMap[category] || imageMap["chemical-guide"];
}

const SYSTEM_PROMPT = `You are an expert chemical industry content writer for Sociedade Theoflor Chemi, a global industrial chemical supplier. You create authoritative, SEO-optimized blog articles that serve chemical buyers, procurement managers, plant operators, and engineers.

WRITING GUIDELINES:
- Write in a professional, authoritative tone suitable for B2B chemical buyers
- Use precise chemical terminology and include CAS numbers where relevant
- Include practical, actionable information that helps buyers make decisions
- Naturally weave in keywords without keyword stuffing
- Structure content with clear H2 and H3 headings
- Include data tables where relevant (HTML tables with proper classes)
- Reference industry standards (ASTM, ISO, GHS, REACH, etc.)
- Do NOT fabricate statistics or cite fake studies
- Mention Sociedade Theoflor Chemi naturally 1-2 times as a trusted supplier

OUTPUT FORMAT:
Return valid JSON with this exact structure:
{
  "title": "Article title",
  "seoTitle": "SEO-optimized title (50-60 chars)",
  "seoDescription": "Meta description (150-160 chars)",
  "excerpt": "2-3 sentence excerpt for listings",
  "content": "Full HTML article content with h2, h3, p, ul, ol, table tags",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "keywords": ["primary keyword", "secondary keyword"],
  "faqItems": [
    {"question": "Question 1?", "answer": "Answer 1"},
    {"question": "Question 2?", "answer": "Answer 2"},
    {"question": "Question 3?", "answer": "Answer 3"}
  ],
  "tldr": "One-paragraph summary of the key takeaways"
}

IMPORTANT: Return ONLY valid JSON. No markdown code blocks or extra text.`;

export async function generateArticle(topic: TopicConfig): Promise<BlogPost> {
  const author = getRandomAuthor();
  const slug = slugify(topic.title);
  const { image, imageAlt } = selectImage(topic.category);

  const userPrompt = `Write a comprehensive blog article about: "${topic.title}"

Category: ${topic.category}
Target Keywords: ${topic.keywords.join(", ")}
Word Count: ${GENERATION_CONFIG.minWordCount}-${GENERATION_CONFIG.maxWordCount} words
Target Audience: Chemical buyers, procurement managers, industrial engineers

Requirements:
1. Create an in-depth, authoritative article with practical value
2. Include 4-6 H2 sections with H3 subsections where appropriate
3. Add a relevant HTML data table if applicable
4. Include 3-5 FAQ items that target People Also Ask queries
5. Optimize for both search engines and AI answer engines (AEO/GEO)
6. Include a concise TLDR summary paragraph
7. Use the keywords naturally throughout the content

Remember: Return ONLY valid JSON matching the specified structure.`;

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [{ role: "user", content: userPrompt }],
    system: SYSTEM_PROMPT,
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No text response from AI");
  }

  let jsonStr = textBlock.text.trim();
  if (jsonStr.startsWith("```")) {
    jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  const generated = JSON.parse(jsonStr);
  const now = new Date().toISOString();

  const post: BlogPost = {
    slug,
    title: generated.title || topic.title,
    seoTitle: generated.seoTitle || topic.title,
    seoDescription: generated.seoDescription || generated.excerpt || "",
    excerpt: generated.excerpt || "",
    content: generated.content || "",
    category: topic.category,
    tags: generated.tags || topic.keywords.slice(0, 5),
    keywords: generated.keywords || topic.keywords,
    author,
    publishedAt: now,
    updatedAt: now,
    image,
    imageAlt,
    readingTime: estimateReadingTime(generated.content || ""),
    featured: topic.priority === "high",
    faqItems: generated.faqItems || [],
    tldr: generated.tldr || "",
  };

  return post;
}
