module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nnekhju478qa`,
        accessToken: `d90a03cac72b4819a3a1f3b306d733be6237abf63daae8fa3d64f1a895c191f0`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#333333`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jeff Reiner — Photos',
        short_name: 'Photos',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/favicon.png',
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}
