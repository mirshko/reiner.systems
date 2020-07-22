import dynamic from "next/dynamic";
import Head from "next/head";
import { getRecordsInFauna } from "../lib/db";
import Record from "../components/record";

export default function Vinyl({ records }) {
  return (
    <main className="p-sm">
      <Head>
        <title>Vinyl | Jeff Reiner, Design Engineer</title>
        <meta name="title" content="Vinyl | Jeff Reiner, Design Engineer" />
        <meta
          property="og:title"
          content="Vinyl | Jeff Reiner, Design Engineer"
        />
        <meta
          property="twitter:title"
          content="Vinyl | Jeff Reiner, Design Engineer"
        />
      </Head>

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
        . Thought I'd make a fancy gallery and player for all my records.
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
          max-width: 1340px;
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
