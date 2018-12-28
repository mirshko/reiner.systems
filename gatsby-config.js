require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://reiner.design`,
    title: `jeff reiner`,
    description: `frontend developer based in berlin.`,
    author: `jeff reiner <jeff@reiner.design>`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nnekhju478qa`,
        accessToken: process.env.CTF_ACCESS_TOKEN,
        host:
          process.env.CTF_USE_PREVIEW == "true"
            ? "preview.contentful.com"
            : "cdn.contentful.com"
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout")
        }
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `blue`,
        showSpinner: false
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`
  ]
};
