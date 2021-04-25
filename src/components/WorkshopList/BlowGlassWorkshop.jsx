import React from "react"

import { SubTitle, Description, Nav, Allow } from "../../style/GlobalStyle"

import {
  BlowGlassWorkshopData,
  blowGlassSummary,
  blowGlassCaution,
} from "./WorkshopData"
import { Trans } from "gatsby-plugin-react-i18next"

const BlowGlassWorkshop = () => {
  return (
    <div>
      <section className="center">
        <SubTitle hannari>
          <Trans>-ガラス吹き体験-</Trans>
        </SubTitle>
        <Description left width="half">
          <Trans>
            ガラス吹き体験はお客様自身で風鈴の玉から作っていただき、その後絵を描いていただきます。風鈴は宙吹きの為、人によって風鈴の形、音も違います。皆様の気持ちのこもった世界にひとつだけの風鈴を作ってみましょう。
          </Trans>
        </Description>
      </section>
      <Nav hannari>
        {blowGlassSummary.map(item => (
          <>
            <li>
              <Trans>{item.title}</Trans>
            </li>
            <p>
              <Trans>{item.description}</Trans>
            </p>
          </>
        ))}
      </Nav>
      <section>
        <SubTitle hannari>
          <Trans>-体験の流れ-</Trans>
        </SubTitle>

        <Nav hannari>
          {BlowGlassWorkshopData.map((item, index) => (
            <>
              <li>
                <Trans>{item.title}</Trans>
              </li>
              <p>
                <Trans>{item.description}</Trans>
              </p>
              <Allow />
            </>
          ))}

          <li>
            <Trans>⑦短冊を付けて完成！</Trans>
          </li>
          <p>
            <Trans>
              短冊をつけて割れないように箱に入れて持ち帰れます。お疲れ様でした。
            </Trans>
          </p>
        </Nav>
      </section>
      <section>
        <SubTitle hannari>
          <Trans>-注意事項-</Trans>
        </SubTitle>
        <Nav left hannari small square>
          {blowGlassCaution.map(item => (
            <li>{item}</li>
          ))}
        </Nav>
      </section>

      <section></section>
    </div>
  )
}

export default BlowGlassWorkshop
