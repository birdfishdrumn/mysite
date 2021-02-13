import React,{useEffect} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Aos from "aos";
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import { News,Post,Gallery,Featured,Content,SubTitle, Description,ImageText} from "../style/GlobalStyle"
import { Button } from "../components/Button/styles";
import NewsCardList  from "../components/UI/NewsCard/NewsCardList";
import FeatureList from "../components/FeatureList/FeatureList";
import { TabMenu,ProductCard ,Map,Pickup,TopPageContent,COVID_19} from "../components/index";
import styled from "styled-components";
import Image from "../components/image";
import {Parallax} from "react-parallax"



export default ({ data }) => {
  const { t } = useTranslation();
  // console.log(t)
  console.log(data)
    useEffect(() => {
    Aos.init({ duration: 1200, startEvent: 'DOMContentLoaded', once: true });

  }, [])
  return (
  <Layout>
      <SEO />

    <section className="hero">
      <figure>
        <Image filename="uniqlo_poster.jpg" alt=""style={{ height: "100%" }} />
      </figure>

        <ImageText>
        <Trans>風を音に</Trans>
        </ImageText>
      </section>

      <Featured>
   <div >



      {/* <Sironuki src={Siro} /> */}

    </div>
        <Content>
       <Trans>江戸風鈴</Trans>
      </Content>
      <div className="center">
          <Description  data-aos="fade-up" width="half"><Trans>江戸風鈴は江戸時代から伝わる技術を受け継いで制作しているガラス製の風鈴です。</Trans><br /><br/>
         <Trans>一つ一つ職人が気持ちを込めて作った風鈴は、ガラスならではの涼しげでリラックスできる軽やかな音と、直接描かれた絵柄で見る人を癒してくれるでしょう。</Trans>
      <br /> <br />
          <Trans>現在は日本中で篠原まるよし風鈴と、篠原風鈴本舗の二件しか江戸風鈴の製作を行なっておりません。</Trans>
          </Description>

          <div className="space-xl" />
          <COVID_19/>

          <div className="space-xl" />
          <SubTitle  data-aos="fade-up" hannari><Trans>良い音のひみつ</Trans></SubTitle>
          <div className="space-l" />
           <div className="space-l" />
          <div className="center">
                   <FeatureList data={data} />
          </div>
            <div className="space-l" />
          <Link to="/about"><Button><Trans>詳しく見る</Trans></Button></Link>
            <div className="space-l" />
      </div>
    </Featured>
    <div className="space-l" />
    <div className="space-l" />
      {/* <News/> */}
          <section className="photo">

      <figure>
          {/* <Img fluid={data.narabi.childImageSharp.fluid} alt="" style={{ height: "100%" }} /> */}
          <Parallax bgImage={data.narabi.publicURL} alt="" strong={500} style={{ height: "100%" }}/>
      </figure>
      </section>
        <div className="space-l" />
    <section className="center">
      <SubTitle><Trans>気持ちを込める</Trans></SubTitle>
        <Description width="half"><Trans>篠原まるよし風鈴では風鈴本体となる玉の制作から、絵付けまでの工程を全て当店で行っております。そして風鈴の販売、体験学習にも力を入れております。商品のご購入や体験学習はこちらからご覧ください。</Trans></Description>
          <div className="space-xl" />

<TopPageContent data={data}/>
    </section>
    <div className="space-l" />
      <section>
        <Pickup/>
   </section>
    <News >
   <div className="space-l" />
        <SubTitle><Trans>お知らせ</Trans></SubTitle>
         <div className="space-l" />
        <NewsCardList  image={data}/>
      </News>

      {/* <Gallery>
        <SubTitle>Gallery</SubTitle>

      </Gallery> */}
       <div className="space-l" />
      <section >
        <SubTitle><Trans>店舗情報</Trans></SubTitle>
          <div className="space-l" />
        <Map/>
      </section>
         <div className="space-xl" />


  </Layout>
  )
}
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {

  kikyou: file(relativePath: {eq: "kikyou.jpg"}){
    childImageSharp {
      fluid(maxWidth: 320) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  gizagiza: file(relativePath: {eq: "kirikuchi_square.jpg"}){
    childImageSharp {
      fluid(maxWidth: 320) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
}


  narabi: file(relativePath: {eq: "Introduce/huurin_narabi.jpg"}){
    publicURL
    childImageSharp {
      fluid(maxWidth: 800) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
    sudare: file(relativePath: {eq: "sudare_fuurin.jpg"}){
    childImageSharp {
      fluid(maxWidth: 320) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
    online: file(relativePath: {eq: "Introduce/onlineshop_top.jpg"}){
    childImageSharp {
      fluid(maxWidth: 320) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
      shouhin: file(relativePath: {eq: "Introduce/shouhin_top.jpg"}){
    childImageSharp {
      fluid(maxWidth: 320) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  allContentfulWork(
    sort: {fields: date,order: DESC}
    skip: 0
    limit: 4
    ){
    edges{
      node{
      title
      category{
        name
      }
      id
      slug
      image{
        fluid(maxWidth: 573){
          ...GatsbyContentfulFluid_withWebp
        }
          description
      }
      }

    }
  }
}
`
