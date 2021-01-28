import React,{useEffect} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Product } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import {TwoColumn,SubTitle,Figure,Description,MinTitle} from "../style/GlobalStyle"

const AccessMap = styled.div`
 margin:0 auto;
 width:60%;
`

export default ({ data, location }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: 'DOMContentLoaded', once: true });

  }, [])
  return (
    <Layout>
      <SEO
        pagetitle="ESSENTIALSについて"
        pagedesc="食べ物の情報について発信しているサイトです"
        pagepath={location.pathname}
        pageimg={data.about.childImageSharp.original.src}
        pageimgw={data.about.childImageSharp.original.width}
        pageimgh={data.about.childImageSharp.original.height}
      />
      <div className="eyecatch">
        <figure>
          <Img fluid={data.about.childImageSharp.fluid} alt="製品情報" />
        </figure>
      </div>

      <article className="content center">
        <SubTitle>お店・家族の紹介</SubTitle>

        <div className="space-l"/>
        <TwoColumn>
          <div>
            <SubTitle noSpace>お店について</SubTitle>
            <Description>
              お店は佐竹商店街の中にあります。普段からお店の前には風鈴を飾っております。 一階は基本的には仕事場で作業中なので少し入り辛いと思いますが、風鈴の販売もやっておりますので、 是非お気軽にご来店下さい。<br/>またガラス吹き体験では一階奥の工房で最初にガラスを吹いていただきます。

二階は主に絵付け体験の会場となっております。
            </Description>
          </div>
          <div>
            <Figure>
              <Img fluid={data.shop.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
        </TwoColumn>
        <section className="center">
          <SubTitle>アクセス</SubTitle>
        <AccessMap>
            <Img fluid={data.map.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
          </AccessMap>

       <SubTitle>電車でお越しの方</SubTitle>
        </section>

      </article>

    </Layout>
  )
}
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  about: file(relativePath: {eq: "iro2.jpg"}){
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
    shop: file(relativePath: {eq: "shop.jpg"}){
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
    map: file(relativePath: {eq: "map.jpg"}){
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
      hikawa: file(relativePath: {eq: "hikawa.jpg"}){
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
