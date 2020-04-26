import faunadb from "faunadb";

const fauna = new faunadb.Client({
  secret: process.env.FAUNA_SERVER_KEY,
});

const { Var, Get, Match, Index, Map, Lambda, Paginate, Select } = faunadb.query;

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

export default async (req, res) => {
  try {
    const records = await getRecordsInFauna();

    res.status(200).json({
      success: true,
      pagination: {
        page: 1,
        pages: 1,
      },
      releases: records,
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
