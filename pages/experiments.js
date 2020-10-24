import List from "../components/list";
import SEO from "../components/seo";
import { experiments, projects } from "../data";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto">
      <SEO title="Experiments" path="/experiments" />

      <h1>Experiments</h1>

      <div className="h-5" />

      <p>
        Some of the projects, apps, tools, and utilities to make my life easier,
        proof of concepts, and some random weird things.
      </p>

      <div className="h-5" />

      <List data={[...projects, ...experiments]} />
    </main>
  );
}
