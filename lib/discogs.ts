import { RecordSchema } from "../types/supabase";

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

export const getRecordsInDiscogs = async () => {
  const res = await fetch(URL);

  /**
   * Handle Discogs API Error
   */
  if (!res.ok) throw new Error(res.statusText);

  const { releases } = await res.json();

  /**
   * Map over releases key, apply Fauna schema to response
   */
  return releases.map(getRecordSchema);
};

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

export const getRecordSchema = (release: ReleaseSchema): RecordSchema => {
  const {
    date_added,
    id: resource_id,
    basic_information: { artists, title, cover_image, year },
  } = release;

  const artist = artists[0].name;

  return {
    title,
    artist,
    cover_image,
    resource_id,
    date_added,
    year,
  };
};
