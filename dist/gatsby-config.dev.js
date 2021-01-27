"use strict";

var config = require('gatsby-plugin-config');

require('dotenv').config({
  path: ".env.".concat(process.env.NODE_ENV) // or '.env'

});

module.exports = {
  siteMetadata: {
    title: "\u7BE0\u539F\u307E\u308B\u3088\u3057\u98A8\u9234",
    description: "\u6C5F\u6238\u6642\u4EE3\u304B\u3089\u7D9A\u304F\u6C5F\u6238\u98A8\u9234\u3092\u5236\u4F5C\u3057\u3066\u3044\u308B\u7BE0\u539F\u307E\u308B\u3088\u3057\u98A8\u9234\u3067\u3059\u3002",
    lang: "ja",
    siteUrl: "https://wonderful-hopper-4ed849.netlify.app",
    locale: "ja_JP",
    fbappid: "XXXXXX"
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "\u7BE0\u539F\u307E\u308B\u3088\u3057\u98A8\u9234",
      short_name: "\u7BE0\u539F\u307E\u308B\u3088\u3057\u98A8\u9234",
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
  }, {
    resolve: 'gatsby-firesource',
    //プラグイン名
    options: {
      credential: require("./firebase.json"),
      //認証情報
      types: [{
        type: 'Products',
        // GraphQL上で表示される名前
        collection: 'products',
        // 作成したコレクション名
        map: function map(doc) {
          return {
            // ドキュメントデータ
            name: doc.name,
            imageUrl: doc.imageUrl,
            // ドキ
            category: doc.category,
            description: doc.description
          };
        }
      }]
    }
  }, {
    resolve: "gatsby-plugin-remote-images",
    options: {
      nodeType: 'Products',
      imagePath: 'imageUrl'
    }
  } // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  ]
};