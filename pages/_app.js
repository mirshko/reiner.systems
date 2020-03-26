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
          href="/Parabole-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="author" content="@mirshko" />
        <meta
          name="description"
          content="Freelance Design Engineer based in Berlin. Team @ Coal, and Union"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reiner.design" />
        <meta
          property="og:description"
          content="Freelance Design Engineer based in Berlin. Team @ Coal, and Union"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://reiner.design" />
        <meta
          property="twitter:description"
          content="Freelance Design Engineer based in Berlin. Team @ Coal, and Union"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon-apple.png" />
        <link
          href="/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>

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
