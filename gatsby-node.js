/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
  query {
  allContentfulWork(
    sort: {fields: date,order: DESC}
  ){
    edges{
      node{
        id
        slug
      }
         next{
        title
        slug
      }
      previous{
        title
        slug
      }
    }
  }
}

  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQlのクエリでエラーが発生しました。`)
return
  }

  blogresult.data.allContentfulWork.edges.forEach(({ node ,next,previous}) => {
    createPage({
      path: `/blog/post/${node.slug}`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  }
  )

  const blogPostsPerPage = 4//1ページに表示する記事の数
  const blogPosts = blogresult.data.allContentfulWork.edges.length //記事の総数
  const blogPages= Math.ceil(blogPosts / blogPostsPerPage) //ページ数を求める式、例えば記事総数が18、表示する記事の数が6だとすると、18/6= 3と3ページになる。

  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      // pathのiが0なら最初のページを表示する。,それ以外ならi + 1　ページ目を表示する。
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        skip: blogPostsPerPage * i, //skipではiページ目の記事を取得するようにする。例えば2ページめではiの値は1となるので、skipは6なら6*1となり、6件の記事をスキップし、7件目からを取得する。
        limit: blogPostsPerPage,
      }
    })
  })

}
