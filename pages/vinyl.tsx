import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import Record from "../components/record";
import SEO, { ThemeColors } from "../components/seo";
import { getRecordsInDb } from "../lib/db";

function VinylPage({
  records,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
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
      records: await getRecordsInDb(),
    },
  };
}

export default VinylPage;
