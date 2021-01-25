import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components";
import { Product } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"

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

    <article className="content">
      <ProductList>
      <Product img={data.komaru.childImageSharp.fluid} title="風鈴" description="風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。"/>
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
