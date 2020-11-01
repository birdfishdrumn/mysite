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

        tags{
          id
        }
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
 allContentfulCategory {
    edges {
      node{
        slug
        id
        name
        work{
          title
        }
      }
    }
  }
  allContentfulTag{
    edges{
      node{
        slug
        id
        name
        work{
          title
        }
      }
    }
  }
}

  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQlのクエリでエラーが発生しました。`)
return
  }

// 全ての個別記事ページを作成する。
  blogresult.data.allContentfulWork.edges.forEach(({ node, next, previous }) => {
      const random = Math.floor( Math.random() * node.tags.length );
    createPage({

      path: `/blog/post/${node.slug}`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        id: node.id,
        next,
        previous,
        // catid: node.category.id,
        tagid: node.tags[random].id //tagsにはidが二つはいるものもある為、その中の0番目の要素をもつidを取得する。
      },
    })
  }
  )

  // 記事一覧ページのページネーションの設定
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
        currentPage: i + 1, //現在のぺーじ
        isFirst: i + 1 === 1, //最初のページ　つまりiの値が0の時
        isLast: i + 1 === blogPages, // 最後のページ、つまりi + 1　がページの総数になる時
      },
    })
  })
  // 記事一覧ページのページネーションの設定


  // カテゴリー一覧ページのページネーションの設定
  blogresult.data.allContentfulCategory.edges.forEach(({ node }) => {
    const catPostsPerPage = 2
    const catPosts = node.work.length //カテゴリーに属した記事の件数
    const catPages = Math.ceil(catPosts / catPostsPerPage) //カテゴリーページの総数
    Array.from({ length: catPages }).forEach((_, i) => {
    createPage({
      path: i === 0
        ?   `/cat/${node.slug}/`
        :  `/cat/${node.slug}/${i + 1}/`,
      component: path.resolve(`./src/templates/cat-template.js`),
      context: {
        catid: node.id,
        catname: node.name,
        catslug: node.slug,
        skip: catPostsPerPage * i,
        limit: catPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === catPages,
      }
    })
  })
  })



  // タグ一覧ページのページネーションの設定
  blogresult.data.allContentfulTag.edges.forEach(({ node }) => {
    const tagPostsPerPage = 2
    const tagPosts = node.work.length //カテゴリーに属した記事の件数
    const tagPages = Math.ceil(tagPosts / tagPostsPerPage) //カテゴリーページの総数
    Array.from({ length: tagPages }).forEach((_, i) => {
    createPage({
      path: i === 0
        ?   `/tag/${node.slug}/`
        :  `/tag/${node.slug}/${i + 1}/`,
      component: path.resolve(`./src/templates/tag-template.js`),
      context: {
        tagid: node.id,
        tagname: node.name,
        tagslug: node.slug,
        skip: tagPostsPerPage * i,
        limit: tagPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === tagPages,
      }
    })
  })
  })
}
