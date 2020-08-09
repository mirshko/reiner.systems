import Footer from "../components/footer";
import MDXWrapper from "../components/mdx-wrapper";
import Nav from "../components/nav";
import { useFathom } from "../hooks";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <div className="site">
      <header>
        <Nav />
      </header>

      <div className="content">
        <MDXWrapper>
          <Component {...pageProps} />
        </MDXWrapper>
      </div>

      <Footer />

      <style jsx>{`
        .site {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

        .content {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
