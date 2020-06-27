import faunadb from "faunadb";
import { google } from "googleapis";

const fauna = new faunadb.Client({
  secret: process.env.FAUNA_SERVER_KEY,
});

const {
  If,
  Var,
  Get,
  Now,
  Let,
  Match,
  Index,
  Map,
  Lambda,
  Paginate,
  Create,
  Exists,
  Select,
  Update,
  Collection,
} = faunadb.query;

const getRecordsInFauna = () =>
  fauna.query(
    Select(
      "data",
      Map(
        Paginate(Match(Index("all_records")), { size: 1000 }),
        Lambda("record", Select("data", Get(Var("record"))))
      )
    )
  );

const createRecords = (records) =>
  Promise.all(
    records.map(async (data) => {
      return fauna.query(
        Let(
          {
            upsert: Match(Index("find_record_by_resource"), data.resource_id),
          },
          If(
            Exists(Var("upsert"), Now()),
            Select(
              ["ref", "id"],
              Update(Select(["ref"], Get(Var("upsert"))), { data })
            ),
            Select(
              ["ref", "id"],
              Create(Collection("record"), {
                data,
              })
            )
          )
        )
      );
    })
  );

const URL =
  "https://api.discogs.com/users/mirshko/collection/folders/0/releases" +
  "?per_page=300" +
  "&sort=added&sort_order=desc" +
  "&token=" +
  process.env.DISCOGS_TOKEN;

const getRecordSchema = (release) => {
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

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_TOKEN,
});

const getYouTubeVideoId = async (release) => {
  const { title, artist } = release;

  const term = title + " " + artist;

  let record = release;

  console.log(term);

  await youtube.search
    .list({
      part: "id,snippet",
      type: "video",
      q: term,
    })
    .then((res) => res.data)
    .then((data) => {
      if (data.items) {
        const first = data.items[0];

        if (
          first.snippet.title.includes(title) ||
          first.snippet.title.includes(artist)
        ) {
          const video_id = first.id.videoId;

          console.log("Matched!", { video_id });

          record = {
            ...release,
            video_id,
          };
        }
      }

      console.log("Video Isn't A Match");
    })
    .catch((err) => {
      console.log(err.message);
    });

  return record;
};

export default async (req, res) => {
  try {
    const records = await getRecordsInFauna();

    const recordsWithoutVideos = await records.filter(
      (record) => !record.video_id || record.video_id === "null"
    );

    console.log({ length: recordsWithoutVideos.length });

    const recordsWithVideos = await Promise.all(
      recordsWithoutVideos.map(
        async (record) => await getYouTubeVideoId(record)
      )
    );

    console.log({ length: recordsWithVideos.length });

    const recordRefs = await createRecords(recordsWithVideos);

    res.status(200).json({
      success: true,
      records: recordRefs,
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
