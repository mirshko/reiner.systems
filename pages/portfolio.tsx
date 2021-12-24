import PortfolioPiece from "../components/piece";
import SEO, { ThemeColors } from "../components/seo";
import { clients, curated } from "../data";

function PortfolioPage() {
  return (
    <main className="space-y-20">
      <SEO title="Portfolio" path="/portfolio" themeColor={ThemeColors.Pink} />

      <section>
        <h1 hidden>Portfolio</h1>

        <p>Clients and projects I&apos;ve worked with.</p>
      </section>

      <section className="space-y-10">
        <div className="relative w-full flex gap-10 snap-x snap-mandatory overflow-x-auto">
          {curated.map((work, i) => (
            <div key={i} className="snap-start shrink-0">
              <PortfolioPiece {...work} />
            </div>
          ))}
        </div>

        <article>
          <header>
            <h2>Additional Clients</h2>
          </header>

          <div className="h-5" />

          <section>
            <p className="leading-normal">
              {clients.map((client) => client.label).join(", ")}
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}

export default PortfolioPage;
