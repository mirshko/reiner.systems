import Head from "next/head";
import List from "../components/list";
import { experiments, projects } from "../data";

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
          Some of the projects, apps, tools, and utilities to make my life
          easier, proof of concepts, and some random weird things.
        </p>
        <List data={[...projects, ...experiments]} />
      </section>
    </main>
  );
}
