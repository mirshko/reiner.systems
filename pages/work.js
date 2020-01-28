import List from "../components/list";
import { clients, projects, experiments } from "../data/work";

export default function Page() {
  return (
    <main>
      <h1>Work</h1>

      <p>
        here's some projects/clients/experiments i've worked on either on my
        own, or collaboratively with some pretty awesome individuals
      </p>

      <section>
        <h2>Clients</h2>
        <List data={clients} />
      </section>

      <section>
        <h2>Projects</h2>
        <List data={projects} />
      </section>

      <section>
        <h2>Experiments</h2>
        <List data={experiments} />
      </section>
    </main>
  );
}
