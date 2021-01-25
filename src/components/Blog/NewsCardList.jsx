import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import BlogCard from "./blogCard"
import  NewsCard from "../UI/NewsCard/NewsCard";
const NewsCardList = () => {
  const data = useStaticQuery(graphql`
query NewsQuery {
    allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: 0
    limit: 3
    filter: {category:
    {name: {eq:"可愛い" }}})
    {
    edges{
      node{
      title
      dateJP:date(formatString: "YYYY年MM月DD日")
      date
      category{
        name
      }
      id
      slug
      image{
        fluid(maxWidth: 573){
          ...GatsbyContentfulFluid_withWebp
        }
          description
      }
      }

    }
  }
}
`)
    return(
    < div className="container">

 <div className="posts">
        {data.allContentfulWork.edges.map(({ node }) => (
          <NewsCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
            catname={node.category.name} title={node.title}  dateJP={node.dateJP} />
        ))}
</div>
      </div >
    )
}

export default NewsCardList
