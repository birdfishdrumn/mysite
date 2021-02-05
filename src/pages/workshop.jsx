import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql,Link} from "gatsby"
import Img from "gatsby-image"
import { SubTitle,Nav,ListColumn,Description,MinTitle} from "../style/GlobalStyle";
import styled from "styled-components";
import { Product } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { CarouselSlider,FloatingAction,WorkshopList}  from "../components/index";



const ProductList = styled.div`

`



export default ({data,location}) => (
  <Layout>
    <SEO
      pagetitle="ESSENTIALSについて"
      pagedesc="食べ物の情報について発信しているサイトです"
      pagepath={location.pathname}
      pageimg={data.taiken.childImageSharp.original.src}
      pageimgw={data.taiken.childImageSharp.original.width}
      pageimgh={data.taiken.childImageSharp.original.height}
    />
<div className="eyecatch">
	<figure>
	   <Img fluid={data.taiken.childImageSharp.fluid} alt="製品情報"/>
    </figure>
</div>

    <article className="content center">
      <WorkshopList data={data}/>
    </article>
      <FloatingAction title="予約する" reserve/>

</Layout>

)
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  taiken: file(relativePath: {eq: "taiken.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
    komaru: file(relativePath: {eq: "kingyo4.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
    earring: file(relativePath: {eq: "earring.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
      poppen: file(relativePath: {eq: "poppen_kikyou.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
}
`
