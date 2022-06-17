import Head from "next/head";

export enum ThemeColors {
  Black = "#000000",
  Green = "#32d74b",
  Indigo = "#5e5ce6",
  Pink = "#ff375f",
  Teal = "#64d2ff",
  Yellow = "#e3af09",
  Magenta = "#ff00ff",
}

type Props = {
  description?: string;
  path?: string;
  title?: string;
  type?: string;
  themeColor?: ThemeColors;
};

function SEO({
  description = "Freelance design engineer based in Berlin.",
  path = "",
  title = "Jeff Reiner, Design Engineer",
  type = "website",
  themeColor = ThemeColors.Magenta,
}: Props) {
  return (
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

      <meta name="theme-color" content={themeColor} />
    </Head>
  );
}

export default SEO;
