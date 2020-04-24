import { google } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_TOKEN,
});

const fetchYouTubeResults = async (term) => {
  if (!term) {
    throw Error("`term` is required to perform a search");
  }

  const {
    data: { items },
  } = await youtube.search.list({
    part: "snippet",
    q: String(term),
    type: "video",
  });

  /**
   * Return the first result, its probably the best one.
   */
  return items[0];
};

export default async (req, res) => {
  const term = req.query.term;

  if (term) {
    try {
      const results = await fetchYouTubeResults(term);

      res.status(200).json(results);
    } catch (err) {
      console.error(err.errors);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }

  res.status(400).json({
    success: false,
    message: "`term` is required to perform a search",
  });
};
