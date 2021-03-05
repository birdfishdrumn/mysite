import React from "react"

import { SubTitle,Description,Nav } from "../../style/GlobalStyle";
import { Button } from "../Button/styles";

import {Trans} from 'gatsby-plugin-react-i18next';
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
        <SubTitle hannari>新型コロナウイルスの対策</SubTitle>
        <Description  left width="half">
          <Trans>団体様の場合はただいま席数を減らしてのご案内となっておりますので、人数が多い場合は２回に分けてのご案内、また別会場などをご案内させていただくこともあります。詳しくはメール、またはお電話よりお問い合わせくださいませ。
          </Trans>
        </Description>
        <div className="space-l"/>
        <a href="http://www.sam.hi-ho.ne.jp/maruyosi/2007.taiken2.pdf" target="_blank"><Button>体験学習申し込み FAX</Button>

        </a>
         <div className="space-l"/>


      </section>

      <section>
      </section>
      </div>
  )
}

export default GroupWorkshop
