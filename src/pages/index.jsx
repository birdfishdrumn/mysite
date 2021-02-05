import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogCard from "../components/Blog/blogCard"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import { News,Post,Gallery,Featured,Content,SubTitle, Description,ImageText,ProductColumn,Figure,MinTitle } from "../style/GlobalStyle"
import { Button } from "../components/Button"
import CardList from "../components/CardList/CardList"
import NewsCardList  from "../components/UI/NewsCard/NewsCardList";
import FeatureList from "../components/FeatureList/FeatureList";
import { TabMenu,ProductCard ,Map,Pickup,TopPageContent} from "../components/index";
import styled from "styled-components";
// import News from  "../components/Blog/news"
const ProductList = styled.div`
 max-width:1040px;
 margin:0 auto;
 display:grid;
 grid-template-columns:1fr 1fr 1fr;
 @media(max-width:767px){
   width:100%;
    grid-template-columns:1fr;
 }
`


export default ({ data }) => {
  const { t } = useTranslation();
  console.log(t)
  console.log(data)
  return (
  <Layout>
      <SEO />

    <section className="hero">
      <figure>
        <Img fluid={data.hero.childImageSharp.fluid} alt="" style={{ height: "100%" }} />
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
          <Description width="half"><Trans>江戸風鈴は江戸時代から伝わる技術を受け継いで制作しているガラス製の風鈴です。</Trans><br /><br/>
         <Trans>一つ一つ職人が気持ちを込めて作った風鈴は、ガラスならではの涼しげでリラックスできる軽やかな音と、直接描かれた絵柄で見る人を癒してくれるでしょう。</Trans>
      <br /> <br />
          <Trans>現在は日本中で篠原まるよし風鈴と、篠原風鈴本舗の二件しか江戸風鈴の製作を行なっておりません。</Trans>
        </Description>
            <div className="space-xl" />

          <SubTitle hannari>良い音のひみつ</SubTitle>
          <div className="space-l" />
           <div className="space-l" />
          <div className="center">
                   <FeatureList data={data} />
          </div>
            <div className="space-l" />
          <Link to="/about"><Button>詳しく見る</Button></Link>
            <div className="space-l" />
      </div>
    </Featured>
    <div className="space-l" />
    <div className="space-l" />
      {/* <News/> */}
          <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        <Img fluid={data.berry.childImageSharp.fluid} alt="" style={{ height: "100%" }} />
      </figure>
      </section>
        <div className="space-l" />
    <section className="center">
      <SubTitle>篠原まるよし風鈴の仕事</SubTitle>
        <Description width="half">篠原まるよし風鈴では、風鈴本体となる玉の制作から、絵付けまでの工程を全て当店で行っております。そして風鈴の販売、また体験学習にも力を入れております。商品のご購入や体験学習はこちらからご覧ください。</Description>
          <div className="space-xl" />
       {/* <ProductList>

      <ProductCard  img={data.sudare.childImageSharp.fluid} title="商品の紹介" description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" link="/fuurin"/>
          <ProductCard img={data.kikyou.childImageSharp.fluid} title="風鈴制作体験" description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" link="/workshop" />
             <ProductCard  img={data.online.childImageSharp.fluid} title="オンラインショップ" description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" link="/fuurin"/>

        </ProductList> */}
<TopPageContent data={data}/>
    </section>
    <div className="space-l" />
      <section>
        <Pickup/>
   </section>
    <News >
   <div className="space-l" />
        <SubTitle>お知らせ</SubTitle>
         <div className="space-l" />
        <NewsCardList  image={data}/>
      </News>

      {/* <Gallery>
        <SubTitle>Gallery</SubTitle>

      </Gallery> */}
       <div className="space-l" />
      <section >
        <SubTitle>店舗情報</SubTitle>
          <div className="space-l" />
        <Map/>
      </section>
         <div className="space-l" />


  </Layout>
  )
}
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  hero: file(relativePath: {eq: "uniqlo_poster.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
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


  berry: file(relativePath: {eq: "kiriko_narabi_kumori.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

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
    online: file(relativePath: {eq: "iro.jpg"}){
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
