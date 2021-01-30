import React,{useState} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {ProductGrid} from "../components/index"
import styled from "styled-components";
import { Product,WindBellCard } from "../components/index";
import SEO from "../components/seo"
import Layout from "../components/layout"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem} from "../style/GlobalStyle";
import { Button } from "../components/Button";
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";


export default ({ data, location }) => {
    const [change,setChange] = useState(false)
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
          <Description space>篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。
      <br/>またこちらのオンラインショップでは各商品もご購入可能です。
    </Description>
          <FlexNav>
            <Tooltip title="グリッド" interactive>
              <IconButton  onClick={() => setChange(false)} >
                <li><GridOnIcon fontSize="large"/></li>
                </IconButton>
            </Tooltip>
            <Tooltip title="短冊まで" interactive>
               <IconButton  onClick={() => setChange(true)} >
                <li ><ViewColumnIcon fontSize="large" /></li>
                </IconButton>
          </Tooltip>
          </FlexNav>


          <SubTitle small>金運上昇の柄</SubTitle>
          <div className="space-l" />
           {/* <div className={change ? styles.p_grid__scroll : styles.p_grid__row }></div> */}
          <GridList change={change}>
            {data.allProducts.edges.map(edge => (
            <ScrollItem>
                <WindBellCard
              key={edge.node.id}
              windBellImage={edge.node.localImage.childImageSharp.fluid}
              name={edge.node.name}
              description={edge.node.description}
              change={change}
              src={edge.node.allImage}
            />
                </ScrollItem>
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
        id
        description
        allImage
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
