import Link from "next/link";
import SEO from "../components/seo";

function InfoPage() {
  return (
    <main>
      <SEO title="Info" path="/info" />

      <div className="fixed top-5 left-5 z-50">
        <Link href="/">
          <a className="inline-flex px-5 text-white bg-white/10 rounded-full">
            Back
          </a>
        </Link>
      </div>

      <section className="full-height-and-centered">
        <div className="p-5 sm:p-10">
          <p className="uppercase">Info Statement</p>

          <p>
            I approach building products by getting deep into the process with
            clients. Working as part of the team, we begin by focusing on the
            needs of the users. Through considered ideation we build prototypes
            and test to prove our thesis.
          </p>

          <p className="relative">
            Currently specializing in Web3; both NFT and DeFi products. I
            deliver fast and responsive applications built with{" "}
            <span
              className="italic"
              title="React, Next.js, Tailwind CSS, SWR, ethers, wagmi"
            >
              modern frameworks
            </span>{" "}
            and{" "}
            <span className="italic" title="Vercel, Supabase">
              serverless technologies
            </span>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

export default InfoPage;
