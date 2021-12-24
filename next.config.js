/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  experimental: {
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
  },
  reactStrictMode: true,
};
