import React from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {ProductGrid} from "../components/index"
import styled from "styled-components";
import { Product,WindBellCard } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { SubTitle, Description,GridList } from "../style/GlobalStyle";
import { Button } from "../components/Button";


export default ({ data, location }) => {
  console.log(data)
    return (
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
        <Img fluid={data.product.childImageSharp.fluid} alt="製品情報" />
      </figure>
    </div>
    <div className="space-l" />
    <section className="center">
      <SubTitle>小丸型風鈴</SubTitle>
      <Description width="half">篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。<br />またこちらのオンラインショップでは各商品もご購入可能です。
    </Description>
          <SubTitle small>金運上昇の柄</SubTitle>
          <div className="space-l"/>
          <GridList>
          {data.allProducts.edges.map(edge => (
            <WindBellCard
              windBellImage={edge.node.localImage.childImageSharp.fluid}
              name={edge.node.name}
              description={edge.node.description}
            />
          ))}
            </GridList>
      <SubTitle>新子丸、釣鐘型風鈴</SubTitle>
      <SubTitle>風琴</SubTitle>
    </section>
    <div className="space-l" />

  </Layout>
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
   allProducts {
    edges {
      node {
        name
        description
         localImage {
          childImageSharp{
            fluid(maxWidth:220){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        }
      }
    }

}
`
