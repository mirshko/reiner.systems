import Document, { Head, Html, Main, NextScript } from "next/document";

export default class Doc extends Document {
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
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="icon" href="/icon.png" />
          <link rel="apple-touch-icon" href="/icon-apple.png" />
        </Head>
        <body className="antialiased font-medium bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
