import type { RecordSchema } from "../types/record-schema";
import fetch from "node-fetch";
import { writeFile } from "fs/promises";

/**
 * @note Incomplete Typedef
 */
type ReleaseSchema = {
  date_added: string;
  id: number;
  basic_information: {
    artists: { name: string }[];
    title: string;
    cover_image: string;
    year: number;
  };
};

const getRecordSchema = (release: ReleaseSchema): RecordSchema => {
  const {
    date_added,
    id: resource_id,
    basic_information: { artists, title, cover_image, year },
  } = release;

  const artist = artists[0].name;

  const file_name = cover_image.substring(cover_image.lastIndexOf("/") + 1);

  return {
    title,
    artist,
    cover_image,
    file_name,
    resource_id,
    date_added,
    year,
  };
};

/**
 * @name URL
 * @description Discogs endpoint to fetch collection releases by username 'mirshko'
 * @see https://www.discogs.com/developers#page:user-collection,header:user-collection-collection-items-by-folder
 */
const URL =
  "https://api.discogs.com/users/mirshko/collection/folders/0/releases" +
  "?per_page=500" +
  "&sort=added" +
  "&sort_order=desc" +
  "&token=" +
  process.env.DISCOGS_KEY;

const res = await fetch(URL);

/**
 * Handle Discogs API Error
 */
if (!res.ok) throw new Error(res.statusText);

const { releases } = (await res.json()) as any;

const vinyl = releases.map(getRecordSchema);

await writeFile("./vinyl.json", JSON.stringify(vinyl, null, 2));
