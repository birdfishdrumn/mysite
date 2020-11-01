import React from "react"
import {graphql,useStaticQuery,Link} from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
query footerQuery{
    allContentfulTag {
    edges {
      node{
        slug
        name
        id
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
          <div className="space-l"/>
          <ul className="center">
            {data.allContentfulTag.edges.map(({ node }) => (
            <Link to ={`/tag/${node.slug}/`}><li className="tag-chip" key={node.id}>{node.name}</li></Link>

          ))}
          </ul>
          <div className="space-l"/>
      </div >
    )
}
