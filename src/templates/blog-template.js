import React from "react"
import Layout from "../components/layout";

import { graphql} from "gatsby";
import SEO from "../components/seo";

import Pagenation from "../components/UI/pagenation";
import BlogCard from "../components/Blog/blogCard"

// ブログ一覧ページ

export default ({data,location,pageContext}) => (
  <Layout>
    <SEO
      pagetitle="ブログ"
      pagedesc="篠原のブログです"
      pagepath={location.pathname}
    />
<section classNameName="content bloglist">
    <div className="container">
        <h1 className="bar">RECENT POSTS</h1>
 <div className="posts">
        {data.allContentfulWork.edges.map(({ node }) => (
          <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
            catname={node.category.name} title={node.title} content={node.content.content} dateJP={node.dateJP} />
        ))}
</div>
        <Pagenation path="blog" pageContext={pageContext} />
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
      category{
        name
      }
      id
      date
      content{
        content
      }
      dateJP:date(formatString: "YYYY年MM月DD日")
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
