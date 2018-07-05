require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nnekhju478qa`,
        accessToken: process.env.CTF_ACCESS_TOKEN,
        host:
          process.env.CTF_USE_PREVIEW == 'true'
            ? 'preview.contentful.com'
            : 'cdn.contentful.com',
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
  ],
}
