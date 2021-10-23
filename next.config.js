const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withContentlayer()({
  experimental: {
    esmExternals: true,
    swcLoader: true,
  },
  reactStrictMode: true,
  trailingSlash: false,
  redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
});
