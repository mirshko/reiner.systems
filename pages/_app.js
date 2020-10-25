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

      <div className="flex-1 bg-white rounded-xl cutout-top px-5 pt-5 pb-12">
        <MDXWrapper>
          <Component />
        </MDXWrapper>
      </div>

      <div className="h-5" />
    </div>
  );
}
