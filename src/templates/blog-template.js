import React from "react"
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faClock} from "@fortawesome/free-regular-svg-icons";

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
                       <article className="post" key={node.id}>
              <Link to={`/blog/post/${node.slug}`}>
                <figure class="eyecatch-box">
                  <Img fluid={node.image.fluid} alt={node.image.description} style={{ height: "100%" }} />
                        <p className="cat-chip">{node.category.name}</p>
                </figure>
     <aside>
            <time dataTime={node.date}><FontAwesomeIcon icon={faClock} />
            {node.dateJP}</time>
                  </aside>
                <h3>{node.title}</h3>
                </Link>
            </article>

          ))}


        </div>
        <ul className="pagenation">
          {!pageContext.isFirst && (
  <li className="prev">
              <Link to={
                pageContext.currentPage === 2
                  ? `/blog/`
                  : `/blog/${pageContext.currentPage - 1}/`
                }
                rel="prev">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    <span>前のページ</span>
              </Link>
            </li>
          )}
          {!pageContext.isLast && (
              <li className="next">
              <Link to={
                `/blog/${pageContext.currentPage + 1}/`
              }rel = "next" >
              <span>次のページ</span>
                 <FontAwesomeIcon icon={faChevronRight}/>
                </Link>
            </li>
)}

        </ul>
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
