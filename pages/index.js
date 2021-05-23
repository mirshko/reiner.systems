import SEO from "../components/seo";

function IndexPage() {
  return (
    <main className="space-y-20">
      <SEO />

      <section className="space-y-5">
        <p>
          I'm currently freelancing as a design engineer located in Berlin, as
          well as working on frontend at{" "}
          <a href="https://async.art">Async Art</a> and design at{" "}
          <a href="https://soapbox.social">Soapbox</a>.
        </p>

        <p>
          I focus on engaging, responsive, mobile-first websites and apps;
          highly-usable and efficient design systems; and solving complex UX
          problems, in and around the Web 2.0 and Web3 space.
        </p>

        <p>
          You can find me most active on{" "}
          <a href="https://twitter.com/mirshko">Twitter</a> and{" "}
          <a href="https://www.instagram.com/mirshko">Instagram</a>, see what
          I'm building on <a href="https://github.com/mirshko">GitHub</a>, and
          for a more formal introduction or project request, feel free to{" "}
          <a href="mailto:jeff@reiner.design">send me an email</a>.
        </p>

        <p>
          If you need one of those fancy things,{" "}
          <a href="/jeff-reiner.pdf">here's my résume</a>.
        </p>
      </section>
    </main>
  );
}

export default IndexPage;
