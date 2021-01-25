import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BlogCard from "./blogCard"
const RandomPosts = props => {
  const randomSelect = (array, num) => {
    let newArray = []

    while (newArray.length < num && array.length > 0) {
      const rand = Math.floor(Math.random() * array.length)
      newArray.push(array[rand])
      array.splice(rand, 1)
    }

    return newArray
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulWork(
         sort: {fields: date,order: DESC}
      ){
        nodes {
          title
          slug
          id
           category{
        name
      }

      image{
        fluid(maxWidth: 573){
          ...GatsbyContentfulFluid_withWebp
        }
          description
      }
        }
      }
    }
  `)

  const baseposts = data.allContentfulWork.nodes.filter(
    node => node.id !== props.id
  )
  const randomposts = randomSelect(baseposts, props.a_number)

  return (
    <div className="randomposts">
       <h2 className="bar center">
            Related Post
        </h2>
      {/* <ul>
        {randomposts.map(node => {
          return (
            <li key={node.slug}>
              <Link to={`/blog/post/${node.slug}/`}>{node.title}</Link>
            </li>
          )
        })}
      </ul> */}
           <div className="posts">



            {randomposts.map( node  => (
              <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
                catname={node.category.name} title={node.title} dateJP={node.dateJP} />
            ))}
          </div>
    </div>
  )
}

export default RandomPosts
