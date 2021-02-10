import React,{useState,useCallback} from "react"
import {graphql,useStaticQuery} from "gatsby"
import { SubTitle, ScrollItem,Description,Nav,Allow } from "../../style/GlobalStyle";
import { Button } from "../Button/styles";
import { PaintWorkshopData, paintSummary, paintCaution } from "./WorkshopData";
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
const GroupWorkshop = ({data}) => {

  return (

        <div>
      <section className="center">
              <SubTitle hannari><Trans>-団体・学校の体験-</Trans></SubTitle>
          <Description  left width="half">
          <Trans>まるよし風鈴では学校の体験学習や団体様の体験も積極的に受け入れております。体験の内容は絵付けのみ、ガラス吹き、リモートのどれかからお選びいただき、お電話・メールによりお問い合わせ下さいませ。<br /><br/>
            体験申し込み用のFAX用紙もこちらに用意させていただきましたので、旅行会社様や学校様はこちらをご利用くださいませ。
          </Trans>
        </Description>
        <div className="space-l"/>
        <a href="https://edo-fuurin.com/wp-content/uploads/2020/05/2007.taiken2.pdf" target="_blank"><Button>体験学習申し込み FAX</Button>

        </a>
         <div className="space-l"/>
      {/* </section>
         <Nav hannari>
        {paintSummary.map((item) => (
            <>
            <li><Trans>{item.title}</Trans></li>
            <p><Trans>{item.description}</Trans></p>
            </>
          ))}
          </Nav>

      <section> */}
        <SubTitle hannari><Trans>-注意事項-</Trans></SubTitle>
         <Nav left hannari small square>
          {paintCaution.map((item) => (
            <li>{item}</li>
          ))}
          </Nav>
      </section>

      <section>
      </section>
      </div>
  )
}

export default GroupWorkshop
