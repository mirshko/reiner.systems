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

          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body className="antialiased text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium bg-black text-white">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
