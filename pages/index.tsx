import Link from "next/link";
import { Fragment } from "react";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Fragment>
      <main className="">
        <SEO />

        <section className="full-height-and-centered">
          <div className="p-5 sm:p-10">
            <p className="uppercase">
              <Link href="/">
                <a>Jeff Reiner</a>
              </Link>{" "}
              engineers high performance products and experiences for Web3.{" "}
              <a href="https://twitter.com/mirshko">@mirshko</a>{" "}
              <a href="https://github.com/mirshko">mirshko</a>{" "}
              <a href="mailto:jeff@reiner.design">jeff@reiner.design</a> Berlin
            </p>
          </div>
        </section>

        <section className="p-5 sm:p-10 flex flex-col gap-10">
          <h2 className="uppercase">Projects</h2>

          <article>
            <header>
              <div className="flex justify-between">
                <p>{"2022 –"}</p>
                <p className="uppercase">Ongoing</p>
              </div>
              <p className="uppercase">
                <a href="https://www.pills.game">PILLS</a>
              </p>
            </header>

            <ul>
              <li>Avatar creation engine and frontend</li>
              <li>Character asset database</li>
              <li>Backend API</li>
            </ul>
          </article>

          <article>
            <header>
              <div className="flex justify-between">
                <p>{"2020 –"}</p>
                <p className="uppercase">Ongoing</p>
              </div>
              <p className="uppercase">
                <a href="https://www.refugeworldwide.com">Refuge Worldwide</a>
              </p>
            </header>

            <ul>
              <li>Website frontend</li>
              <li>CMS</li>
            </ul>
          </article>

          <p>@TODO</p>

          {/* <p>
            Jeff engineers products; the experience that brings them to life,
            and the code that drives them. His work specializes on Web3, and
            ranges from designing interfaces, to building high performance apps
            and websites. He previously worked at Async Art and Union. Most
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
          </p> */}
        </section>
      </main>
    </Fragment>
  );
}

export default IndexPage;
