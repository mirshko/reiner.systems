import Image from "next/image";
import SEO from "../components/seo";
import { experiments, projects } from "../data";

function ExperimentsPage() {
  const works = [...projects, ...experiments];

  return (
    <main className="space-y-20">
      <SEO title="Experiments" path="/experiments" />

      <section>
        <h1 hidden>Experiments</h1>

        <p>
          Projects, apps, tools, and utilities to make my life easier, proof of
          concepts, and some random crypto things.
        </p>
      </section>

      <section>
        <ul className="grid gap-5 grid-cols-2 sm:grid-cols-3">
          {works.map((work, i) => {
            const { href, label, screenshot } = work;

            return (
              <li key={i}>
                <a className="relative text-pink-light" href={href}>
                  <Image
                    alt={label}
                    className="object-contain object-top rounded-md"
                    height={450}
                    loading="lazy"
                    src={`/experiments/${screenshot}`}
                    title={label}
                    width={720}
                  />

                  <span className="leading-none">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default ExperimentsPage;
