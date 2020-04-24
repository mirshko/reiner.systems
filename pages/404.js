import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <main>
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

      <h1 className="h1 mt-sm">Nothing here</h1>

      <img src="/404.gif" alt="Nothing here" />

      <p>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </p>
    </main>
  );
}
