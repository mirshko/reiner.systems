import Record from "../components/record";
import SEO from "../components/seo";
import { getRecordsInFauna } from "../lib/fauna";

export default function Vinyl({ records }) {
  return (
    <main className="p-4">
      <SEO title="Vinyl" path="/vinyl" />

      <div className="p-4 inline-block bg-white bg-opacity-25">
        <h1>Vinyl</h1>

        {/* Spacer */}
        <div className="h-4" />

        <p className="leading-tight max-w-xl">
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
      </div>

      {/* Spacer */}
      <div className="h-8" />

      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
