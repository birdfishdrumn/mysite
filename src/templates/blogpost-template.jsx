import React from "react"
import { graphql,Link } from 'gatsby';
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight, faTags } from "@fortawesome/free-solid-svg-icons";
// import BlogCard from "../components/Blog/blogCard"
import RandomPosts from "../components/Blog/randomPosts"
import SharingButtons from "../components/UI/shareButton"
import marked from "marked";

// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';


// 個別記事ページ
export default ({ data, pageContext, location }) => {
// マークダウンに変換するための処理
  const source = data.contentfulWork.content.content.replace(/\n/gi, '\nreplaced_text ');

marked.setOptions({
        gfm: true,
        breaks: true,
});

  const parsedSouce = marked(source).replace(/replaced_text/g, '');

  return (
    <Layout>
      <SEO pagetitle={data.contentfulWork.title}
        pagedesc={data.contentfulWork.content.content.slice(0, 70) + "..."}
        // pagedesc={`${documentToPlainTextString(
        //       data.contentfulWork.content.content
        //     )}…`}
        pagepath={location.pathname}
        blogimg={`https:${data.contentfulWork.image.file.url}`}
        pageimgw={data.contentfulWork.image.file.details.image.width}
        pageimgh={data.contentfulWork.image.file.details.image.height}

      />
      <div className="eyecatch">
        <figure>
          <Img fluid={data.glass_plane.childImageSharp.fluid} alt="" />
        </figure>
      </div>

      <article className="content">
        <div className="container">
          <h1 className="bar">{data.contentfulWork.title}</h1>

          <aside className="info">
            <time dataTime={data.contentfulWork.date}><FontAwesomeIcon icon={faClock} />
              {data.contentfulWork.dateJP}</time>
            {/* カテゴリーの表示 */}
            <div className="cat">
              <FontAwesomeIcon icon={faFolderOpen} />
              <ul>
                <Link to={`/cat/${data.contentfulWork.category.slug}/`}>
                  <li className={data.contentfulWork.category.slug}>{data.contentfulWork.category.name}</li>
                </Link>
              </ul>
            </div>
          </aside>

          <div className="postbody">
            <p>
                      <div className="body-text" dangerouslySetInnerHTML={{ __html: marked(parsedSouce) }} />
              {/* {data.contentfulWork.content.content} */}
            </p>
          </div>
          <div className="tag">
            {/* タグ */}
            <ul>
              {data.contentfulWork.tags.map(tag => (
                <>
                  <FontAwesomeIcon icon={faTags} /><li className={tag.slug} key={tag.id}><Link to={`/tag/${tag.slug}/`}>{tag.name}</Link></li></>
              ))}

            </ul>
          </div>
      <SharingButtons
        title={data.contentfulWork.title}
        url={`${location.pathname}`}
      />

          {/*  ページネーションの設定 */}
          <ul className="postlink">
            {pageContext.next && (
              <li className="prev">
                <Link to={`/blog/post/${pageContext.next.slug}`} rel="prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>{pageContext.next.title}</span>
                </Link>
              </li>
            )}
            {pageContext.previous && (
              <li className="next">
                <Link to={`/blog/post/${pageContext.previous.slug}`} rel="next">

                  <span>{pageContext.previous.title}</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </li>
            )}
          </ul>
          {/*  ページネーションの設定 */}

          {/* タグに関連する関連記事の取得 */}
          <div className="space-l" />
          {/* <h2 className="bar center">
            Related Post

          <RandomPosts a_number={4} id ={pageContext.id}/>
          {/* 関連記事の取得 */}
        </div>
      </article>

    </Layout>
  )
}
export const query = graphql`
  query($id: String!, $tagid: String!){
        glass_plane: file(relativePath: { eq: "glass_plane.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        original {
          src
          height
          width
        }
      }
    }
     allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: 0
    limit: 4
       filter: {tags:{
      elemMatch:{id: {eq: $tagid}}}})
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
  contentfulWork(id: {eq: $id}){
    title
    dateJP:date(formatString: "YYYY年MM月DD日")
    date
    id
    category {
      name
      slug
    }
   tags{
      name
      slug
      id
    }
        content{
      content
    }
        image{
      fluid(maxWidth: 1862){
        ...GatsbyContentfulFluid_withWebp
      }
      description
      file{
        details{
          image{
            width
            height
          }

        }
        url
      }
    }
  }
}
`