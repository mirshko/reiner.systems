import List from "../../components/list";
import SEO from "../../components/seo";

export default function Page() {
  return (
    <main className="p-sm">
      <SEO title="Writing" path="/writing" />

      <section>
        <h1 className="mb-md">Writing</h1>
        {/* <p className="measure-tight mb-sm">Writings in progress.</p> */}

        <List
          data={[
            {
              href: "/writing/crypto-wallets-are-dead-long-live-crypto-wallets",
              label: "Crypto Wallets Are Dead. Long Live Crypto Wallets",
              isInternal: true,
            },
          ]}
        />
      </section>
    </main>
  );
}
