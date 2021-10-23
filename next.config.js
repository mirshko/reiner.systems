// @ts-check
const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withContentlayer()({
  trailingSlash: false,
});
