import Link from "next/link";
import SEO from "../components/seo";

function Custom404() {
  return (
    <main>
      <SEO title="404" path="/404" />

      <div className="flex">
        <Link href="/">
          <a className="inline-flex px-5 text-white bg-white/10 rounded-full text-[0.5em]">
            Back
          </a>
        </Link>
      </div>

      <div className="h-5" />

      <h1>Whoops, that page is gone.</h1>

      <div className="h-5" />

      <p>There&apos;s nothing here</p>
    </main>
  );
}

export default Custom404;
