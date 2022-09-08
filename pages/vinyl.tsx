import { readFile } from "fs/promises";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { join } from "path";
import Record from "../components/record";
import SEO from "../components/seo";
import { RecordSchema } from "../types/record-schema";

function VinylPage({
  records,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="p-5 sm:p-10">
      <SEO title="Vinyl" path="/vinyl" />

      <Head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </Head>

      <div className="fixed top-5 left-5 z-50">
        <Link href="/">
          <a className="inline-flex px-5 text-white bg-white/10 rounded-full">
            Back
          </a>
        </Link>
      </div>

      <section className="flex flex-wrap gap-5 justify-center">
        {records.map((release, i) => (
          <Record key={i} {...release} />
        ))}
      </section>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      records: JSON.parse(
        await readFile(join(process.cwd(), "vinyl.json"), {
          encoding: "utf8",
        })
      ) as RecordSchema[],
    },
  };
}

export default VinylPage;
