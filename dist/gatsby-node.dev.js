"use strict"

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it
var path = require("path")

exports.createPages = function _callee(_ref) {
  var graphql,
    actions,
    reporter,
    createPage,
    blogresult,
    blogPostsPerPage,
    blogPosts,
    blogPages
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          ;(graphql = _ref.graphql),
            (actions = _ref.actions),
            (reporter = _ref.reporter)
          createPage = actions.createPage
          _context.next = 4
          return regeneratorRuntime.awrap(
            graphql(
              "\n  query {\n  allContentfulWork(\n    sort: {fields: date,order: DESC}\n  ){\n    edges{\n      node{\n        date\n        id\n        slug\n\n\n      }\n         next{\n        title\n        slug\n      }\n      previous{\n        title\n        slug\n      }\n    }\n  }\n allContentfulCategory {\n    edges {\n      node{\n        slug\n        id\n        name\n        work{\n          title\n        }\n      }\n    }\n  }\n\n}\n\n  "
            )
          )

        case 4:
          blogresult = _context.sent

          if (!blogresult.errors) {
            _context.next = 8
            break
          }

          reporter.panicOnBuild(
            "GraphQl\u306E\u30AF\u30A8\u30EA\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002"
          )
          return _context.abrupt("return")

        case 8:
          // 全ての個別記事ページを作成する。
          blogresult.data.allContentfulWork.edges.forEach(function (_ref2) {
            var node = _ref2.node,
              next = _ref2.next,
              previous = _ref2.previous
            // const random = Math.floor(Math.random() * node.tags.length);
            createPage({
              path: "/blog/post/".concat(node.slug),
              component: path.resolve("./src/templates/blogpost-template.jsx"),
              context: {
                id: node.id,
                next: next,
                previous: previous, // catid: node.category.id,
                // tagid: node.tags[random].id //tagsにはidが二つはいるものもある為、その中の0番目の要素をもつidを取得する。
              },
            })
          }) // 記事一覧ページのページネーションの設定

          blogPostsPerPage = 4 //1ページに表示する記事の数

          blogPosts = blogresult.data.allContentfulWork.edges.length //記事の総数

          blogPages = Math.ceil(blogPosts / blogPostsPerPage) //ページ数を求める式、例えば記事総数が18、表示する記事の数が6だとすると、18/6= 3と3ページになる。

          Array.from({
            length: blogPages,
          }).forEach(function (_, i) {
            createPage({
              // pathのiが0なら最初のページを表示する。,それ以外ならi + 1　ページ目を表示する。
              path: i === 0 ? "/blog/" : "/blog/".concat(i + 1, "/"),
              component: path.resolve("./src/templates/blog-template.jsx"),
              context: {
                skip: blogPostsPerPage * i,
                //skipではiページ目の記事を取得するようにする。例えば2ページめではiの値は1となるので、skipは6なら6*1となり、6件の記事をスキップし、7件目からを取得する。
                limit: blogPostsPerPage,
                currentPage: i + 1,
                //現在のぺーじ
                isFirst: i + 1 === 1,
                //最初のページ　つまりiの値が0の時
                isLast: i + 1 === blogPages, // 最後のページ、つまりi + 1　がページの総数になる時
              },
            })
          }) // 記事一覧ページのページネーションの設定
          // カテゴリー一覧ページのページネーションの設定

          blogresult.data.allContentfulCategory.edges.forEach(function (_ref3) {
            var node = _ref3.node
            var catPostsPerPage = 10
            var catPosts = node.work && node.work.length //カテゴリーに属した記事の件数

            var catPages = Math.ceil(catPosts / catPostsPerPage) //カテゴリーページの総数

            Array.from({
              length: catPages,
            }).forEach(function (_, i) {
              createPage({
                path:
                  i === 0
                    ? "/cat/".concat(node.slug, "/")
                    : "/cat/".concat(node.slug, "/").concat(i + 1, "/"),
                component: path.resolve("./src/templates/cat-template.jsx"),
                context: {
                  catid: node.id,
                  catname: node.name,
                  catslug: node.slug,
                  skip: catPostsPerPage * i,
                  limit: catPostsPerPage,
                  currentPage: i + 1,
                  isFirst: i + 1 === 1,
                  isLast: i + 1 === catPages,
                },
              })
            })
          }) // タグ一覧ページのページネーションの設定
        // blogresult.data.allContentfulTag.edges.forEach(({ node }) => {
        //     const tagPostsPerPage = 2
        //     const tagPosts = node.work && node.work.length //カテゴリーに属した記事の件数
        //     const tagPages = Math.ceil(tagPosts / tagPostsPerPage) //カテゴリーページの総数
        //     Array.from({ length: tagPages }).forEach((_, i) => {
        //         createPage({
        //             path: i === 0 ?
        //                 `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
        //             component: path.resolve(`./src/templates/tag-template.js`),
        //             context: {
        //                 tagid: node.id,
        //                 tagname: node.name,
        //                 tagslug: node.slug,
        //                 skip: tagPostsPerPage * i,
        //                 limit: tagPostsPerPage,
        //                 currentPage: i + 1,
        //                 isFirst: i + 1 === 1,
        //                 isLast: i + 1 === tagPages,
        //             }
        //         })
        //     })
        // })
        // const blogresultData = blogresult.data.allContentfulWork.edges
        // const yearMonth = ['2020-09','2020-10'];
        // const archiveByMonth = yearMonth.map(x => {
        //   const obj = {};
        //   obj[x] = (blogresultData.filter(y => y.node.date.match(x))).length;
        //   return obj;
        // });
        // const archivePerpage = 5 //１ページに表示する記事の数
        // archiveByMonth.forEach((x) => {
        //   const archivePosts = x[Object.keys(x)] //記事の総数
        //   if (archivePosts === 0) return;
        //   const archivePages = Math.ceil(archivePosts / archivePerpage) //記事一覧ページの総数
        //   const currentYear = Object.keys(x)[0].split('-')[0];
        //   const currentMonth = Object.keys(x)[0].split('-')[1];
        //   const nextMonth = Number(currentMonth) + 1 === 13 ? '01' : ('00' + String(Number(currentMonth) + 1)).slice(-2);
        //   const nextYear = (nextMonth === '01') ? String(Number(nextMonth) + 1) : currentYear;
        //   Array.from({ length: archivePages }).forEach((_, i) => {
        //     createPage({
        //       path:
        //         i === 0
        //           ? `/${currentYear}/${currentMonth}`
        //           : `/${currentYear}/${currentMonth}/${i + 1}/`,
        //       component: path.resolve('./src/templates/archiveTemplate.js'),
        //       context: {
        //         currentYearMonth: currentYear + '-' + currentMonth,
        //         nextYearMonth: nextYear + '-' + nextMonth,
        //         currentYear,
        //         currentMonth,
        //         skip: archivePerpage * i,
        //         limit: archivePerpage,
        //         currentPage: i + 1, // 現在のページ番号
        //         isFirst: i + 1 === 1, //最初のページ
        //         isLast: i + 1 === archivePages, // 最後のページ
        //       }
        //     })
        //   })
        // })

        case 14:
        case "end":
          return _context.stop()
      }
    }
  })
} // archive //
