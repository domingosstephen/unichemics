import { TOPIC_CLUSTERS, getAllTopics } from "./config";
import { getPublishedTopics, getPublishedByCategory } from "./publisher";
import type { TopicConfig } from "./config";

interface ScoredTopic {
  topic: TopicConfig;
  score: number;
}

export function selectTopics(count: number = 1): TopicConfig[] {
  const publishedTitles = getPublishedTopics();
  const categoryCount = getPublishedByCategory();
  const allTopics = getAllTopics();

  const unpublished = allTopics.filter((t) => !publishedTitles.includes(t.title));

  if (unpublished.length === 0) {
    console.log("All topics have been published. Run the researcher to discover new topics.");
    return [];
  }

  const scored: ScoredTopic[] = unpublished.map((topic) => {
    let score = 0;
    if (topic.priority === "high") score += 30;
    else if (topic.priority === "medium") score += 20;
    else score += 10;

    const catCount = categoryCount[topic.category] || 0;
    score += Math.max(0, 20 - catCount * 5);
    score += Math.random() * 10;

    return { topic, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const selected: TopicConfig[] = [];
  const usedCategories = new Set<string>();

  for (const { topic } of scored) {
    if (selected.length >= count) break;
    if (!usedCategories.has(topic.category) || selected.length >= TOPIC_CLUSTERS.length) {
      selected.push(topic);
      usedCategories.add(topic.category);
    }
  }

  if (selected.length < count) {
    for (const { topic } of scored) {
      if (selected.length >= count) break;
      if (!selected.includes(topic)) {
        selected.push(topic);
      }
    }
  }

  return selected.slice(0, count);
}

export function getTopicStats() {
  const allTopics = getAllTopics();
  const publishedTitles = getPublishedTopics();
  const categoryCount = getPublishedByCategory();

  return {
    totalTopics: allTopics.length,
    publishedCount: publishedTitles.length,
    remainingCount: allTopics.length - publishedTitles.length,
    byCategory: TOPIC_CLUSTERS.map((cluster) => ({
      category: cluster.category,
      total: cluster.topics.length,
      published: categoryCount[cluster.category] || 0,
      remaining: cluster.topics.length - (categoryCount[cluster.category] || 0),
    })),
  };
}
