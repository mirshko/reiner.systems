import SEO from "../components/seo";

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
        I focus on engaging, responsive, mobile-first websites and apps;
        highly-usable and efficient design systems; and solving complex UX
        problems, in and around the Web 2.0 and Web3 space.
      </p>

      <div className="h-5" />

      <p>
        You can find me most active on{" "}
        <a
          href="https://twitter.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>{" "}
        and{" "}
        <a
          href="https://www.instagram.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          Instagram
        </a>
        , see what I'm building at{" "}
        <a
          href="https://github.com/mirshko"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        , and for a more formal introduction or project request feel free to{" "}
        <a href="mailto:jeff@reiner.design">send me an email</a>.
      </p>

      <div className="h-5" />

      <p>
        If you need one of those fancy things,{" "}
        <a
          href="/jeff-reiner.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          here's my résumé
        </a>
        .
      </p>
    </main>
  );
}
