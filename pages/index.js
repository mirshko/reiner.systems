import SEO from "../components/seo";

function IndexPage() {
  return (
    <main className="space-y-20">
      <SEO />

      <section className="space-y-5">
        <p>
          Currently co-founder of{" "}
          <a className="text-soapbox" href="https://soapbox.social">
            Soapbox
          </a>{" "}
          focused on product and mini games, based out of Berlin.
        </p>

        {/* <p>
          I focus on engaging, responsive, mobile-first websites and apps;
          highly-usable and efficient design systems; and solving complex UX
          problems, in and around the Web 2.0 and Web3 space.
        </p> */}

        {/* <p>
          I build and design digital products and experiences, right now
          focusing on social audio and playing with Web3.
        </p> */}

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

        {/* <p>
          If you need one of those fancy things,{" "}
          <a href="/jeff-reiner.pdf">here's my résume</a>.
        </p> */}
      </section>
    </main>
  );
}

export default IndexPage;
