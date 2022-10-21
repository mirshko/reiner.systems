import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import SEO from "../components/seo";

function BerlinPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="p-5 sm:p-10">
      <SEO title="Berlin" path="/berlin" />

      <div className="fixed top-5 left-5 z-50">
        <Link href="/">
          <a className="inline-flex px-5 text-white bg-white/10 rounded-full">
            Back
          </a>
        </Link>
      </div>

      <section className="pt-5 sm:pt-10 space-y-5">
        <header>
          <p className="uppercase">Berlin</p>

          <p>
            Idea lifted from{" "}
            <a href="https://brandonoxendine.com">Brandon Oxendine</a>'s{" "}
            <a href="https://brandonoxendine.com/berlin">
              Things to do in Berlin
            </a>{" "}
            list, so credit where credit is due.
          </p>

          <p>Here's my list. I'll update it when I think of something new.</p>
        </header>

        <article>
          <header>
            <h2>Food</h2>
          </header>

          <ul>
            <li>
              <a href="https://goo.gl/maps/K9ePWGsvnpnJ7Mhr8">Wen Cheng</a> -
              hand-pulled chinese noodles and tasty bao
            </li>
            <li>
              <a href="https://g.page/AV-Restaurant-Berlin">AV Restaurant</a> -
              fantastic tasting menu, snacks, and wine, expensive, very cute
              people
            </li>
            <li>
              <a href="https://g.page/KokioBerlin">KOKIO</a> - hands down best
              Korean-fried-chicken in Berlin
            </li>
            <li>
              <a href="https://g.page/Mamida-Berlin">Mamida</a> - sourdough
              pizza, great wine
            </li>
          </ul>
        </article>

        <article>
          <header>
            <h2>Coffee</h2>
          </header>

          <ul>
            <li>
              <a href="https://goo.gl/maps/4fZGUj8L9pbrnB7u6">
                Bonanza Coffee Heroes
              </a>{" "}
              - great espresso and filter, my local
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default BerlinPage;
