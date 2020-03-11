import dynamic from "next/dynamic";
import Head from "next/head";

const Discogs = dynamic(() => import("../components/discogs"));

export default function Vinyl() {
  return (
    <main>
      <Head>
        <title>Vinyl | Jeff Reiner, UX Engineer</title>
      </Head>

      <h1>Vinyl</h1>

      <Discogs />

      <style jsx>{`
        h1 {
          margin-bottom: 1rem;
        }
      `}</style>
    </main>
  );
}
