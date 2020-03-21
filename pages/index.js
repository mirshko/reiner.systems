import Head from "next/head";
import { trackGoal } from "fathom-client";
import { GOALS } from "../lib/fathom";

export default function Page() {
  return (
    <main>
      <Head>
        <title>Jeff Reiner, Design Engineer</title>
        <meta name="title" content="Jeff Reiner, Design Engineer" />
        <meta property="og:title" content="Jeff Reiner, Design Engineer" />
        <meta property="twitter:title" content="Jeff Reiner, Design Engineer" />
      </Head>

      <h1 className="measure">
        Design Engineer. Team at{" "}
        <a
          href="https://www.instagram.com/we_are_coal/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Coal
        </a>
        ,{" "}
        <a
          href="https://union.finance"
          rel="noopener noreferrer"
          target="_blank"
        >
          Union
        </a>
      </h1>

      <p className="measure">
        I focus on responsive, mobile-first websites and apps; highly-usable and
        efficient component libraries and design systems; and solving complex UX
        problems, in and around the Web 2.0 and Web3 space.
      </p>

      <p className="measure">
        <a
          href="/jeff-reiner.pdf"
          onClick={() => trackGoal(GOALS.DOWNLOAD_RESUME, 0)}
          target="_blank"
        >
          Resume
        </a>
      </p>

      <style jsx>{`
        main {
          margin-top: 1rem;
        }
      `}</style>
    </main>
  );
}
