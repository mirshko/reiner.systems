import Link from "next/link";
import SEO from "../components/seo";

function NotFound() {
  return (
    <main>
      <SEO title="404" path="/404" />

      <h1>404</h1>

      <div className="h-5" />

      <img src="/404.gif" alt="Nothing here" />

      <div className="h-5" />

      <p>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </p>
    </main>
  );
}

export default NotFound;
