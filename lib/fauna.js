import faunadb from "faunadb";

export const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY,
});

const {
  Collection,
  Create,
  Exists,
  Get,
  If,
  Index,
  Lambda,
  Let,
  Map,
  Match,
  Now,
  Paginate,
  Select,
  Update,
  Var,
} = faunadb.query;

/**
 * @name getRecordsInFauna
 *
 * @returns {Promise<import("./discogs").RecordSchema[]>}
 */
export const getRecordsInFauna = () =>
  client.query(
    Select(
      "data",
      Map(
        Paginate(Match(Index("all_records")), {
          size: 1000,
        }),
        Lambda("record", Select("data", Get(Var("record"))))
      )
    )
  );

/**
 * @name createRecordsInFauna
 *
 * @param {import("./discogs").RecordSchema[]} records
 *
 * @returns {Promise<String[]>}
 */
export const createRecordsInFauna = (records) =>
  client.query(
    Map(
      records,
      Lambda(
        "record",
        Let(
          {
            upsert: Match(
              Index("find_record_by_resource"),
              Select("resource_id", Var("record"))
            ),
          },
          If(
            Exists(Var("upsert"), Now()),
            Select(
              ["ref", "id"],
              Update(Select(["ref"], Get(Var("upsert"))), {
                data: Var("record"),
              })
            ),
            Select(
              ["ref", "id"],
              Create(Collection("record"), {
                data: Var("record"),
              })
            )
          )
        )
      )
    )
  );
