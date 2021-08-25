import Image from "next/image";
import { Fragment } from "react";
import SEO from "../components/seo";
import { clients, curated } from "../data";

function PortfolioPage() {
  return (
    <main className="space-y-20">
      <SEO title="Portfolio" path="/portfolio" />

      <section>
        <h1 hidden>Portfolio</h1>

        <p>Clients and projects I&apos;ve worked with.</p>
      </section>

      <section className="space-y-10">
        {curated.map((work, i) => {
          const { label, summary, roles, href, website, screenshot } = work;

          return (
            <article key={i}>
              {screenshot && (
                <Fragment>
                  <div className="next-image-tweaks">
                    <Image
                      alt={label}
                      className="rounded-md object-cover object-top align-middle"
                      height={360}
                      src={screenshot}
                      placeholder="blur"
                      title={label}
                      width={576}
                    />
                  </div>

                  <div className="h-5" />
                </Fragment>
              )}

              <header>
                <h2>
                  {label}{" "}
                  <a
                    className="text-green-light"
                    href={href}
                    aria-label={`${label} Project Website`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {website}
                  </a>
                </h2>
              </header>

              {(roles || summary) && (
                <Fragment>
                  <div className="h-5" />

                  <section>
                    {roles && (
                      <Fragment>
                        <p className="leading-tight">{roles.join(", ")}</p>

                        <div className="h-5" />
                      </Fragment>
                    )}

                    {summary && <p className="leading-tight">{summary}</p>}
                  </section>
                </Fragment>
              )}
            </article>
          );
        })}

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

export default PortfolioPage;
