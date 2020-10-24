import Record from "../components/record";
import SEO from "../components/seo";
import { getRecordsInFauna } from "../lib/fauna";

export default function Vinyl({ records }) {
  return (
    <main>
      <SEO title="Vinyl" path="/vinyl" />

      <h1>Vinyl</h1>

      <div className="h-5" />

      <p>
        My personal record collection on{" "}
        <a
          href="https://www.discogs.com/seller/mirshko/profile"
          target="_blank"
          rel="noopener noreferer"
        >
          Discogs
        </a>
        , thought I'd make a nice gallery for them.
      </p>

      <div className="h-5" />

      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {records.map((release, i) => (
          <Record key={i} {...release} />
        ))}
      </section>
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
