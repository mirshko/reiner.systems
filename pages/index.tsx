import SEO, { ThemeColors } from "../components/seo";

function IndexPage() {
  return (
    <main className="space-y-20">
      <SEO themeColor={ThemeColors.Yellow} />

      <section className="space-y-5">
        <p>
          I build and design digital products and experiences, focusing on Web3.
        </p>

        <p>
          Give me a shout on <a href="https://twitter.com/mirshko">Twitter</a>,
          or <a href="mailto:jeff@reiner.design">say hi by email</a>.
        </p>

        <ul>
          <li>
            <a href="https://github.com/mirshko">GitHub</a>
          </li>
          <li>
            <a href="https://are.na/jeff-reiner">Are.na</a>
          </li>
          <li>
            <a href="https://futureland.tv/mirshko">Futureland</a>
          </li>
          <li>
            <a href="https://www.instagram.com/mirshko">Instagram</a>
          </li>
          <li>
            <a href="https://read.cv/mirshko">CV</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default IndexPage;
