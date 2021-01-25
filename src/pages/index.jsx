import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogCard from "../components/Blog/blogCard"

import { News,Post,Gallery,Featured,Content,SubTitle, Description,ImageText } from "../style/GlobalStyle"
import { Button } from "../components/Button"
import CardList from "../components/CardList/CardList"
import NewsCardList  from "../components/Blog/NewsCardList";
import FeatureList from "../components/FeatureList/FeatureList";
import { TabMenu } from "../components/index";

// import News from  "../components/Blog/news"

export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <SEO />
    <section className="hero">
      <figure>
        <Img fluid={data.hero.childImageSharp.fluid} alt="" style={{ height: "100%" }} />
      </figure>

        <ImageText>
          風を音に変える
        </ImageText>



      </section>
      <TabMenu/>
      <Featured>

      <Content>
        江戸風鈴とは
      </Content>
      <div className="center">
          <Description space>江戸風鈴は江戸時代から伝わる技術を受け継いで制作しているガラス製の風鈴です。<br /><br/>
         一つ一つ職人が気持ちを込めて作った風鈴は、ガラスならではの涼しげでリラックスできる軽やかな音と、直接描かれた絵柄で見る人を癒してくれるでしょう。
      <br /> <br />
          現在は篠原まるよし風鈴と、篠原風鈴本舗の二件のみしか江戸風鈴のみ製作を行なっておりません。
        </Description>
          <SubTitle>江戸風鈴の特徴</SubTitle>
          <div className="space-l" />
           <div className="space-l" />
          <div className="center">
                   <FeatureList data={data} />
          </div>



        <Button>詳しく見る</Button>
      </div>
    </Featured>
    <div className="space-l" />
    <div className="space-l" />
    {/* <News/> */}
    <section className="center">
      <SubTitle>篠原まるよし風鈴の仕事</SubTitle>
        <Description space>篠原まるよし風鈴では、風鈴本体となる玉の制作から、絵付けまでの工程を全て当店で行っております。そして風鈴の販売、また体験学習にも力を入れております。商品のご購入や体験学習はこちらからご覧ください。</Description>
        <CardList/>

    </section>
    <div className="space-l" />
    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        <Img fluid={data.berry.childImageSharp.fluid} alt="" style={{ height: "100%" }} />
      </figure>
    </section>
    <News >
      {/* <div className="space-l" />
      <div className="container">

        <SubTitle>お知らせ</SubTitle>
        <div className="posts">
          {data.allContentfulWork.edges.map(({ node }) => (
            <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
              catname={node.category.name} title={node.title} dateJP={node.dateJP} />
          ))}
          </div>


      </div> */}
         <SubTitle>お知らせ</SubTitle>
        <NewsCardList image={data}/>
      </News>

      <Gallery>
        <SubTitle>Gallery</SubTitle>

      </Gallery>


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
  gizagiza: file(relativePath: {eq: "gizagiza.png"}){
    childImageSharp {
      fluid(maxWidth: 320) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
}


  berry: file(relativePath: {eq: "berry.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

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
