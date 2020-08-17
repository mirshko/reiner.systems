import Footer from "../components/footer";
import MDXWrapper from "../components/mdx-wrapper";
import Nav from "../components/nav";
import { useFathom } from "../hooks";
import "../styles/index.css";
import "../styles/yt-lite.css";

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>

      <div className="flex-1">
        <MDXWrapper>
          <Component {...pageProps} />
        </MDXWrapper>
      </div>

      <Footer />
    </div>
  );
}
