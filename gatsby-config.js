var channelSlugs = [
  "2018-03-12t1622",
  "2018-03-13t1610",
  "2018-03-13t1620",
  "2018-03-13t1624",
  "2018-04-04t1608",
  "2018-04-04t1615",
  "2018-04-11t1448",
  "2018-04-11t1450",
  "2018-04-23t1810",
  "2018-04-23t1813",
  "2018-04-23t1819",
  "2018-04-23t1821",
  "2018-04-23t2002",
  "2018-04-26t1739",
  "2018-04-26t1736",
  "2018-04-26t1733"
];

module.exports = {
  siteMetadata: {
    siteUrl: `https://reiner.design`,
    title: `jeff reiner`,
    description: `freelance ux engineer based in berlin.`,
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
    //     accessToken: `ab2a5816af74d871225b2d89c8fc71f6a203937c724711ff3a1c18e0938baace`,
    //     channelSlugs
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
