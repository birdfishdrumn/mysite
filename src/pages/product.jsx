import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components";
import { Product } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { SubTitle,Description } from "../style/GlobalStyle";
import { Button } from "../components/Button";
const ProductList = styled.div`

`



export default ({data,location}) => (
  <Layout>
    <SEO
      pagetitle="ESSENTIALSについて"
      pagedesc="食べ物の情報について発信しているサイトです"
      pagepath={location.pathname}
      pageimg={data.product.childImageSharp.original.src}
      pageimgw={data.product.childImageSharp.original.width}
      pageimgh={data.product.childImageSharp.original.height}
    />
<div>
	<figure>
	   <Img fluid={data.product.childImageSharp.fluid} alt="製品情報"/>
    </figure>
    </div>
    <div className="space-l" />
    <div className="center">

    <SubTitle>商品の紹介</SubTitle>
      <Description space>篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。<br/>またこちらのオンラインショップでは各商品もご購入可能です。
    </Description>
      <Button>オンラインショップ</Button>
    </div>
     <div className="space-l" />
    <article className="content">
      <ProductList>

      <Product img={data.komaru.childImageSharp.fluid} title="風鈴" description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" link="/fuurin"/>
      <Product img={data.earring.childImageSharp.fluid} title="イヤリング" description=""/>
      <Product img={data.poppen.childImageSharp.fluid} title="ポッペン" description=""/>
        <Product img={data.product.childImageSharp.fluid} title="釣り台" description=""/>
        </ProductList>
</article>

</Layout>

)
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  product: file(relativePath: {eq: "ayame4.jpg"}){
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
   onrain: file(relativePath: {eq: "kiriko_narabi_kumori.jpg"}){
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
