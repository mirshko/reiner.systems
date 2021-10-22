import { allSnippets } from ".contentlayer/data";
import type { Snippet } from ".contentlayer/types";
import { getMDXComponent } from "mdx-bundler/client";
import type { GetStaticPropsContext } from "next";
import type { ParsedUrlQuery } from "querystring";
import { useMemo } from "react";

export default function SnippetPage(snippet: Snippet) {
  const Component = useMemo(
    () => getMDXComponent(snippet.body.code),
    [snippet.body.code]
  );

  return (
    <main className="space-y-10">
      <section>
        <h1>{snippet.title}</h1>

        <div className="h-5" />

        <p>{snippet.description}</p>
      </section>

      <section className="prose">
        <Component />
      </section>
    </main>
  );
}

export function getStaticPaths() {
  return {
    paths: allSnippets.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  const snippet = allSnippets.find(
    (snippet) => snippet.slug === ((params as ParsedUrlQuery).slug as string)
  );

  return { props: snippet };
}
