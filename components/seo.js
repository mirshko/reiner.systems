import Head from "next/head";

const SEO = ({
  description = "Freelance design engineer based in Berlin.",
  path = "",
  title = "Jeff Reiner, Design Engineer",
  type = "website",
  published,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta property="twitter:title" content={title} />

    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="twitter:description" content={description} />

    <meta property="og:url" content={`https://reiner.design${path}`} />
    <meta property="twitter:url" content={`https://reiner.design${path}`} />
    <link rel="canonical" href={`https://reiner.design${path}`} />

    <meta property="og:type" content={type} />

    {published && (
      <meta property="article:published_time" content={published} />
    )}
  </Head>
);

export default SEO;
