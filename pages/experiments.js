import { getBlurhash } from "@plaiceholder/blurhash";
import { getImage } from "@plaiceholder/next";
import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";
import SEO from "../components/seo";
import { experiments, projects } from "../data";

function ExperimentsPage({ works }) {
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
            const { href, label, screenshot, blurhash } = work;

            return (
              <li key={i}>
                <a className="relative text-pink-light" href={href}>
                  <div className="relative flex rounded-md overflow-hidden">
                    <BlurhashCanvas
                      hash={blurhash.hash}
                      width={blurhash.width}
                      height={blurhash.height}
                      punch={1}
                      className="absolute inset-0 w-full h-full rounded-md"
                    />
                    <Image
                      alt={label}
                      className="object-contain object-top rounded-md"
                      height={450}
                      loading="lazy"
                      src={`/experiments/${screenshot}`}
                      title={label}
                      width={720}
                    />
                  </div>
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

export async function getStaticProps() {
  const works = await Promise.all(
    [...projects, ...experiments].map(async ({ screenshot, ...rest }) => {
      const imgFile = await getImage(`/experiments/${screenshot}`);

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
}

export default ExperimentsPage;
