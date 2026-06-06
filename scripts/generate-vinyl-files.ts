import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

/**
 * @see https://www.discogs.com/developers#page:user-collection,header:user-collection-collection
 */
const DISCOGS_URL = new URL(
  "https://api.discogs.com/users/mirshko/collection/folders/0/releases",
);
DISCOGS_URL.searchParams.set("per_page", "500");
DISCOGS_URL.searchParams.set("sort", "added");
DISCOGS_URL.searchParams.set("sort_order", "desc");

async function downloadDiscogsCollection(): Promise<void> {
  const response = await fetch(DISCOGS_URL);

  if (!response.ok) {
    throw new Error(
      `Discogs API error ${response.status}: ${(await response.text()).slice(0, 200)}`,
    );
  }

  const data = await response.json();
  const outPath = join(ROOT, "scripts", "mirshko-collection.json");
  writeFileSync(outPath, JSON.stringify(data, null, 2) + "\n");
  console.log(`Downloaded ${data.releases.length} releases → ${outPath}`);
}

import type { UserCollection, VinylRecord, VideoIdMap } from "./types.ts";

async function main() {
  const shouldDownload = process.argv.includes("--download");
  const collectionPath = join(ROOT, "scripts", "mirshko-collection.json");

  if (shouldDownload || !existsSync(collectionPath)) {
    await downloadDiscogsCollection();
  }

  const discogsJson = readFileSync(collectionPath, "utf-8");
  const { releases }: UserCollection = JSON.parse(discogsJson);

  const videoIdMap: VideoIdMap = JSON.parse(
    readFileSync(join(ROOT, "scripts", "video-id-map.json"), "utf-8"),
  );

  const outDir = join(ROOT, "src", "vinyl");
  mkdirSync(outDir, { recursive: true });

  let created = 0;

  for (const release of releases) {
    const { basic_information, date_added } = release;
    const {
      id: resourceId,
      title,
      cover_image,
      year,
      artists,
    } = basic_information;

    const artist = artists[0]?.name ?? "Unknown";
    const file_name = cover_image.substring(cover_image.lastIndexOf("/") + 1);
    const rawVideoId = videoIdMap[String(resourceId)] ?? null;
    const video_id =
      rawVideoId === "null" || rawVideoId === null ? null : rawVideoId;

    const record: VinylRecord = {
      title: title.trim(),
      artist,
      cover_image,
      file_name,
      resource_id: resourceId,
      date_added,
      year,
      video_id,
    };

    const outPath = join(outDir, `${resourceId}.json`);
    writeFileSync(outPath, JSON.stringify(record) + "\n");
    created++;
  }

  console.log(`Done: ${created} files written to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
