import { readFile, writeFile } from "fs/promises";
import type { RecordSchema } from "../types/record-schema";

const file = await readFile("./vinyl.json", {
  encoding: "utf8",
});

const vinyl = JSON.parse(file) as RecordSchema[];

const updated_vinyl = vinyl.map((record) => {
  const { cover_image } = record;

  const file_name = cover_image.substring(cover_image.lastIndexOf("/") + 1);

  return {
    ...record,
    file_name,
  };
});

await writeFile(`./vinyl.json`, JSON.stringify(updated_vinyl, null, 2));
