import React,{useEffect} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Product,Process } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { History } from "../components/PageComponents/index";
import {TwoColumn,SubTitle,Figure,Description,MinTitle} from "../style/GlobalStyle"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';



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
        <SubTitle><Trans>江戸風鈴とは</Trans></SubTitle>
        <Description data-aos="fade-up"  width="half">篠原まるよし風鈴では江戸風鈴の制作を行っており年間で12,000個ほど作ります。そうしてできた風鈴に絵を描いて販売、また体験学習に用います。</Description>
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
        <section className="center">
        <SubTitle><Trans>江戸風鈴ができるまで</Trans></SubTitle>
       <MinTitle><Trans>ガラス吹き</Trans></MinTitle>
        <div className="space-l"/>
        <Process data={data} />


        <SubTitle>動画で確認</SubTitle>
          <MinTitle>絵付け</MinTitle>

          <Process paint data={data} />
        </section>

        <SubTitle>江戸風鈴の歴史</SubTitle>
        <div className="space-xl"/>
        <History data={data}/>
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
    kikyou: file(relativePath: {eq: "kikyou.jpg"}){
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
      history: file(relativePath: {eq: "garasuhuki.jpg"}){
    childImageSharp {
      fluid(maxWidth: 800) {

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
