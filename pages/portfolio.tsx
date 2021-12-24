import Image from "next/image";
import { Fragment } from "react";
import SEO, { ThemeColors } from "../components/seo";
import { clients, curated, Roles } from "../data";

type Work = {
  screenshot?: StaticImageData;
  label: string;
  summary?: string;
  roles?: Roles[];
  href: string;
  website: string;
};

function PortfolioPiece({
  label,
  summary,
  roles,
  href,
  website,
  screenshot,
}: Work) {
  return (
    <article className="max-w-4xl">
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
            className="text-pink-dark"
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
}

function PortfolioPage() {
  return (
    <main className="space-y-20">
      <SEO title="Portfolio" path="/portfolio" themeColor={ThemeColors.Pink} />

      <section>
        <h1 hidden>Portfolio</h1>

        <p>Clients and projects I&apos;ve worked with.</p>
      </section>

      <section className="space-y-10">
        <div className="relative w-full flex gap-10 snap-x snap-mandatory overflow-x-auto">
          {curated.map((work, i) => (
            <div key={i} className="snap-start shrink-0">
              <PortfolioPiece {...work} />
            </div>
          ))}
        </div>

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
