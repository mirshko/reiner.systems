import Head from "next/head";
import List from "../components/list";
import { experiments } from "../data/work";

export default function Page() {
  return (
    <main className="p-sm">
      <Head>
        <title>Experiments | Jeff Reiner, Design Engineer</title>
        <meta
          name="title"
          content="Experiments | Jeff Reiner, Design Engineer"
        />
        <meta
          property="og:title"
          content="Experiments | Jeff Reiner, Design Engineer"
        />
        <meta
          property="twitter:title"
          content="Experiments | Jeff Reiner, Design Engineer"
        />
      </Head>

      <section>
        <h1 className="mb-md">Experiments</h1>
        <p className="measure-tight mb-sm">
          Some of the tools and utilities to make my life easier, proof of
          concepts, and random weird things.
        </p>
        <List data={experiments} />
      </section>
    </main>
  );
}
