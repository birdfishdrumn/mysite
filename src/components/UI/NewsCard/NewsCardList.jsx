import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import NewsCard from "./NewsCard"
const NewsCardList = () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allContentfulWork(
        sort: { fields: date, order: DESC }
        skip: 0
        limit: 5
        filter: { category: { name: { eq: "お知らせ" } } }
      ) {
        edges {
          node {
            title
            dateJP: date(formatString: "YYYY.MM.DD")
            date
            category {
              name
            }
            id
            slug
            image {
              fluid(maxWidth: 573) {
                ...GatsbyContentfulFluid_withWebp
              }
              description
            }
          }
        }
      }
    }
  `)
  return (
    <div className="container center">
      {data.allContentfulWork.edges.map(({ node }) => (
        <NewsCard
          key={node.id}
          slug={node.slug}
          dataTime={node.date}
          catname={node.category.name}
          title={node.title}
          dateJP={node.dateJP}
        />
      ))}
    </div>
  )
}

export default NewsCardList
