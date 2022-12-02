import Document, { Head, Html, Main, NextScript } from "next/document";

class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:site_name"
            content="Jeff Reiner, Design Engineer"
          />
          <meta name="author" content="Jeff Reiner" />
          <meta property="twitter:site" content="@mirshko" />
          <meta property="twitter:creator" content="@mirshko" />
          <meta property="twitter:card" content="summary" />

          <link rel="shortcut icon" href="favicon-pixel.png" type="image/png" />

          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/Mint-Grotesk-Medium-V131.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/Mint-Grotesk-Medium-Italic-V131.woff2"
            crossOrigin="anonymous"
          />
        </Head>

        <body className="antialiased font-medium bg-black text-white">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
