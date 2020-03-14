import dynamic from "next/dynamic";
import Head from "next/head";

const Discogs = dynamic(() => import("../components/discogs"));

export default function Vinyl() {
  return (
    <main>
      <Head>
        <title>Vinyl | Jeff Reiner, Design Engineer</title>
      </Head>

      <h1>Vinyl</h1>

      <p className="measure">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum velit nam
        quos officiis esse, mollitia laudantium aspernatur ut debitis itaque
        repudiandae possimus maxime corporis, maiores fugiat eius autem quis
        soluta.
      </p>

      <Discogs />
    </main>
  );
}
