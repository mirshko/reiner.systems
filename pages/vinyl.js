import Record from "../components/record";
import SEO from "../components/seo";
import { getRecordsInFauna } from "../lib/db";

export default function Vinyl({ records }) {
  return (
    <main className="p-sm">
      <SEO title="Vinyl" path="/vinyl" />

      <h1>Vinyl</h1>

      <p className="measure mt-md mb-sm">
        My personal record collection on{" "}
        <a
          href="https://www.discogs.com/seller/mirshko/profile"
          target="_blank"
          rel="noopener noreferer"
        >
          Discogs
        </a>
        , thought I'd make a nice gallery and player them.
      </p>

      <section className="mt-md record-grid">
        {records.map((release, i) => (
          <Record key={i} {...release} />
        ))}
      </section>

      <style jsx>{`
        .record-grid {
          display: flex;
          flex-wrap: wrap;
          margin-left: -10px;
          margin-right: -10px;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      records: await getRecordsInFauna(),
    },
  };
}
