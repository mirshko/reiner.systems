import Browser from "../components/browser";
import SEO from "../components/seo";
import { curated, clients } from "../data";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto">
      <SEO title="Portfolio" path="/portfolio" />

      <h1>Portfolio</h1>

      <div className="h-5" />

      <section className="space-y-10">
        {curated.map(
          ({ label, summary, roles, href, website, screenshot }, i) => (
            <article key={i}>
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

              <div className="h-5" />

              <header className="">
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

              <div className="h-5" />

              <section>
                {roles && <p className="leading-tight">{roles.join(", ")}</p>}

                <div className="h-5" />

                {summary && <p className="leading-tight">{summary}</p>}
              </section>
            </article>
          )
        )}

        <article>
          <header>
            <h2>Additional Clients</h2>
          </header>

          <div className="h-5" />

          <section>
            <p className="leading-normal">
              {clients.map((client) => client.label).join(", ")}
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
