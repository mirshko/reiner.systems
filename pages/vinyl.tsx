import { InferGetStaticPropsType } from "next";
import Record from "../components/record";
import SEO, { ThemeColors } from "../components/seo";
import { getRecordsInDb } from "../lib/db";

function VinylPage({
  records,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="space-y-20">
      <SEO title="Vinyl" path="/vinyl" themeColor={ThemeColors.Indigo} />

      <section>
        <h1 hidden>Vinyl</h1>

        <p>
          My personal record collection on{" "}
          <a
            className="text-indigo-dark"
            href="https://www.discogs.com/user/mirshko/collection?header=1&layout=big"
            rel="noreferrer noopener"
            target="_blank"
          >
            Discogs
          </a>
          .{" "}
        </p>
      </section>

      <section className="record-grid grid gap-5">
        {records.map((release, i) => (
          <Record key={i} {...release} />
        ))}
      </section>

      <style jsx>{`
        .record-grid {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      records: await getRecordsInDb(),
    },
  };
}

export default VinylPage;
