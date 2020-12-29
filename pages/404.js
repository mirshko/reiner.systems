import Link from "next/link";
import SEO from "../components/seo";

export default function Custom404() {
  return (
    <main>
      <SEO title="404" path="/404" />

      <h1>Whoops, that page is gone.</h1>

      <div className="h-5" />

      <p>
        There's nothing here{" "}
        <Link href="/">
          <a>go back home</a>
        </Link>
      </p>
    </main>
  );
}
