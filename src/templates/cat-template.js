import React from "react"
import Layout from "../components/layout";

import { graphql} from "gatsby";
import SEO from "../components/seo";
import BlogCard from "../components/Blog/blogCard"
import Pagenation from "../components/UI/pagenation";

export default ({ data, location, pageContext }) => (

  <Layout>
    <SEO
      pagetitle={`CATEGORY: ${pageContext.catname}`}
      pagedesc={`「${pageContext.catname}」カテゴリーの記事一覧です`}
      pagepath={location.pathname}

    />
<section classNameName="content bloglist">
    <div className="container">
        <h1 className="bar">CATEGORY: {pageContext.catname}</h1>

 <div className="posts">
        {data.allContentfulWork.edges.map(({ node }) => (
          <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
            catname={node.category.name} title={node.title} dateJP={node.dateJP} />
        ))}
</div>

           <Pagenation path="cat" pageContext={pageContext} originPath={pageContext.catslug}/>
    </div>
</section>

  </Layout>
)
// skipは何軒めからという意味、limitは何軒表示するかという意味
export const query = graphql`
query($catid: String!,$skip: Int!, $limit: Int!) {
  allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: $skip
    limit: $limit
     filter: {category:
    {id: {eq: $catid}}})
    {
    edges{
      node{
      title
      id
            date
      dateJP:date(formatString: "YYYY年MM月DD日")
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
