import { trackGoal } from "fathom-client";
import SEO from "../components/seo";
import FATHOM from "../lib/fathom";

export default function Page() {
  return (
    <main>
      <SEO />

      <h1>Jeff Reiner</h1>

      <div className="h-5" />

      <p>
        I'm currently freelancing as a Design Engineer located in Berlin, as
        well as working on frontend at{" "}
        <a
          href="https://union.finance"
          rel="noopener noreferrer"
          target="_blank"
        >
          Union{" "}
        </a>
        and design at{" "}
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
        {", "}
        <a href="mailto:jeff@reiner.design">Email</a>
        {", "}
        <a
          href="https://twitter.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        {", "}
        <a
          href="https://github.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        {", "}
        <a
          href="https://www.instagram.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          Instagram
        </a>
      </p>
    </main>
  );
}
