const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withContentlayer()({
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
