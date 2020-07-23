import List from "../components/list";
import SEO from "../components/seo";
import { experiments, projects } from "../data";

export default function Page() {
  return (
    <main className="p-sm">
      <SEO title="Experiments" path="/experiments" />

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
