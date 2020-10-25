import Image from "next/image";
import SEO from "../components/seo";
import { clients, curated } from "../data";

function Portfolio() {
  return (
    <main>
      <SEO title="Portfolio" path="/portfolio" />

      <h1>Portfolio</h1>

      <div className="h-5" />

      <section className="space-y-10">
        {curated.map(
          ({ label, summary, roles, href, website, screenshot }, i) => (
            <article key={i}>
              {screenshot && (
                <Image
                  width={576}
                  height={360}
                  alt={label}
                  loading="lazy"
                  src={`/portfolio/${screenshot}`}
                  title={label}
                  className="object-cover object-top"
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

export default Portfolio;
