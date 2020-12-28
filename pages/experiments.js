import SEO from "../components/seo";
import { projects, experiments } from "../data";
import List from "../components/list";
import { getBlurhash } from "@plaiceholder/blurhash";
import { getImage } from "@plaiceholder/next";

function Experiments({ works }) {
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

      <List data={works} />
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

export default Experiments;
