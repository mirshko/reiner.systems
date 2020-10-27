const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  trailingSlash: false,
  images: {
    domains: ["img.discogs.com"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://twitter.com/mirshko",
        permanent: false,
      },
      {
        source: "/photos",
        destination: "https://www.are.na/jeff-reiner/index",
        permanent: false,
      },
    ];
  },
});
