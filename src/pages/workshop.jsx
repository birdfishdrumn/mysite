import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql,Link} from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components";

import SEO from "../components/seo"
import Layout from "../components/layout"
import { FloatingAction,WorkshopList,COVID_19}  from "../components/index";



const ProductList = styled.div`

`



export default ({data,location}) => (
  <Layout>
    <SEO
      pagetitle="風鈴製作体験"
      pagedesc="こちらでは篠原まるよし風鈴の絵付け、ガラス吹き、リモート体験、団体や校外学習の体験について紹介いたします。。"
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
      <div className="space-l"/>
      <COVID_19 />
      <div className="space-xl"/>
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
      fluid(maxWidth: 200) {

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
