import React,{useState,useCallback} from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll,SubTitle, ScrollItem,Description,Nav,Allow } from "../../style/GlobalStyle";
import { CarouselSlider } from "../index";
import { BlowGlassWorkshopData, blowGlassSummary, blowGlassCaution } from "./WorkshopData";
import { Trans, useTranslation, Link } from 'gatsby-plugin-react-i18next';

const BlowGlassWorkshop = ({data}) => {

  return (

        <div>
      <section className="center">
              <SubTitle hannari><Trans>-ガラス吹き体験-</Trans></SubTitle>
        <Description left width="half">
          <Trans>ガラス吹き体験はお客様自身で風鈴の玉から作っていただき、その後絵を描いていただきます。風鈴は宙吹きの為、人によって風鈴の形、音も違います。皆様の気持ちのこもった世界にひとつだけの風鈴を作ってみましょう。</Trans>

    </Description>
      </section>
         <Nav hannari>
        {blowGlassSummary.map((item) => (
            <>
            <li><Trans>{item.title}</Trans></li>
            <p><Trans>{item.description}</Trans></p>
            </>
          ))}
          </Nav>
      <section>
        <SubTitle hannari>-体験の流れ-</SubTitle>

        <Nav hannari>
          {BlowGlassWorkshopData.map((item,index) => (
            <>
           <li><Trans>{item.title}</Trans></li>
              <p><Trans>{item.description}</Trans></p>
              <Allow/>
              </>
        ))}

         <li>⑦短冊を付けて完成！</li>
        <p>短冊をつけて割れないように箱に入れて持ち帰れます。お疲れ様でした。</p>
        </Nav>

      </section>
      <section>
        <SubTitle hannari>-注意事項-</SubTitle>
         <Nav left hannari small square>
          {blowGlassCaution.map((item) => (
            <li>{item}</li>
          ))}
          </Nav>
      </section>

      <section>
      </section>
      </div>
  )
}

export default BlowGlassWorkshop
