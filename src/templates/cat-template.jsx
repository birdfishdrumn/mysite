import React from "react"
import Layout from "../components/layout";
import NewsCard from "../components/UI/NewsCard/NewsCard";
import { graphql} from "gatsby";
import SEO from "../components/seo";
import BlogCard from "../components/Blog/blogCard"
import Pagenation from "../components/UI/pagenation";
import { SubTitle } from "../style/GlobalStyle";
export default ({ data, location, pageContext }) => {


 return(
  <Layout>
    <SEO
      pagetitle={`CATEGORY: ${pageContext.catname}`}
      pagedesc={`「${pageContext.catname}」カテゴリーの記事一覧です`}
      pagepath={location.pathname}

     />

    <section classNameName="content bloglist">
      <div className="container">
       <div className="space-2l"/>
         {pageContext.catname === "お知らせ" ?
           <>
             <SubTitle>お知らせ一覧</SubTitle>
               <div className="space-l"/>
                 {data.allContentfulWork.edges.map(({ node }) => (
          <NewsCard key={node.id} slug={node.slug}  dataTime={node.date}
            catname={node.category.name} title={node.title}  dateJP={node.dateJP} />
                 ))}
             </>
          : <>
             <SubTitle>CATEGORY: {pageContext.catname}</SubTitle>
    <div className="space-l"/>
   <div className="posts center">
          {data.allContentfulWork.edges.map(({ node }) => (
            <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date} content={node.content}
              catname={node.category.name} title={node.title} dateJP={node.dateJP} />

          ))}
             </div>
              </>
       }


        <Pagenation path="cat" pageContext={pageContext} originPath={pageContext.catslug} />
      </div>
    </section>

   </Layout>
 )
}
// skipは何軒めからという意味、limitは何軒表示するかという意味
export const query = graphql`
query($catid: String!,$skip: Int!) {
  allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: $skip
    limit: 5
     filter: {category:
    {id: {eq: $catid}}})
    {
    edges{
      node{
      title
      id
      content{
        content
      }
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
