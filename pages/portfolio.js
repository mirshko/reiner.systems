import Head from "next/head";
import List from "../components/list";
import { clients, contributions, experiments, projects } from "../data/work";

export default function Page() {
  return (
    <main>
      <Head>
        <title>Portfolio | Jeff Reiner, Design Engineer</title>
      </Head>

      <h1>Portfolio</h1>

      <p className="measure">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
        accusantium, minus voluptatem sapiente, distinctio consectetur odio sit
        facere aspernatur neque placeat eius esse quaerat recusandae rerum
        obcaecati ipsa provident suscipit!
      </p>

      <section>
        <h2>Clients</h2>
        <p>People I've worked with</p>
        <List data={clients} />
      </section>

      <section>
        <h2>Projects</h2>
        <p>Stuff I've built.</p>
        <List data={projects} />
      </section>

      <section>
        <h2>Contributions</h2>
        <p>Project's I've helped out on</p>
        <List data={contributions} />
      </section>

      <section>
        <h2>Experiments</h2>
        <p>Weird stuff.</p>
        <List data={experiments} />
      </section>
    </main>
  );
}
