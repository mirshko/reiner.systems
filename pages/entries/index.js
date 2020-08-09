// import List from "../../components/list";
import SEO from "../../components/seo";

export default function Page() {
  return (
    <main className="p-sm">
      <SEO title="Entries" path="/entries" />

      <section>
        <h1 className="mb-md">All Writing</h1>

        {/* <List
          data={[
            {
              href: "/entries/crypto-wallets-are-dead-long-live-crypto-wallets",
              label: "Crypto Wallets Are Dead. Long Live Crypto Wallets",
              isInternal: true,
            },
          ]}
        /> */}
      </section>
    </main>
  );
}
