import React from 'react'
import { TwoColumn, SubTitle, Description ,Figure,Nav} from "../../style/GlobalStyle";
import Img from "gatsby-image"
import styled from "styled-components"
import {accessData} from "./accessData"
const AccessMap = styled.div`
 margin:0 auto;
 width:60%;
`

const Access = ({data}) => {
  return (
    <div>
  <section>
        <TwoColumn>
          <div>
            <SubTitle noSpace>お店について</SubTitle>
            <Description>
              お店は佐竹商店街の中にあります。普段からお店の前には風鈴を飾っております。 一階は基本的には仕事場で作業中なので少し入り辛いと思いますが、風鈴の販売もやっておりますので、 是非お気軽にご来店下さい。<br/>またガラス吹き体験では一階奥の工房で最初にガラスを吹いていただきます。

二階は主に絵付け体験の会場となっております。
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
        <Nav>
          {accessData.map((item) => (
            <>
              <li>{item.place}</li>
              <p>{item.description}</p>
              </>
          )) }
        </Nav>
          </section>
    </div>
  )
}

export default Access
