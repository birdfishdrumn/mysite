import React,{useState,useCallback} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {ProductGrid} from "../components/index"
import styled from "styled-components";
import { Product,WindBellCard,ProductTab ,FloatingAction} from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem} from "../style/GlobalStyle";
import { Button } from "../components/Button";
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";
import { AchievementFilter,MoneyLuckFilter,DiseaseFree,AmuletFilter,SeasonFlower } from "../components/WindBellList/index";

export default ({ data, location }) => {
  //   const [change,setChange] = useState(false)
  // const handleOn = useCallback(()=>{
  //     setChange(true)
  // })
  //   const handleOff = useCallback(()=>{
  //     setChange(false)
  //   })

  console.log(location)
    return (
  <Layout>
    <SEO
      pagetitle="まるよし風鈴の商品紹介"
      pagedesc="こちらではまるよし風鈴の製作している商品を紹介いたします。"
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
        <ProductTab num={location.state && location.state.number} location={location}/>
    <div className="space-l" />

    <FloatingAction online title="オンラインショップ"/>
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
