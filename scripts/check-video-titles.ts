import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

interface VideoIdMap {
  [resourceId: string]: string | null;
}

async function fetchTitle(videoId: string): Promise<string | null> {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const data = (await res.json()) as { title?: string };
    return data.title ?? null;
  } catch {
    return null;
  }
}

async function main() {
  const map: VideoIdMap = JSON.parse(
    readFileSync(join(ROOT, "scripts", "video-id-map.json"), "utf-8"),
  );

  const entries = Object.entries(map).filter(
    (e): e is [string, string] => e[1] !== null,
  );

  console.log(`Checking ${entries.length} video IDs...\n`);

  const results: Array<{
    resourceId: string;
    videoId: string;
    title: string | null;
  }> = [];

  for (const [resourceId, videoId] of entries) {
    const title = await fetchTitle(videoId);
    results.push({ resourceId, videoId, title });
    process.stdout.write(title ? "." : "x");
  }

  console.log("\n");

  const missing = results.filter((r) => r.title === null);
  const found = results.filter((r) => r.title !== null);

  if (missing.length > 0) {
    console.log("MISSING / DELETED / PRIVATE:");
    for (const r of missing) {
      console.log(
        `  resource ${r.resourceId} → https://youtu.be/${r.videoId}`,
      );
    }
    console.log();
  }

  console.log(`Found: ${found.length}  Missing: ${missing.length}\n`);

  for (const r of results) {
    const status = r.title ? `"${r.title.slice(0, 80)}"` : "MISSING";
    console.log(`  ${r.resourceId}  ${r.videoId}  ${status}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
