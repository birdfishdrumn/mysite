import React,{useEffect,useState} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Aos from "aos";
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import { News,Gallery,Featured,Content,SubTitle, Description,ImageText} from "../style/GlobalStyle"
import { Button } from "../components/Button/styles";
import NewsCardList  from "../components/UI/NewsCard/NewsCardList";
import FeatureList from "../components/FeatureList/FeatureList";
import {  Map,Pickup,TopPageContent,COVID_19,Instagram} from "../components/index";

import Image from "../components/image";
import {Parallax} from "react-parallax"
import styled from "styled-components";

const ParallaxText = styled.div`
 /* background: #fff; */
 left:50%;
 top:50%;
 position:absolute;
 padding:20px;
width:80%;
 transform:translate(-50%,-50%);
 @media(min-width:768px){
   width:40%;
 }
`

const ParallaxContainer = styled.div`
@media(max-width:767px){
  height:400px;
}
height:400px;
`


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
        <Image filename="uniqlo_poster.jpg" alt="" style={{ height: "100%" }} />
      </figure>

        <ImageText>
        <Trans>売り声もなくて買い手の数あるは、<br/>       音にしられる風鈴の徳</Trans>
        </ImageText>
      </section>

      <Featured>
   <div >



      {/* <Sironuki src={Siro} /> */}

    </div>
        <Content>
       <Trans>風を音に変える</Trans>
      </Content>
      <div className="center">
          <Description large left data-aos="fade-up" width="half"><Trans>私たち篠原まるよし風鈴では家族で江戸時代から伝わる技術を受け継いで江戸風鈴を製作しています。</Trans><br /><br /><br />

         <Trans>一つ一つ職人が気持ちを込めて作った風鈴は、ガラスならではの涼しげでリラックスできる軽やかな音と優しい絵柄で見る人を癒してくれるでしょう。暑い夏にゆったりしながら、そっと風鈴の音に耳を傾けてみませんか？</Trans>
      <br /> <br /> <br />
          <Trans>江戸風鈴は商標登録されており、現在は日本中で二件しか江戸風鈴の製作を行なっておりません。</Trans>
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
    <div className="space-xl" />

      {/* <News/> */}
          <section className="photo">

      <figure>
          {/* <Img fluid={data.narabi.childImageSharp.fluid} alt="" style={{ height: "100%" }} /> */}
          <Parallax bgImage={data.narabi.publicURL} strength={100} alt="" style={{ height: "100%" }}>
            <ParallaxContainer>
              <ParallaxText>
                <SubTitle white shadow><Trans>気持ちを込める</Trans></SubTitle>
                <Description shadow large left color="white" >
                  <Trans>江戸風鈴はガラスを溶かして風鈴の玉を作るところから絵付けまで、全て職人の手作業で製作されています。江戸風鈴を手にとっていただいた方々に喜んでいただけるよう、私たちは一つ一つの風鈴に「気もちを込める」という事を大事にして風鈴を製作しております。</Trans>

                </Description>
              </ParallaxText>
            </ParallaxContainer>
            </Parallax>
      </figure>
      </section>
        <div className="space-xl" />
    <section className="center">
      <SubTitle><Trans>私たちの仕事</Trans></SubTitle>
        {/* <Description left width="half" bold><Trans>篠原まるよし風鈴では風鈴本体となる玉の制作から、絵付けまでの工程を全て当店で行っております。そして風鈴の販売、体験学習にも力を入れております。商品のご購入や体験学習、またオンラインショップもありますのでこちらからご覧ください。</Trans></Description> */}
          <div className="space-l" />

<TopPageContent data={data}/>
    </section>
    <div className="space-xl" />
      <section>
        <Pickup/>
   </section>
    <News >
   <div className="space-xl" />
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
         <div className="space-l" />
      <section>
        <SubTitle><Trans>Instagram</Trans></SubTitle>
        <Description left width="half">
          <Trans>instagramやtwitterなどで江戸風鈴の情報も発信しておりますのでよろしければフォローお願い致します。</Trans>
        </Description>
                <div className="space-l" />
        <Instagram/>
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


  narabi: file(relativePath: {eq: "Introduce/huurin_etsuke_overlay.jpg"}){
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
