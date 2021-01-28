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
import {TwoColumn,SubTitle,Figure,Description} from "../style/GlobalStyle"




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

      <article className="content">
        <SubTitle>江戸風鈴とは</SubTitle>
        <Description data-aos="fade-up" space>篠原まるよし風鈴では江戸風鈴の制作を行っており年間で12,000個ほど作ります。そうしてできた風鈴に絵を描いて販売、また体験学習に用います。</Description>
        <div className="space-l"/>
        <TwoColumn>
          <div>
            <SubTitle  border noSpace>江戸風鈴とは</SubTitle>
          </div>
          <div>
            <Figure>
              <Img fluid={data.works.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
        </TwoColumn>
      <SubTitle>江戸風鈴ができるまで</SubTitle>
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
    works: file(relativePath: {eq: "kingyo_re.jpg"}){
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
    daruma: file(relativePath: {eq: "darumadaishi.jpg"}){
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
