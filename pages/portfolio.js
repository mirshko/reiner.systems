import { getBlurhash } from "@plaiceholder/blurhash";
import { getImage } from "@plaiceholder/next";
import Image from "next/image";
import { Fragment } from "react";
import { BlurhashCanvas } from "react-blurhash";
import SEO from "../components/seo";
import { clients, curated } from "../data";

function PortfolioPage({ works }) {
  return (
    <main className="space-y-20">
      <SEO title="Portfolio" path="/portfolio" />

      <section>
        <h1 hidden>Portfolio</h1>

        <p>Clients and projects I've worked with.</p>
      </section>

      <section className="space-y-10">
        {works.map((work, i) => {
          const {
            label,
            summary,
            roles,
            href,
            website,
            screenshot,
            blurhash,
          } = work;

          return (
            <article key={i}>
              {screenshot && (
                <Fragment>
                  <div className="max-w-[576px] relative flex rounded-md overflow-hidden">
                    <BlurhashCanvas
                      hash={blurhash.hash}
                      width={blurhash.height}
                      height={blurhash.width}
                      punch={1}
                      className="absolute inset-0 w-full h-full rounded-md"
                    />
                    <Image
                      alt={label}
                      className="object-cover object-top rounded-md"
                      height={360}
                      loading="lazy"
                      src={`/portfolio/${screenshot}`}
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

export const getStaticProps = async () => {
  const works = await Promise.all(
    curated.map(async ({ screenshot, ...rest }) => {
      const imgFile = await getImage(`/portfolio/${screenshot}`);

      const blurhash = await getBlurhash(imgFile);

      return {
        blurhash,
        screenshot,
        ...rest,
      };
    })
  );

  return {
    props: {
      works,
    },
  };
};

export default PortfolioPage;
