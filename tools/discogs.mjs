#!/usr/bin/env zx
import "zx/globals";

try {
  const token = argv["token"];

  if (!token) {
    throw new Error(`Missing 'token'`);
  }

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
    token;

  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  /**
   * @type {{ releases: import("../src/discogs").ReleaseInterface[] }}
   */
  const data = await response.json();

  const vinyl = data.releases.map((release) => {
    const {
      date_added,
      id: resource_id,
      basic_information: { artists, title, cover_image, year },
    } = release;

    const artist = artists[0].name;

    const file_name = cover_image.substring(cover_image.lastIndexOf("/") + 1);

    /**
     * @type {import("../src/discogs").RecordInterface}
     */
    return {
      title,
      artist,
      cover_image,
      file_name,
      resource_id,
      date_added,
      year,
    };
  });

  await fs.writeJSON(`${process.cwd()}/src/data/vinyl-raw.json`, vinyl);
} catch (p) {
  console.log(p);
}
