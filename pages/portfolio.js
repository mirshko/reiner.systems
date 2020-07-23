import Browser from "../components/browser";
import SEO from "../components/seo";
import { curated } from "../data";

export default function Page() {
  return (
    <main className="p-sm">
      <SEO title="Portfolio" path="/portfolio" />

      <h1>Portfolio</h1>

      <section className="mt-md">
        {curated.map(
          ({ label, summary, roles, href, website, screenshot }, i) => (
            <article key={i} className="mb-lg">
              {screenshot && (
                <Browser
                  alt={label}
                  async
                  decoding="async"
                  loading="lazy"
                  src={`/portfolio/${screenshot}`}
                  title={label}
                />
              )}

              <header className="mt-sm mb-sm">
                <h2>
                  {label}{" "}
                  <a
                    href={href}
                    aria-label={`${label} Project Website`}
                    target="_blank"
                    rel="noopener"
                  >
                    {website}
                  </a>
                </h2>
              </header>

              <main>
                {roles && <p className="mb-sm">{roles.join(", ")}</p>}
                {summary && <p className="measure-tight">{summary}</p>}
              </main>
            </article>
          )
        )}
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
