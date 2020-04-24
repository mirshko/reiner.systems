import fetch from "isomorphic-unfetch";

const URL =
  "https://api.discogs.com/users/mirshko/collection/folders/0/releases" +
  "?per_page=50" +
  "&sort=added&sort_order=desc" +
  "&token=" +
  process.env.DISCOGS_TOKEN;

const getURL = (page) => URL + "&page=" + page;

export default async (req, res) => {
  const page = parseInt(req.query.page || 1);

  try {
    const raw = await fetch(getURL(page));

    const data = await raw.json();

    res.status(200).json(await data);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
