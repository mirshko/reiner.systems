import SEO from "../components/seo";
import { GOALS, trackGoal } from "../lib/fathom";

export default function Page() {
  return (
    <main className="p-sm">
      <SEO />

      <h1 className="measure">Freelance, Currently in Berlin.</h1>

      <p className="measure mt-md">
        Team at{" "}
        <a
          href="https://union.finance"
          rel="noopener noreferrer"
          target="_blank"
        >
          Union
        </a>
        .
      </p>

      <p className="measure mt-sm">
        I focus on responsive, mobile-first websites and apps; highly-usable and
        efficient component libraries and design systems; and solving complex UX
        problems, in and around the Web 2.0 and Web3 space.
      </p>

      <p className="measure mt-lg">
        <a
          href="/jeff-reiner.pdf"
          onClick={() => trackGoal(GOALS.DOWNLOAD_RESUME)}
          target="_blank"
        >
          Résumé
        </a>
      </p>
    </main>
  );
}
