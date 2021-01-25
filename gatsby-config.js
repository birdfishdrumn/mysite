const config = require('gatsby-plugin-config');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`, // or '.env'
});




module.exports = {
    siteMetadata: {
        title: `ESSENTIALS`,
        description: `美味しい食事と食材を探求するサイト`,
        lang: `ja`,
        siteUrl: `https://wonderful-hopper-4ed849.netlify.app`,
        locale: `ja_JP`,
        fbappid: `XXXXXX`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ESSENTIALS エッセンシャルズ`,
                short_name: `オシャレ`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#477294`,
                display: `standalone`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                host: process.env.CONTENTFUL_HOST,


            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],

}