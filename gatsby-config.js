module.exports = {
  siteMetadata: {
    siteUrl: `https://reiner.design`,
    title: `jeff reiner`,
    description: `freelance ux engineer based in berlin.`,
    author: `jeff reiner <jeff@reiner.design>`,
    twitter: `@mirshko`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: require.resolve('./src/components/Layout') },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dotdesign`,
        short_name: `dotdesign`,
        start_url: `/`,
        background_color: `#111517`,
        theme_color: `#fffeff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
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
