import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"

import { WorkshopTab ,FloatingAction,Reserve} from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"

import Image from "../components/image"


export default ({ data, location }) => {

    return (
  <Layout>
    <SEO
      pagetitle="風鈴製作体験の内容"
      pagedesc="ガラス吹き、絵付け、リモート、団体の体験について詳しく紹介いたします。"
      pagepath={location.pathname}

    />
   <section className="hero">
	<figure>
	   <Image filename="workshopPage_top.jpg" style={{height:"100%"}} alt="製品情報"/>
    </figure>
</section>
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
