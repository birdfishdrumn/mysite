import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import { SubTitle,Nav } from "../style/GlobalStyle";
import styled from "styled-components";
import { Product } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { CarouselSlider }  from "../components/index";


const ProductList = styled.div`

`



export default ({data,location}) => (
  <Layout>
    <SEO
      pagetitle="ESSENTIALSについて"
      pagedesc="食べ物の情報について発信しているサイトです"
      pagepath={location.pathname}
      pageimg={data.taiken.childImageSharp.original.src}
      pageimgw={data.taiken.childImageSharp.original.width}
      pageimgh={data.taiken.childImageSharp.original.height}
    />
<div className="eyecatch">
	<figure>
	   <Img fluid={data.taiken.childImageSharp.fluid} alt="製品情報"/>
    </figure>
</div>

    <article className="content center">
      <CarouselSlider img={data.komaru}/>
      <ProductList>
        {/* <Product img={data.komaru.childImageSharp.fluid} noBtn title="絵付け体験" description="風鈴の内側から絵を描いていただきます。初めてやる方は難しいですが、上手くかけてくると楽しいですよ！" /> */}
        <SubTitle noSpace>絵付け体験</SubTitle>
        <Nav>

          <li>料金</li>
          <p>1,650円</p>
          <li>体験内容</li>
           <p>篠原まるよし風鈴で用意した風鈴の中から絵を描いてただく体験です。デザインに関しては見本などもあるので、描きたい柄がない場合でもご安心ください。</p>
          <li>所要時間</li>
           <p>約30分〜90分</p>
          <li>持ち物</li>
            <p>特にありませんが、デザインなどを考えていただきますとスムーズに描けると思います。</p>
          </Nav>
        <Product img={data.earring.childImageSharp.fluid} title="ガラス拭き体験" noBtn description="" />
              <Nav>
          <li>料金</li>
          <p>2,200円</p>
          <li>体験内容</li>
           <p>篠原まるよし風鈴で用意した風鈴の中から絵を描いてただく体験です。デザインに関しては見本などもあるので、描きたい柄がない場合でもご安心ください。</p>
          <li>所要時間</li>
           <p>約45分〜120分</p>
          <li>持ち物</li>
            <p>特にありませんが、デザインなどを考えていただきますとスムーズに描けると思います。</p>
          </Nav>
        <Product img={data.poppen.childImageSharp.fluid} noBtn title="オンライン体験" description="" />
              <Nav>
          <li>料金</li>
          <p>1,650円</p>
          <li>体験内容</li>
           <p>篠原まるよし風鈴で用意した風鈴の中から絵を描いてただく体験です。デザインに関しては見本などもあるので、描きたい柄がない場合でもご安心ください。</p>
          <li>所要時間</li>
           <p>約30分〜90分</p>
          <li>持ち物</li>
            <p>特にありませんが、デザインなどを考えていただきますとスムーズに描けると思います。</p>
          </Nav>

        </ProductList>
</article>

</Layout>

)
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  taiken: file(relativePath: {eq: "taiken.jpg"}){
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
    komaru: file(relativePath: {eq: "jinbee3.jpg"}){
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
    earring: file(relativePath: {eq: "earring.jpg"}){
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
      poppen: file(relativePath: {eq: "poppen_kikyou.jpg"}){
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
