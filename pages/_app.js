import Nav from "../components/nav";
import { useFathom } from "../hooks";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>

      <div className="flex-1 bg-white rounded-xl cutout-top px-5 pt-5 pb-12">
        <Component {...pageProps} />
      </div>

      <div className="h-5" />
    </div>
  );
}
