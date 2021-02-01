const config = require('gatsby-plugin-config');

require('dotenv').config({
    path: ".env"
});




module.exports = {
    siteMetadata: {
        title: `篠原まるよし風鈴`,
        description: `江戸時代から続く江戸風鈴を制作している篠原まるよし風鈴です。`,
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
                name: `篠原まるよし風鈴`,
                short_name: `篠原まるよし風鈴`,
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
        {
            resolve: 'gatsby-firesource', //プラグイン名
            options: {
                // credential: require("./firebase.json"),
                // "type": process.env.FIREBASE_TYPE,
                // "project_id": process.env.FIREBASE_PROJECT_ID,
                // "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
                // "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                // "client_email": process.env.FIREBASE_CLIENT_EMAIL,
                // "client_id": process.env.FIREBASE_CLIENT_ID,
                // "auth_uri": process.env.FIREBASE_AUTH_URI,
                // "token_uri": process.env.FIREBASE_TOKEN_URI,
                // "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
                // "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL,
                credential: {
                    "type": process.env.FIREBASE_TYPE,
                    "project_id": process.env.FIREBASE_PROJECT_ID,
                    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
                    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
                    "client_id": process.env.FIREBASE_CLIENT_ID,
                    "auth_uri": process.env.FIREBASE_AUTH_URI,
                    "token_uri": process.env.FIREBASE_TOKEN_URI,
                    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
                    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL,
                },
                //認証情報
                types: [{
                    type: 'Products', // GraphQL上で表示される名前
                    collection: 'products', // 作成したコレクション名
                    map: doc => ({ // ドキュメントデータ
                        name: doc.name,
                        imageUrl: doc.imageUrl, // ドキ
                        category: doc.category,
                        description: doc.description,
                        allImage: doc.allImage
                    }),
                }, ],
            }
        },
        {
            resolve: `gatsby-plugin-remote-images`,
            options: {
                nodeType: 'Products',
                imagePath: 'imageUrl',
                type: 'array'
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],

}