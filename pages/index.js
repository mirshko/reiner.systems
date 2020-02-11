import Head from "next/head";

export default function Page() {
  return (
    <main>
      <Head>
        <title>Jeff Reiner, UX Engineer</title>
      </Head>

      <p className="measure">
        UX Engineer. Team at{" "}
        <a
          href="https://www.instagram.com/we_are_coal/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Coal
        </a>
      </p>

      <p className="measure">
        I focus on responsive, mobile-first websites and apps; highly-usable and
        efficient component libraries and design systems; and solving complex UX
        problems, in and around the Web 2.0 and Web3 space.
      </p>

      <p className="measure">
        <a href="/jeff-reiner.pdf" rel="noopener noreferrer" target="_blank">
          Resume
        </a>
      </p>

      <style jsx>{`
        .measure {
          max-width: 60ch;
        }
      `}</style>
    </main>
  );
}
