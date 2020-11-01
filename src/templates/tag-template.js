import React from "react"
import Layout from "../components/layout";

import { graphql} from "gatsby";
import SEO from "../components/seo";
import Pagenation from "../components/UI/pagenation";
import BlogCard from "../components/Blog/blogCard"
export default ({data,location,pageContext}) => (
  <Layout>
    <SEO
      pagetitle={`TAG: ${pageContext.tagname}`}
      pagedesc={`「${pageContext.tagname}」タグの記事一覧です`}
      pagepath={location.pathname}

    />
<section className="content bloglist">
    <div className="container">
        <h1 className="bar">Tag: {pageContext.tagname}</h1>

   <div className="posts">
        {data.allContentfulWork.edges.map(({ node }) => (
          <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
            catname={node.category.name} title={node.title} dateJP={node.dateJP} />
        ))}
</div>

        <Pagenation path="tag" pageContext={pageContext} originPath={pageContext.tagslug}/>
    </div>
</section>

  </Layout>
)
// skipは何軒めからという意味、limitは何軒表示するかという意味
export const query = graphql`
query($tagid: String!,$skip: Int!, $limit: Int!) {
  allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: $skip
    limit: $limit
     filter: {tags:{
      elemMatch:{id: {eq: $tagid}}}})

    {
    edges{
      node{
      title
      id
        category{
        name
      }
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
