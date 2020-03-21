import Head from "next/head";
import List from "../components/list";
import { clients, contributions, experiments, projects } from "../data/work";

export default function Page() {
  return (
    <main>
      <Head>
        <title>Portfolio | Jeff Reiner, Design Engineer</title>
        <meta name="title" content="Portfolio | Jeff Reiner, Design Engineer" />
        <meta
          property="og:title"
          content="Portfolio | Jeff Reiner, Design Engineer"
        />
        <meta
          property="twitter:title"
          content="Portfolio | Jeff Reiner, Design Engineer"
        />
      </Head>

      <h1 className="h1 mt-sm">Portfolio</h1>

      <p className="measure mt-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
        accusantium, minus voluptatem sapiente, distinctio consectetur odio sit
        facere aspernatur neque placeat eius esse quaerat recusandae rerum
        obcaecati ipsa provident suscipit!
      </p>

      <section className="mt-md">
        <h2 className="mb-sm">Clients</h2>
        <p className="mb-sm">People I've worked with</p>
        <List data={clients} />
      </section>

      <section className="mt-md">
        <h2 className="mb-sm">Projects</h2>
        <p className="mb-sm">Stuff I've built.</p>
        <List data={projects} />
      </section>

      <section className="mt-md">
        <h2 className="mb-sm">Contributions</h2>
        <p className="mb-sm">Project's I've helped out on</p>
        <List data={contributions} />
      </section>

      <section className="mt-md">
        <h2 className="mb-sm">Experiments</h2>
        <p className="mb-sm">Weird stuff.</p>
        <List data={experiments} />
      </section>
    </main>
  );
}
