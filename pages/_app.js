// import * as Fathom from "fathom-client";
// import Router from "next/router";
// import { useEffect } from "react";
import Nav from "../components/nav";
// import { FATHOM_SITE_ID } from "../lib/fathom";
import "../styles/reset.css";

// Router.events.on("routeChangeComplete", () => Fathom.trackPageview());

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   if (process.env.NODE_ENV === "production") {
  //     Fathom.load();
  //     Fathom.setSiteId(FATHOM_SITE_ID);
  //     Fathom.trackPageview();
  //   }
  // }, []);

  return (
    <div className="site">
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
