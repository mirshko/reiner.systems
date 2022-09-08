import Link from "next/link";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <main>
      <SEO />

      <section className="full-height-and-centered">
        <div className="p-5 sm:p-10">
          <p className="uppercase">
            <Link href="/info">
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

          <section>
            <ul>
              <li>Avatar creation engine and frontend</li>
              <li>Character asset database</li>
              <li>Backend API</li>
            </ul>
          </section>
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

          <section>
            <ul>
              <li>Website frontend</li>
              <li>CMS setup</li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <div className="flex justify-between">
              <p>{"2021"}</p>
              <p className="uppercase">Completed</p>
            </div>
            <p className="uppercase">
              <a href="https://dialectic.ch">Dialectic</a>
            </p>
          </header>

          <section>
            <ul>
              <li>Website and editorial</li>
              <li>Web3 project development</li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <div className="flex justify-between">
              <p>{"2020 – 2021"}</p>
              <p className="uppercase">Completed</p>
            </div>
            <p className="uppercase">
              <a href="https://union.finance">Union</a>
            </p>
          </header>

          <section>
            <ul>
              <li>Beta Web3 app</li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <div className="flex justify-between">
              <p>{"2019 – 2021"}</p>
              <p className="uppercase">Completed</p>
            </div>
            <p className="uppercase">
              <a href="https://async.art">Async Art</a>
            </p>
          </header>

          <section>
            <ul>
              <li>NFT marketplace</li>
              <li>Async Canvas creator</li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <div className="flex justify-between">
              <p>{"2017 – 2019"}</p>
              <p className="uppercase">Completed</p>
            </div>
            <p className="uppercase">
              <a href="https://contentful.com">Contentful</a>
            </p>
          </header>

          <section>
            <ul>
              <li>Marketing website</li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <div className="flex justify-between">
              <p>{"2014 – 2017"}</p>
            </div>
            <p className="uppercase">Previous Work</p>
          </header>
        </article>
      </section>
    </main>
  );
}

export default IndexPage;
