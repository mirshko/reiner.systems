import Browser from "../components/browser";
import SEO from "../components/seo";
import { curated, clients } from "../data";

export default function Page() {
  return (
    <main className="p-4">
      <SEO title="Portfolio" path="/portfolio" />

      <div className="p-4 inline-block bg-white bg-opacity-25">
        <h1>Portfolio</h1>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      <section className="space-y-8">
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

              <header className="mt-4 mb-4">
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

              <section>
                {roles && <p className="mb-4">{roles.join(", ")}</p>}
                {summary && <p className="max-w-lg leading-tight">{summary}</p>}
              </section>
            </article>
          )
        )}

        <article>
          <header>
            <h2 className="mb-4">Additional Clients</h2>
          </header>

          <p className="leading-normal">
            {clients.map((client) => client.label).join(", ")}
          </p>
        </article>
      </section>

      {/* Spacer */}
      <div className="h-8" />
    </main>
  );
}
