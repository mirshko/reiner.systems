import dynamic from "next/dynamic";
import Head from "next/head";

const Discogs = dynamic(() => import("../components/discogs"));

export default function Vinyl() {
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
        . Thought I'd make a nicer gallery for all my records.
      </p>

      <p className="measure">
        <i>
          Under construction: you'll be able to listen to each record on this
          page soon.
        </i>
      </p>

      <section className="mt-lg">
        <Discogs />
      </section>
    </main>
  );
}
