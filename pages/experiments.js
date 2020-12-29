import { getBlurhash } from "@plaiceholder/blurhash";
import { getImage } from "@plaiceholder/next";
import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";
import SEO from "../components/seo";
import { experiments, projects } from "../data";

export default function Experiments({ works }) {
  return (
    <main>
      <SEO title="Experiments" path="/experiments" />

      <h1>Experiments</h1>

      <div className="h-5" />

      <p>
        Some of the projects, apps, tools, and utilities to make my life easier,
        proof of concepts, and some random weird things.
      </p>

      <div className="h-5" />

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
