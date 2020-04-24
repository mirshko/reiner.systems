import * as Fathom from "fathom-client";
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
      <header>
        <Nav />
      </header>

      <div className="content">
        <Component {...pageProps} />
      </div>

      <footer className="px-sm pb-sm mt-lg">
        <p>
          <span>©2020</span>{" "}
          <span>
            <a href="mailto:jeff@reiner.design">Mailto</a>
          </span>
        </p>
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
