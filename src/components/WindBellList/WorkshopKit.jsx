import React  from 'react'
import {graphql,useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import { IntroduceCircle,Process } from "../index";
import styled from "styled-components"
import { SubTitle, Description,GridList,ItemA,ItemB,ItemC,GridContainer,MinTitle} from "../../style/GlobalStyle";
import { Button } from "../../components/Button";
import Image from "../image"
import { WorkshopKitFlow } from "./TsuridaiData";




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
         こちらがあれば筆洗いと紙を用意して、すぐに江戸風鈴の絵付け体験を楽しむことができます。
    </Description>
      </section>
      <div className="space-m"/>
      <section>
        <GridContainer style={{margin:"0 auto"}}>
      <ItemA><Image filename="taiken_kit_contents.jpg"/></ItemA>
       <ItemB><Image filename="fuurin_tansaku.jpg"/></ItemB>
        <ItemC><Image filename="brush_paint.jpg"/></ItemC>
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
      <section>
        <SubTitle hannari>絵の描き方</SubTitle>
        <Description>申し訳ありません。ただいま準備中です。</Description>
      </section>
         <section>
        <SubTitle hannari>短冊の付け方</SubTitle>
                <Description>申し訳ありません。ただいま準備中です。</Description>
      </section>
    <div className="space-l" />
    </div>
  )
}

export default WorkshopKit
