import React from "react"
import {graphql,useStaticQuery,Link} from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
query categoryQuery{
    allContentfulCategory {
    edges {
      node{
        slug
        name
        id
        work{
          title
        }
      }
    }
  }
}
`)
    return(
    < div >
               <h2 className="bar center">
          Category
        </h2>
 {/* <p>{data.allContentfulCategory.edges.node.work[1].title}</p> */}
          <div className="space-l"/>
          <ul className="center">
            {data.allContentfulCategory.edges.map(({ node }) => (
            <Link to ={`/cat/${node.slug}/`}><li className="tag-chip" key={node.id}>{node.name} {node.work.length}</li></Link>

          ))}
        </ul>

          <div className="space-l"/>
      </div >
    )
}
