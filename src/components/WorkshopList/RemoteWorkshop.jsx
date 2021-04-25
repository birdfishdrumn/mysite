import React from "react"

import { SubTitle, Description, Nav, Allow } from "../../style/GlobalStyle"

import {
  RemoteWorkshopFlow,
  remoteSummary,
  remoteCaution,
} from "./WorkshopData"
import { Trans } from "gatsby-plugin-react-i18next"
const BlowGlassWorkshop = ({ data }) => {
  return (
    <div>
      <section className="center">
        <SubTitle hannari>
          <Trans>-リモート体験-</Trans>
        </SubTitle>
        <Description left width="half">
          <Trans>
            リモート絵付け体験では自宅にいても職人の説明を受けて絵付けにチャレンジする事が出来ます。特に新型コロナの影響でなかなか東京方面に旅行に来れない方々に提案させていただいております。
          </Trans>
        </Description>
      </section>
      <Nav hannari>
        {remoteSummary.map(item => (
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
          {RemoteWorkshopFlow.map((item, index) => (
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
            <Trans>⑥短冊を付けて完成！</Trans>
          </li>
          <p>
            <Trans>
              絵を描き終わったら短冊を付けて音がなるようにしましょう。短冊の付け方なども説明いたしますのでご安心ください。
            </Trans>
          </p>
        </Nav>
      </section>
      <section>
        <SubTitle hannari>
          <Trans>-注意事項-</Trans>
        </SubTitle>
        <Nav left hannari small square>
          {remoteCaution.map(item => (
            <li>{item}</li>
          ))}
        </Nav>
      </section>

      <section></section>
    </div>
  )
}

export default BlowGlassWorkshop
