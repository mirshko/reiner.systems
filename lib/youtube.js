import { google } from "googleapis";

export const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_KEY,
});

/**
 * @name getYouTubeVideoId
 *
 * @param {import("./discogs").RecordSchema} release
 *
 * @returns {Promise<(import("./discogs").RecordSchema|undefined)>}
 */
export const getYouTubeVideoId = async (release) => {
  const { title, artist } = release;

  /**
   * Assemble search term for YouTube API
   */
  const term = title + " " + artist;

  try {
    const search = await youtube.search.list({
      part: "id,snippet",
      type: "video",
      q: term,
    });

    /**
     * Check to make sure there is results for the search
     */
    if (search.data.items) {
      /**
       * Get the first YouTube result
       */
      const first = search.data.items[0];

      if (
        first.snippet.title.includes(title) ||
        first.snippet.title.includes(artist)
      ) {
        /**
         * Get videoId of first result
         */
        const video_id = first.id.videoId;

        /**
         * Update record with new video_id
         */
        return {
          ...release,
          video_id,
        };
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};
