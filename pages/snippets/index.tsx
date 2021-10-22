import { allSnippets } from ".contentlayer/data";
import { pick } from "@contentlayer/client";
import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import SEO from "../../components/seo";

export default function Snippets({
  snippets,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="space-y-20">
      <SEO title="Snippets" path="/snippets" />

      <section>
        <h1 hidden>Snippets</h1>

        <p>Code snippets I've found to be exceptionally useful</p>
      </section>

      <section>
        <ul className="space-y-10">
          {snippets.map((snippet) => (
            <li key={snippet.slug}>
              <Link href={`/snippets/${snippet.slug}`}>
                <a className="text-white block">
                  <p className="text-teal-dark">{snippet.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="h-10" />

        <ul className="flex flex-wrap gap-2.5">
          {tags.map((tag, index) => (
            <li key={index}>{`#${tag}`}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ["slug", "title"])
  );

  const tags = allSnippets.flatMap((snippet) => snippet.tags, Infinity);

  return {
    props: {
      snippets,
      tags,
    },
  };
}
