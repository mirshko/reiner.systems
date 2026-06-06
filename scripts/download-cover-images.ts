import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { VinylRecord } from "./types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

async function main() {
  const vinylDir = join(ROOT, "src", "vinyl");
  const outDir = join(ROOT, "public", "cover_images");
  mkdirSync(outDir, { recursive: true });

  const files = await readdir(vinylDir);
  const jsonFiles = files.filter((f) => f.endsWith(".json"));

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of jsonFiles) {
    const record: VinylRecord = JSON.parse(
      readFileSync(join(vinylDir, file), "utf-8"),
    );
    const { cover_image, file_name, title } = record;
    const outPath = join(outDir, file_name);

    if (existsSync(outPath)) {
      skipped++;
      continue;
    }

    try {
      const res = await fetch(cover_image);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      writeFileSync(outPath, buffer);
      downloaded++;
      console.log(`Downloaded: ${file_name} (${title})`);
    } catch (err) {
      failed++;
      console.error(`Failed: ${file_name} (${title}): ${err}`);
    }
  }

  console.log(
    `Done: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
