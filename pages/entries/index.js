// import List from "../../components/list";
import SEO from "../../components/seo";

export default function Page() {
  return (
    <main>
      <SEO title="Entries" path="/entries" />

      <h1>All Writing</h1>

      {/* <List
          data={[
            {
              href: "/entries/crypto-wallets-are-dead-long-live-crypto-wallets",
              label: "Crypto Wallets Are Dead. Long Live Crypto Wallets",
              isInternal: true,
            },
          ]}
        /> */}
    </main>
  );
}
