import Head from "next/head";
import List from "../../components/list";

export default function Page() {
  return (
    <main className="p-sm">
      <Head>
        <title>Writing | Jeff Reiner, Design Engineer</title>
        <meta name="title" content="Writing | Jeff Reiner, Design Engineer" />
        <meta
          property="og:title"
          content="Writing | Jeff Reiner, Design Engineer"
        />
        <meta
          property="twitter:title"
          content="Writing | Jeff Reiner, Design Engineer"
        />
      </Head>

      <section>
        <h1 className="mb-md">Writing</h1>
        {/* <p className="measure-tight mb-sm">Writings in progress.</p> */}

        <List
          data={[
            {
              href: "/",
              label: "Crypto Wallets Are Dead. Long Live Crypto Wallets",
              isInternal: true,
            },
          ]}
        />
      </section>
    </main>
  );
}
