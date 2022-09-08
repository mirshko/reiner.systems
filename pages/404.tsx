import Link from "next/link";
import SEO from "../components/seo";

function Custom404() {
  return (
    <main>
      <SEO title="404" path="/404" />

      <div className="fixed top-5 left-5 z-50">
        <Link href="/">
          <a className="inline-flex px-5 text-white bg-white/10 rounded-full">
            Back
          </a>
        </Link>
      </div>

      <section className="full-height-and-centered">
        <h1>There&apos;s nothing here</h1>
      </section>
    </main>
  );
}

export default Custom404;
