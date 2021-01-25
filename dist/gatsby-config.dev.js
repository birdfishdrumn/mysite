"use strict";

var config = require('gatsby-plugin-config');

require('dotenv').config({
  path: ".env.".concat(process.env.NODE_ENV) // or '.env'

});

module.exports = {
  siteMetadata: {
    title: "ESSENTIALS",
    description: "\u7F8E\u5473\u3057\u3044\u98DF\u4E8B\u3068\u98DF\u6750\u3092\u63A2\u6C42\u3059\u308B\u30B5\u30A4\u30C8",
    lang: "ja",
    siteUrl: "https://wonderful-hopper-4ed849.netlify.app",
    locale: "ja_JP",
    fbappid: "XXXXXX"
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "ESSENTIALS \u30A8\u30C3\u30BB\u30F3\u30B7\u30E3\u30EB\u30BA",
      short_name: "\u30AA\u30B7\u30E3\u30EC",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#477294",
      display: "standalone",
      icon: "src/images/icon.png" // This path is relative to the root of the site.

    }
  }, "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, "gatsby-plugin-material-ui", "gatsby-plugin-styled-components", "gatsby-plugin-offline", {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST
    }
  } // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  ]
};