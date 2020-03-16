import * as Fathom from "fathom-client";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Nav from "../components/nav";
import { SITE_ID } from "../lib/fathom";
import "../styles/reset.css";

Router.events.on("routeChangeComplete", () => Fathom.trackPageview());

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Fathom.load();
    Fathom.setSiteId(SITE_ID);
    Fathom.trackPageview();
  }, []);

  return (
    <div className="site">
      <Head>
        <link
          rel="preload"
          href="/fonts/Parabole-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <header>
        <Nav />
      </header>

      <div className="content">
        <Component {...pageProps} />
      </div>

      <footer>
        <p>© 2020</p>
      </footer>

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
