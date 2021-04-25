import React from "react"
import { IntroduceCircle } from "../index"
import styled from "styled-components"
import {
  SubTitle,
  Description,
  GridList,
  ItemA,
  ItemB,
  ItemC,
  GridContainer,
  MinTitle,
} from "../../style/GlobalStyle"
import { Trans } from "gatsby-plugin-react-i18next"
import Image from "../image"
import { WorkshopKitFlow } from "./TsuridaiData"

const ImageContainer = styled.div`
  width: 70% !important;
  margin: 30px auto;
  @media (max-width: 767px) {
    width: 90% !important;
  }
`

const WorkshopKit = () => {
  return (
    <div>
      <section className="center">
        <SubTitle hannari>
          <Trans>体験キット</Trans>
        </SubTitle>
        <Description left width="half">
          <Trans>
            自宅でも江戸風鈴の体験ができるように、江戸風鈴の体験キットをご用意いたしました。こちらがあれば筆洗いと紙を用意して、すぐに江戸風鈴の絵付け体験を楽しむことができます。
          </Trans>
        </Description>
      </section>
      <div className="space-m" />
      <section>
        <GridContainer style={{ margin: "0 auto" }}>
          <ItemA>
            <Image filename="taiken_kit_contents.jpg" />
          </ItemA>
          <ItemB>
            <Image filename="fuurin_tansaku.jpg" />
          </ItemB>
          <ItemC>
            <Image filename="brush_paint.jpg" />
          </ItemC>
        </GridContainer>
      </section>
      <section className="center">
        <SubTitle hannari>
          <Trans>体験の始め方</Trans>
        </SubTitle>

        <div className="space-l" />
        <MinTitle>
          <Trans>用意する物</Trans>
        </MinTitle>
        <div className="space-l" />
        <IntroduceCircle />
      </section>
      <section>
        <div className="space-l" />
        <MinTitle>
          <Trans>-体験の流れ-</Trans>
        </MinTitle>
        <GridList single gap>
          {WorkshopKitFlow.map(item => (
            <div>
              <ImageContainer>
                <Image
                  filename={item.image}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </ImageContainer>
              <MinTitle>{item.title}</MinTitle>
              <Description width="more">{item.description}</Description>
            </div>
          ))}
        </GridList>
      </section>
      <div className="space-l" />
      <section>
        <SubTitle hannari>
          <Trans>絵の描き方</Trans>
        </SubTitle>
        <Description>申し訳ありません。ただいま準備中です。</Description>
      </section>
      <section>
        <SubTitle hannari>
          <Trans>短冊の付け方</Trans>
        </SubTitle>
        <Description>申し訳ありません。ただいま準備中です。</Description>
      </section>
      <div className="space-l" />
    </div>
  )
}

export default WorkshopKit
