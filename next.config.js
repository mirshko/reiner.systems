const withPreact = require("next-plugin-preact");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withPreact({
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
});
