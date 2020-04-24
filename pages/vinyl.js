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

      <h1 className="h1 mt-sm">Vinyl</h1>

      <p className="measure mt-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum velit nam
        quos officiis esse, mollitia laudantium aspernatur ut debitis itaque
        repudiandae possimus maxime corporis, maiores fugiat eius autem quis
        soluta.
      </p>

      <Discogs />
    </main>
  );
}
