import React from 'react'
import { TwoColumn, SubTitle, Description ,Figure,Nav} from "../../style/GlobalStyle";
import Img from "gatsby-image"

import styled from "styled-components"
import { accessData } from "./accessData"
import {Trans} from 'gatsby-plugin-react-i18next';

import ShopImg from "../../images/shop.jpg"
const AccessMap = styled.div`
 margin:0 auto;
 max-width:924px;
 @media(max-width:767px){
   width:85%;
 }
`
const List = styled.ul`
 margin:0 auto;
 max-width:700px;
 @media(max-width:700px){
   width:100%;
   /* padding:0 10px; */
 }

`
const ListItem = styled.li`
justify-content:center;
padding:20px 5px;
display:flex;
border-bottom:solid 1px #eee;
>p{
   font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
   font-size:1rem;
   margin:0 20px;
}
>p:first-child{

 text-align:left;
 flex-basis: 40%;
}
>p:last-child{
 flex-basis: 60%;
  text-align:left;
  flex-flow:wrap;
}
`



const Access = ({data}) => {
  return (
    <div >
      <section>
        <div className="space-m"/>
        <TwoColumn>
          <div>
            <SubTitle noSpace><Trans>お店について</Trans></SubTitle>
            <Description left>
              <Trans>お店は佐竹商店街の中にあります。普段からお店の前には風鈴を飾っております。 一階は基本的には仕事場で作業中なので少し入り辛いと思いますが、風鈴の販売もやっておりますので、 是非お気軽にご来店下さい。</Trans>
              <br/><br/><Trans>またガラス吹き体験では一階奥の工房で最初にガラスを吹いていただきます。二階は主に絵付け体験の会場となっております。</Trans>
            </Description>
          </div>
          <div>
            <Figure>
              <img src={ShopImg} alt="" style={{ width: "80%",margin:"0 auto" }} />
            </Figure>
          </div>
          </TwoColumn>
      </section>
         <div className="space-l"/>
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
      <div className="space-l" />
      <SubTitle>店舗概要</SubTitle>
      <div className="space-m" />
      <List>
        <ListItem>
          <p>店舗名</p><p>篠原まるよし風鈴</p>
        </ListItem>
         <ListItem>
          <p>代表者</p><p>篠原　正義</p>
        </ListItem>
          <ListItem>
          <p>創設</p><p>平成2年</p>
        </ListItem>
            <ListItem>
          <p>所在地</p><p>東京都台東区台東4-25-10</p>
        </ListItem>
         <ListItem>
          <p>電話番号</p><p>03-3832-0227</p>
        </ListItem>
            <ListItem>
          <p>メール</p><p> maruyosi@sam.hi-ho.ne.jp</p>
        </ListItem>
               <ListItem>
          <p>施設概要</p><p>店舗1F、体験場2F
          </p>
        </ListItem>
              <ListItem>
          <p>施設設備</p><p>トイレ一室、駐車場無し
          </p>
       </ListItem>
    </List>
      {/* <Map noBtn/> */}
    </div>
  )
}

export default Access
