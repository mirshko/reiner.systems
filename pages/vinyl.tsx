import { InferGetStaticPropsType } from "next";
import Record from "../components/record";
import SEO from "../components/seo";
import { getRecordsInDb } from "../lib/db";

function VinylPage({
  records,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
  return {
    props: {
      records: await getRecordsInDb(),
    },
  };
}

export default VinylPage;
