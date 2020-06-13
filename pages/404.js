import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-sm">
      <Head>
        <title>404 | Jeff Reiner, Design Engineer</title>
        <meta name="title" content="404 | Jeff Reiner, Design Engineer" />
        <meta
          property="og:title"
          content="404 | Jeff Reiner, Design Engineer"
        />
        <meta
          property="twitter:title"
          content="404 | Jeff Reiner, Design Engineer"
        />
      </Head>

      <h1 hidden>This page doesn't exist or was moved</h1>

      <div className="mt-md">
        <img src="/404.gif" alt="Nothing here" />
      </div>

      <p className="mt-md">
        <Link href="/">
          <a>Back home</a>
        </Link>
      </p>
    </main>
  );
}
