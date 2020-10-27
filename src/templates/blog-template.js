import React from "react"
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";

export default ({data,location}) => (
  <Layout>
    <SEO
      pagetitle="ブログ"
      pagedesc="篠原のブログです"
      pagepath={location.pathname}
    />
<section className="content bloglist">
    <div className="container">
        <h1 className="bar">RECENT POSTS</h1>

        <div className="posts">
          {data.allContentfulWork.edges.map(({ node }) => (
                       <article className="post" key={node.id}>
              <Link to={`/blog/post/${node.slug}`}>
                <figure>
                  <Img fluid={node.image.fluid} alt={node.image.description} style={{height:"100%"}}/>
                </figure>
                <h3>{node.title}</h3>
                </Link>
            </article>

          ))}


        </div>
    </div>
</section>

  </Layout>
)
// skipは何軒めからという意味、limitは何軒表示するかという意味
export const query = graphql`
query($skip: Int!, $limit: Int!) {
  allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: $skip
    limit: $limit
    ){
    edges{
      node{
      title
      id
      slug
      image{
        fluid(maxWidth: 500){
          ...GatsbyContentfulFluid_withWebp
        }
          description
      }
      }

    }
  }
}
`
