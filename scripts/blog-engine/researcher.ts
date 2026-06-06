import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import type { BlogCategory } from "../../types/blog";
import { getAllTopics } from "./config";
import type { TopicConfig } from "./config";

const anthropic = new Anthropic();

const RESEARCH_PROMPT = `You are a chemical industry content strategist. Your job is to discover new blog topic ideas for Sociedade Theoflor Chemi, an industrial chemical supplier.

Analyze the existing topics below and suggest NEW topics that would:
1. Fill content gaps in the chemical industry
2. Target high-value search queries from chemical buyers
3. Cover trending topics in chemical procurement and supply chain
4. Address common questions from industrial chemical customers
5. Target regions: Africa, South America, Middle East, Europe, Southeast Asia

EXISTING TOPICS:
{EXISTING_TOPICS}

Generate exactly 5 new topic suggestions. For each topic, provide:
- title: A compelling, SEO-friendly article title
- category: One of: chemical-guide, industry-application, safety-handling, market-insight, comparison, how-to
- keywords: 4-6 target keywords
- priority: high, medium, or low
- rationale: Why this topic would drive traffic and serve buyers

Return ONLY valid JSON array.`;

export interface ResearchResult {
  title: string;
  category: BlogCategory;
  keywords: string[];
  priority: "high" | "medium" | "low";
  rationale: string;
}

export async function discoverTopics(): Promise<ResearchResult[]> {
  const existingTopics = getAllTopics();
  const topicList = existingTopics.map((t) => `- [${t.category}] ${t.title}`).join("\n");
  const prompt = RESEARCH_PROMPT.replace("{EXISTING_TOPICS}", topicList);

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No text response from AI");
  }

  let jsonStr = textBlock.text.trim();
  if (jsonStr.startsWith("```")) {
    jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  return JSON.parse(jsonStr) as ResearchResult[];
}

export function saveDiscoveredTopics(topics: ResearchResult[]): void {
  const outputPath = path.join(__dirname, "discovered-topics.json");
  let existing: ResearchResult[] = [];
  if (fs.existsSync(outputPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
    } catch {
      existing = [];
    }
  }
  const merged = [...existing, ...topics];
  fs.writeFileSync(outputPath, JSON.stringify(merged, null, 2), "utf-8");
  console.log(`Saved ${topics.length} new topic ideas. Total: ${merged.length}`);
}

export function convertToTopicConfig(research: ResearchResult): TopicConfig {
  return {
    title: research.title,
    category: research.category,
    keywords: research.keywords,
    priority: research.priority,
  };
}

export async function runResearch(): Promise<void> {
  console.log("Researching new topic ideas...\n");
  try {
    const topics = await discoverTopics();
    for (const topic of topics) {
      console.log(`\n  [${topic.priority.toUpperCase()}] ${topic.title}`);
      console.log(`  Category: ${topic.category}`);
      console.log(`  Keywords: ${topic.keywords.join(", ")}`);
      console.log(`  Rationale: ${topic.rationale}`);
    }
    saveDiscoveredTopics(topics);
  } catch (error) {
    console.error("Research failed:", error);
    throw error;
  }
}
