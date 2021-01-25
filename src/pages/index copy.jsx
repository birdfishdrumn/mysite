import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogCard from "../components/Blog/blogCard"
import { Title, Content, TwoColumn } from "./style"
import { SubTitle, Description } from "../style/GlobalStyle"
import { Button } from "../components/Button"
import CardList from "../components/CardList/CardList"
// import News from  "../components/Blog/news"
export default ({data}) => (


  <Layout>
    <SEO/>
    <section className="hero">
      <figure>
        <Img fluid={data.hero.childImageSharp.fluid} alt="" style={{height: "100%"}}/>
      </figure>
      <div className="catch">
        <Title>
           風を音に変える
        </Title>

      </div>

    </section>
    <section>
      <Content>
        江戸風鈴とは
      </Content>
      <TwoColumn>
        <div>
          <Img fluid={data.kikyou.childImageSharp.fluid} />
        </div>
        <div>
          <Title>江戸時代から受け継がれてきた技術</Title>
          <Description>型を使わず空中で形を整える「宙吹き」
          ガラスのツヤを活かすため、絵は風鈴の「内側に彩色」
鳴り口の部分にガラスが擦れた時、優しい音色がなるように「ギザギザの鳴り口」</Description>
          <Button className="center">詳しく見る</Button>
        </div>
      </TwoColumn>
    </section>
    <div className="space-l" />
     <div className="space-l"/>
    {/* <News/> */}
    <section>
      <SubTitle>篠原まるよし風鈴の仕事</SubTitle>
      <Description space>篠原まるよし風鈴では、風鈴本体となる玉の制作から、絵付けまでの工程を全て当店で行っております。そして風鈴の販売、また体験学習にも力を入れております。商品のご購入や体験学習はこちらからご覧ください。</Description>
      <CardList/>
    </section>
        <div className="space-l"/>
    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
<Img fluid = {data.berry.childImageSharp.fluid} alt=""  style={{height: "100%"}}/>
      </figure>
    </section>
    <section>
    <div className="container">
        <SubTitle>お知らせ</SubTitle>
 <div className="posts">
        {data.allContentfulWork.edges.map(({ node }) => (
          <BlogCard key={node.id} slug={node.slug} fluid={node.image.fluid} alt={node.image.description} dataTime={node.date}
            catname={node.category.name} title={node.title} dateJP={node.dateJP} />
        ))}
</div>

    </div>
</section>

</Layout>

)
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
  grain: file(relativePath: {eq: "grain.jpg"}){
    childImageSharp {
      fluid(maxWidth: 320) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
}

  beverage: file(relativePath: {eq: "beverage.jpg"}){
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
