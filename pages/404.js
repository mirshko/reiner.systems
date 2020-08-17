import Link from "next/link";
import SEO from "../components/seo";

export default function Page() {
  return (
    <main className="p-4 space-y-4">
      <SEO title="404" path="/404" />

      <h1 hidden>This page doesn't exist or was moved</h1>

      <img src="/404.gif" alt="Nothing here" />

      <p>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </p>
    </main>
  );
}
