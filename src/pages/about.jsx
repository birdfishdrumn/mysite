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
import Image from "../components/image";

const Youtube = styled.iframe`
width:560px;
height:310px;
@media(max-width:767px){
  width:98%;
}
`


export default ({ data, location }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: 'DOMContentLoaded', once: true });

  }, [])
  return (
    <Layout>
      <SEO
        pagetitle="江戸風鈴とは"
        pagedesc="江戸風鈴の特徴、ガラスの玉が作られる流れ、絵付けの流れ、また江戸風鈴の歴史について紹介いたします。"
        pagepath={location.pathname}
        pageimg={data.about.childImageSharp.original.src}
        pageimgw={data.about.childImageSharp.original.width}
        pageimgh={data.about.childImageSharp.original.height}
      />
      <section className="hero">
        <figure>
          <Img fluid={data.about.childImageSharp.fluid}  style={{ height: "100%" }} alt="製品情報" />
        </figure>
      </section>

      <article className="content">
        <SubTitle><Trans>江戸風鈴のこと</Trans></SubTitle>

        <div className="space-l"/>
        <TwoColumn>
          <div>
            <SubTitle border noSpace>江戸風鈴とは</SubTitle>
            <Description left><br/>江戸風鈴は江戸時代から伝わる技術を受け継いで制作しているガラス製の風鈴です。<br /><br />
              <br />
              型を使わずに宙吹きで作られ、絵は全て職人の手によって一つ一つ彩色されています。柄も明るい夏にぴったりの金魚や花火、可愛いじんべえ鮫や招き猫など多くの種類のものがあり,一つ一つ縁起の良い意味があります。

            <br />   <br /> <br />

              短冊のデザインは上が赤、下が緑の「天地ぼかし」になっており、太陽に照らされて地上の生命が繁栄するという摂理を表しています。



            </Description>
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
          <Youtube src="https://www.youtube.com/embed/yYWowTXguP0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Youtube>
          <div className="space-xl"/>

          <MinTitle>絵付け</MinTitle>

          <Process paint data={data} />
            <SubTitle>動画で確認</SubTitle>
          <Youtube src="https://www.youtube.com/embed/LbyTq_nvdBg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Youtube>
        </section>
          <div className="space-xl"/>
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
  about: file(relativePath: {eq: "Introduce/glass_plane_top.jpg"}){
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
    kikyou: file(relativePath: {eq: "kikyou.jpg"}){
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
     makitori: file(relativePath: {eq: "process/makitori.jpg"}){
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
     kuchidama: file(relativePath: {eq: "process/kuchidama.jpg"}){
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
