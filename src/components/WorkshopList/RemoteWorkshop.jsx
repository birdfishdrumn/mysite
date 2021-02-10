import React,{useState,useCallback} from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll,SubTitle, ScrollItem,Description,Nav,Allow } from "../../style/GlobalStyle";
import { CarouselSlider } from "../index";
import { RemoteWorkshopFlow, remoteSummary, blowGlassCaution } from "./WorkshopData";
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
const BlowGlassWorkshop = ({data}) => {

  return (

        <div>
      <section className="center">
              <SubTitle hannari>-リモート体験-</SubTitle>
          <Description  left width="half">
   リモート絵付け体験では自宅にいても職人の説明を受けて絵付けにチャレンジする事が出来ます。特に新型コロナの影響でなかなか東京方面に旅行に来れない方々に提案させていただいております。
    </Description>
      </section>
         <Nav hannari>
        {remoteSummary.map((item) => (
            <>
            <li><Trans>{item.title}</Trans></li>
            <p><Trans>{item.description}</Trans></p>
            </>
          ))}
          </Nav>
      <section>
        <SubTitle hannari><Trans>-体験の流れ-</Trans></SubTitle>

        <Nav hannari>
          {RemoteWorkshopFlow.map((item,index) => (
            <>
           <li><Trans>{item.title}</Trans></li>
              <p><Trans>{item.description}</Trans></p>
              <Allow/>
              </>
        ))}

         <li><Trans>⑥短冊を付けて完成！</Trans></li>
          <p>絵を描き終わったら短冊を付けて音がなるようにしましょう。短冊の付け方なども説明いたしますのでご安心ください。
             <br/>終わったらinstagramなどで写真を後悔しましょう！
        </p>
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
