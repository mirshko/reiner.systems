import dayjs from "dayjs";
import Record from "../components/record";
import SEO from "../components/seo";
import { RecordSchema } from "../lib/discogs";
import { getRecordsInFauna } from "../lib/fauna";

function VinylPage({ records }) {
  return (
    <main className="space-y-20">
      <SEO title="Vinyl" path="/vinyl" />

      <section>
        <h1 hidden>Vinyl</h1>

        <p>
          My personal record collection on{" "}
          <a
            className="text-indigo-light"
            href="https://www.discogs.com/seller/mirshko/profile"
            rel="noreferrer noopener"
            target="_blank"
          >
            Discogs
          </a>
          , thought I&apos;d make a nice gallery for them.
        </p>
      </section>

      <section className="record-grid grid gap-5">
        {records.map((release, i) => (
          <Record key={i} {...release} />
        ))}
      </section>

      <style jsx>{`
        .record-grid {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: minmax(300px, auto);
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  const sortByDateAdded = (a: RecordSchema, b: RecordSchema) =>
    dayjs(b.date_added).unix() - dayjs(a.date_added).unix();

  const allRecords = await getRecordsInFauna();

  const records = allRecords.sort(sortByDateAdded);

  return {
    props: {
      records,
    },
  };
}

export default VinylPage;
