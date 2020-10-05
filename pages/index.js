import { trackGoal } from "fathom-client";
import SEO from "../components/seo";
import FATHOM from "../lib/fathom";

export default function Page() {
  return (
    <main className="p-4 ">
      <SEO />

      <div className="p-4 inline-block bg-white bg-opacity-25">
        <h1>Design Engineer, Freelance, Currently in Berlin.</h1>
      </div>

      {/* Spacer */}
      <div className="h-8" />

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

      {/* Spacer */}
      <div className="h-8" />

      <p className="max-w-xl leading-tight">
        I focus on responsive, mobile-first websites and apps; highly-usable and
        efficient component libraries and design systems; and solving complex UX
        problems, in and around the Web 2.0 and Web3 space.
      </p>

      {/* Spacer */}
      <div className="h-8" />

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
