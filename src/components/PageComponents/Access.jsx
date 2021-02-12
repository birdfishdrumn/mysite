import React from 'react'
import { TwoColumn, SubTitle, Description ,Figure,Nav} from "../../style/GlobalStyle";
import Img from "gatsby-image"
import styled from "styled-components"
import { accessData } from "./accessData"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import {Map} from "../index"
const AccessMap = styled.div`
 margin:0 auto;
 max-width:924px;
 @media(max-width:767px){
   width:85%;
 }
`

const Access = ({data}) => {
  return (
    <div>
  <section>
        <TwoColumn>
          <div>
            <SubTitle noSpace>お店について</SubTitle>
            <Description>
              <Trans>お店は佐竹商店街の中にあります。普段からお店の前には風鈴を飾っております。 一階は基本的には仕事場で作業中なので少し入り辛いと思いますが、風鈴の販売もやっておりますので、 是非お気軽にご来店下さい。</Trans>
              <br/><Trans>またガラス吹き体験では一階奥の工房で最初にガラスを吹いていただきます。二階は主に絵付け体験の会場となっております。</Trans>
            </Description>
          </div>
          <div>
            <Figure>
              <Img fluid={data.shop.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
          </TwoColumn>
          </section>
        <section className="center">
          <SubTitle>アクセス</SubTitle>
        <AccessMap>
            <Img fluid={data.map.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
          </AccessMap>

        <SubTitle>電車でお越しの方</SubTitle>
        <Nav small>
          {accessData.map((item) => (
            <>
              <li>{item.place}</li>
              <p>{item.description}</p>
              </>
          )) }
        </Nav>
         <SubTitle>バスでお越しの方</SubTitle>
           <Nav small>
          <li>都バス 系統・都０２(大塚ー錦糸町) 新御徒町駅前下車１分</li>
          <p>大塚駅　⇄　錦糸町駅(経由・春日駅・御徒町駅都バス )のバスにお乗り頂き、新御徒町前で下車してください。</p>
        </Nav>
        <SubTitle>車でお越しの方</SubTitle>
          <Nav small>
          <p>お店には駐車場がないので、申し訳ありませんが、お近くの白線などに駐車お願い致します。</p>
        </Nav>
      </section>
      <div className="space-l"/>
      <Map noBtn/>
    </div>
  )
}

export default Access
