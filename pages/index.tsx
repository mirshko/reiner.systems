import SEO from "../components/seo";

function IndexPage() {
  return (
    <main className="space-y-20">
      <SEO />

      <section className="space-y-5">
        <p>
          Currently front-end &amp; design at{" "}
          <a className="text-dialectic" href="https://dialectic.ch">
            Dialectic
          </a>
          , based in Berlin.
        </p>

        <p>
          I build and design digital products and experiences, focusing on Web3.
        </p>

        <p>
          Give me a shout on <a href="https://twitter.com/mirshko">Twitter</a>{" "}
          or <a href="https://www.instagram.com/mirshko">Instagram</a>, or{" "}
          <a href="mailto:jeff@reiner.design">say hi by email</a>.
        </p>

        <ul className="flex space-x-5">
          <li>
            <a href="https://github.com/mirshko">GitHub</a>
          </li>
          <li>
            <a href="https://are.na/jeff-reiner">Are.na</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default IndexPage;
