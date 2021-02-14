import React,{useState,useCallback} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {ProductGrid} from "../components/index"
import styled from "styled-components";
import { Product,WindBellCard,WorkshopTab ,FloatingAction,Reserve} from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem} from "../style/GlobalStyle";

import { AchievementFilter,MoneyLuckFilter,DiseaseFree,AmuletFilter,SeasonFlower } from "../components/WindBellList/index";

export default ({ data, location }) => {

    return (
  <Layout>
    <SEO
      pagetitle="風鈴製作体験の内容"
      pagedesc="ガラス吹き、絵付け、リモート、団体の体験について詳しく紹介いたします。"
      pagepath={location.pathname}
      pageimg={data.product.childImageSharp.original.src}
      pageimgw={data.product.childImageSharp.original.width}
      pageimgh={data.product.childImageSharp.original.height}
    />
    <div>
      <figure>
        <Img fluid={data.product.childImageSharp.fluid} alt="製品情報" />
      </figure>
        </div>
        <WorkshopTab num={location.state && location.state.number}/>
        <div className="space-l" />

        <Reserve />
        <div className="space-xl" />
    <FloatingAction reserve title="ご予約はこちら"/>
  </Layout>
    )
}

// (filter:{category: {eq:"目標達成" }})
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  product: file(relativePath: {eq: "ayame4.jpg"}){
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
   allProducts
   {
    edges {

      node {
        name
        id
        category
        description
         localImage {
          childImageSharp{
            fluid(maxWidth:300){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        }
      }
    }

}
`
