import { trackGoal } from "fathom-client";
import SEO from "../components/seo";
import FATHOM from "../lib/fathom";

export default function Page() {
  return (
    <main className="p-4 space-y-4">
      <SEO />

      <h1>Freelance, Currently in Berlin.</h1>

      <p>
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

      <p className="max-w-xl leading-tight">
        I focus on responsive, mobile-first websites and apps; highly-usable and
        efficient component libraries and design systems; and solving complex UX
        problems, in and around the Web 2.0 and Web3 space.
      </p>

      <p>
        <a
          href="/jeff-reiner.pdf"
          onClick={() => trackGoal(FATHOM.GOALS.DOWNLOAD_RESUME)}
          target="_blank"
        >
          Résumé
        </a>
      </p>
    </main>
  );
}
