import React  from 'react'
import {graphql,useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import { IntroduceCircle,Process } from "../index";
import styled from "styled-components"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem, MinTitle} from "../../style/GlobalStyle";
import { Button } from "../../components/Button";
import Image from "../image"
import { WorkshopKitFlow } from "./TsuridaiData";

const GridContainer = styled.div`
  display: grid;
  padding: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 1fr;
    width:700px;

    margin:0 auto;
    @media(max-width:768px){
      width:100%;
    }

`

const ItemA = styled.div`

  padding: 5px;
  font-size: 30px;
  text-align: center;
    grid-row: 1/3;
    grid-column: 1/2;
    /* background: #f88; */
`

const ItemB = styled.div`

  padding: 5px;
  font-size: 30px;
  text-align: center;
   grid-row: 1/3;
    grid-column: 2/3;
    /* background: #8f8; */
`

const ItemC = styled.div`

  padding: 5px;
  font-size: 30px;
  text-align: center;
     grid-row: 2/3;
    grid-column: 2/3;
    /* background: #88f; */
`

const ImageContainer = styled.div`
 width: 70% !important;
 margin: 30px auto;
 @media(max-width:767px){
   width:90% !important;
 }
`

const  WorkshopKit= ({}) => {
    const data = useStaticQuery(graphql`
query kitQuery{
    kikyou: file(relativePath: {eq: "iro2.jpg"}){
    childImageSharp {
      fluid(maxWidth: 400) {

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
   `)
  return (

    <div>
        <section className="center">
      <SubTitle hannari>体験キット</SubTitle>
        <Description left width="half">自宅でも江戸風鈴の体験ができるように、江戸風鈴の体験キットをご用意いたしました。
         こちらがあればお簡単な筆洗いを用意する以外がすぐに江戸風鈴の絵付け体験を楽しむことができます。
    </Description>
      </section>
      <section>
        <GridContainer>
      <ItemA><Image filename="taiken_kit_contents.jpg"/></ItemA>
       <ItemB><Img fluid={data.kikyou.childImageSharp.fluid}/></ItemB>
        <ItemC><Img fluid={data.kikyou.childImageSharp.fluid}/></ItemC>
    </GridContainer>
      </section>
      <section className="center">
        <SubTitle hannari>体験の始め方</SubTitle>

        <div className="space-l" />
        <MinTitle>用意する物</MinTitle>
          <div className="space-l" />
        <IntroduceCircle data={data} />

      </section>
      <section>
          <div className="space-l" />
        <MinTitle>体験の流れ</MinTitle>
          <div className="space-l" />
        <GridList>
          {WorkshopKitFlow.map(item => (
            <div>
            <ImageContainer>
                <Image filename={item.image} style={{
              borderRadius: "50%",
            }} />
              </ImageContainer>
              <MinTitle>{item.title}</MinTitle>
              <Description width="more">{item.description}</Description>
              </div>
         ))}
        </GridList>
      </section>
    <div className="space-l" />
    </div>
  )
}

export default WorkshopKit
