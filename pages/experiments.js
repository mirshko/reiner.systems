import List from "../components/list";
import SEO from "../components/seo";
import { experiments, projects } from "../data";

export default function Page() {
  return (
    <main className="p-4 space-y-4">
      <SEO title="Experiments" path="/experiments" />

      <h1>Experiments</h1>

      <p className="max-w-xl leading-tight">
        Some of the projects, apps, tools, and utilities to make my life easier,
        proof of concepts, and some random weird things.
      </p>

      <List data={[...projects, ...experiments]} />
    </main>
  );
}
