import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"

import {ProductTab ,FloatingAction} from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"

export default ({ data, location }) => {
  //   const [change,setChange] = useState(false)
  // const handleOn = useCallback(()=>{
  //     setChange(true)
  // })
  //   const handleOff = useCallback(()=>{
  //     setChange(false)
  //   })


    return (
  <Layout>
    <SEO
      pagetitle="まるよし風鈴の商品紹介"
      pagedesc="こちらではより詳しくまるよし風鈴の製品である、金魚やアマビエ様など様々な江戸風鈴、家でも絵付け体験ができる体験キット、風鈴のイヤリングやピアス、ポッペン、などについてご紹介いたします。"
      pagepath={location.pathname}

    />

           <section className="hero">
      <figure>
        <Image filename="syouhin_top.jpg" alt="製品情報"  style={{ height: "100%" }}/>
            </figure>
            </section>

        <ProductTab data={data.allProducts} num={location.state && location.state.number} location={location}/>
    <div className="space-l" />

    <FloatingAction online title="オンラインショップ"/>
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
