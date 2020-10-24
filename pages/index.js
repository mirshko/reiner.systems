import { trackGoal } from "fathom-client";
import SEO from "../components/seo";
import FATHOM from "../lib/fathom";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto">
      <SEO />

      <h1>Jeff Reiner</h1>

      <div className="h-5" />

      <h2>Design Engineer, Freelance, Currently in Berlin.</h2>

      <div className="h-5" />

      <p>
        Team at{" "}
        <a
          href="https://union.finance"
          rel="noopener noreferrer"
          target="_blank"
        >
          Union
        </a>
        . Design at{" "}
        <a
          href="https://soapbox.social"
          rel="noopener noreferrer"
          target="_blank"
        >
          Soapbox
        </a>
      </p>

      <div className="h-5" />

      <p>
        I focus on responsive, mobile-first websites and apps; highly-usable and
        efficient component libraries and design systems; and solving complex UX
        problems, in and around the Web 2.0 and Web3 space.
      </p>

      <div className="h-5" />

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
