module.exports = {
  siteMetadata: {
    siteUrl: `https://reiner.design`,
    title: `jeff reiner`,
    description: `frontend developer based in berlin.`,
    author: `jeff reiner <jeff@reiner.design>`,
    twitter: `@mirshko`
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout")
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `blue`,
        showSpinner: false
      }
    },
    // {
    //   resolve: "gatsby-source-are.na",
    //   options: {
    //     accessToken: process.env.ARENA_PAT,
    //     channelSlugs: ["2018-03-12t1622"]
    //   }
    // },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          "Link: </ETCTrispaceVariable.woff2>; rel=preload; as=font; crossorigin; type=font/woff2"
        ],
        headers: {
          "/*.woff2": [
            "Access-Control-Allow-Origin: *",
            "Content-Type: font/woff2"
          ]
        }
      }
    }
  ]
};
