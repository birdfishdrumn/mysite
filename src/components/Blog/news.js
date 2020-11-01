import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import BlogCard from "./blogCard"
export default () => {
  const data = useStaticQuery(graphql`
query NewsQuery {
    allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: 0
    limit: 4
    filter: {category:
    {name: {eq:"可愛い" }}})
    {
    edges{
      node{
      title
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
    < div >
               <h2 className="bar center">
      Tag
        </h2>
 <div className="posts">
        {data.allContentfulWork.edges.map(({ node }) => (
          <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
            catname={node.category.name} title={node.title}  dateJP={node.dateJP} />
        ))}
</div>
      </div >
    )
}
