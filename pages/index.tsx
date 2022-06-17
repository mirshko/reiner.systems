import Link from "next/link";
import SEO, { ThemeColors } from "../components/seo";

function IndexPage() {
  return (
    <main className="space-y-20">
      <SEO />

      <section className="space-y-5">
        <p>
          Jeff engineers products; the experience that brings them to life, and
          the code that drives them. His work specializes on Web3, and ranges
          from designing interfaces, to building high performance apps and
          websites. He previously worked at Dialectic and Async Art. Most
          recently he&apos;s been building{" "}
          <a
            href="https://www.pills.game"
            target="_blank"
            rel="noopener noreferrer"
          >
            PILLS
          </a>
          , an on-chain adventure game.{" "}
          <a href="https://twitter.com/mirshko">Twitter</a> /{" "}
          <a href="https://github.com/mirshko">GitHub</a> /{" "}
          <a href="mailto:jeff@reiner.design">Email</a> /{" "}
          <a href="https://read.cv/mirshko">CV</a> /{" "}
          <Link href="/vinyl">
            <a>Vinyl</a>
          </Link>
        </p>
      </section>
    </main>
  );
}

export default IndexPage;
