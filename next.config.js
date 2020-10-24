const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  extension: /\.mdx?$/,
});

const withPlugins = require("next-compose-plugins");

const optimizedImages = require("next-optimized-images");

const nextConfiguration = {
  pageExtensions: ["js", "jsx", "mdx"],
  trailingSlash: false,
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
};

module.exports = withPlugins(
  [withMDX, [optimizedImages, {}]],
  nextConfiguration
);
