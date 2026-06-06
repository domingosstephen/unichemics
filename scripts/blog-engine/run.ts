import { selectTopics, getTopicStats } from "./topic-selector";
import { generateArticle } from "./generator";
import { publishPost, getPostCount } from "./publisher";
import { runResearch } from "./researcher";

async function main() {
  const args = process.argv.slice(2);

  const isStats = args.includes("--stats");
  const isDryRun = args.includes("--dry-run");
  const isResearch = args.includes("--research");
  const countFlag = args.find((a) => a.startsWith("--count="));
  const count = countFlag ? parseInt(countFlag.split("=")[1], 10) : 1;

  console.log("=== Sociedade Theoflor Chemi Blog Engine ===\n");

  if (isStats) {
    const stats = getTopicStats();
    console.log("Blog Statistics:");
    console.log(`  Total topics in config: ${stats.totalTopics}`);
    console.log(`  Published articles: ${stats.publishedCount}`);
    console.log(`  Remaining topics: ${stats.remainingCount}`);
    console.log("\nBy Category:");
    for (const cat of stats.byCategory) {
      console.log(`  ${cat.category}: ${cat.published}/${cat.total} published (${cat.remaining} remaining)`);
    }
    return;
  }

  if (isResearch) {
    await runResearch();
    return;
  }

  const topics = selectTopics(count);

  if (topics.length === 0) {
    console.log("No unpublished topics available. Run with --research to discover new topics.");
    return;
  }

  console.log(`Selected ${topics.length} topic(s) for generation:\n`);
  for (const topic of topics) {
    console.log(`  - [${topic.category}] ${topic.title}`);
  }

  if (isDryRun) {
    console.log("\n(Dry run - no articles generated)");
    return;
  }

  console.log("\nGenerating articles...\n");

  let successCount = 0;
  for (const topic of topics) {
    try {
      console.log(`Generating: ${topic.title}...`);
      const post = await generateArticle(topic);
      const filePath = publishPost(post);
      console.log(`  -> Published to ${filePath}\n`);
      successCount++;
    } catch (error) {
      console.error(`  -> Failed to generate: ${topic.title}`);
      console.error(`     Error: ${error instanceof Error ? error.message : error}\n`);
    }
  }

  console.log(`\nDone! ${successCount}/${topics.length} articles generated.`);
  console.log(`Total published articles: ${getPostCount()}`);
}

main().catch((error) => {
  console.error("Blog engine error:", error);
  process.exit(1);
});
