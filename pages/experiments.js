import List from "../components/list";
import SEO from "../components/seo";
import { experiments, projects } from "../data";

export default function Page() {
  return (
    <main className="p-4">
      <SEO title="Experiments" path="/experiments" />

      <div className="p-4 inline-block bg-white bg-opacity-25">
        <h1>Experiments</h1>

        {/* Spacer */}
        <div className="h-4" />

        <p className="leading-tight max-w-xl">
          Some of the projects, apps, tools, and utilities to make my life
          easier, proof of concepts, and some random weird things.
        </p>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      <List data={[...projects, ...experiments]} />
    </main>
  );
}
