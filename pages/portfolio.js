import Head from "next/head";
import { curated } from "../data";

const NUMBERS = ["➊", "➋", "➌", "➍", "➎", "➏", "➐", "➑", "➒", "➓"];

export default function Page() {
  return (
    <main className="p-sm">
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

      <h1>Portfolio</h1>

      <section className="mt-md">
        {curated.map(({ label, summary, roles, href }, i) => (
          <article key={i} className="mb-lg">
            <img src="https://placehold.it/1440x900/5f05f0/5f0" alt={label} />

            <header>
              <h2>{label}</h2>
            </header>

            <main>
              {!!summary && <p>Summary: {summary}</p>}{" "}
              {roles && <p>Roles: {roles.join(", ")}</p>}
            </main>

            <footer>
              <p>
                Visit: <a href={href}>View Project</a>
              </p>
            </footer>
          </article>
        ))}
      </section>

      {/* <section className="mt-lg">
        <h2 className="mb-sm">Clients</h2>
        <p className="measure-tight mb-sm">
          Companies and individuals I've had the pleasure to work with to build
          some pretty cool things.
        </p>
        <List data={clients} />
      </section>

      <section className="mt-lg">
        <h2 className="mb-sm">Projects</h2>
        <p className="measure-tight mb-sm">
          My pride and joy; apps I've built and am working on with some of the
          best people around.
        </p>
        <List data={projects} />
      </section> */}
    </main>
  );
}
