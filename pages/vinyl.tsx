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
    <main className="p-5">
      <SEO title="Vinyl" path="/vinyl" />

      <Head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </Head>

      <div className="flex">
        <Link href="/">
          <a className="inline-flex px-5 text-white bg-white/10 rounded-full text-[0.5em]">
            Back
          </a>
        </Link>
      </div>

      <div className="h-5" />

      <h1>Vinyl</h1>

      <div className="h-5" />

      <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
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
