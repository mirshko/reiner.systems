import { readFile, writeFile } from "fs/promises";
import fetch from "node-fetch";
import type { RecordSchema } from "../types/record-schema";

const file = await readFile("./vinyl.json", {
  encoding: "utf8",
});

const vinyl = JSON.parse(file) as RecordSchema[];

for (const record of vinyl) {
  const { cover_image } = record;

  const file_name = cover_image.substring(cover_image.lastIndexOf("/") + 1);

  const r = await fetch(cover_image);

  const ab = await r.arrayBuffer();

  await writeFile(
    `public/cover_images/${file_name}`,
    Buffer.from(new Uint8Array(ab))
  );
}
