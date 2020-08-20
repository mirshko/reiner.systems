import Record from "../components/record";
import SEO from "../components/seo";
import { getRecordsInFauna } from "../lib/fauna";

export default function Vinyl({ records }) {
  return (
    <main className="p-4 space-y-4">
      <SEO title="Vinyl" path="/vinyl" />

      <h1>Vinyl</h1>

      <p className="max-w-xl leading-tight">
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

      <section className="flex flex-wrap">
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
