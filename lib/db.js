import faunadb from "faunadb";

/**
 * FaunaDB Client
 */
export const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY,
});

const { Var, Get, Match, Index, Map, Lambda, Paginate, Select } = faunadb.query;

export const getRecordsInFauna = () =>
  client.query(
    Select(
      "data",
      Map(
        Paginate(Match(Index("all_records")), { size: 1000 }),
        Lambda("record", Select("data", Get(Var("record"))))
      )
    )
  );
