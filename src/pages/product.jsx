import React,{useEffect} from "react"
// import {Header} from "../components/Header/Header"
import {graphql,Link} from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import styled from "styled-components";
import { Product } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { SubTitle,Description,ProductColumn,Figure,TextFlex} from "../style/GlobalStyle";
import { Button } from "../components/Button";


const ProductImg = styled(Img)`
    width:90%;
    margin:0 auto;
`
const TextButton = styled.div`
 text-align:right;
 border:1px solid #ccc;
 padding:10px 0;
height:90px;
 cursor: pointer;
 transition:0.3s;
 margin:auto auto 0 0;
 &:hover:not(:disabled){
  color:white;
  background:black;
  border:1px solid rgba(0,0,0,0)
}
`

export default ({ data, location }) => {

    return (
    < Layout >
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
        <article className="content">

    <div className="center">

    <SubTitle>商品の紹介</SubTitle>
      <Description  width="half">篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。<br/>またこちらのオンラインショップでは各商品もご購入可能です。
    </Description>
            <Button>オンラインショップ</Button>
                  <div className="space-l" />
    </div>
          <Product data={data.fuurin} description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" title="江戸風鈴" destination="/fuurin" num="0" />
             <div className="space-l" />
          <Product data={data.earring} description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" title="イヤリング" destination="/fuurin" num="1" reverse="true" />
             <div className="space-l" />
          <Product data={data.earring} description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" title="ポッペン" destination="/fuurin" num="2" />
          <div className="space-l" />
          <Product data={data.earring} description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" title="体験キット" destination="/fuurin" num="3" reverse="true" />
           <div className="space-l" />
           <Product data={data.earring} description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。" title="吊り台" destination="/fuurin" num="4" />

            <div className="space-l" />
</article>

</Layout >
    )
}
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

    fuurin: file(relativePath: {eq: "kingyo4.jpg"}){
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
    earring: file(relativePath: {eq: "earring.jpg"}){
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
      poppen: file(relativePath: {eq: "poppen_kikyou.jpg"}){
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
}
`
