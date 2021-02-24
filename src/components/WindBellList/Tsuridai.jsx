import React from 'react'

import { SubTitle, Description, GridList, MinTitle } from "../../style/GlobalStyle";
import { TsuridaiData } from "./TsuridaiData";
import { Trans } from "gatsby-plugin-react-i18next";
import Image from "../image"

const  Tsuridai= () => {

  // console.log(location.state.number)
  return (

    <div>
        <section className="center">
      <SubTitle hannari><Trans>吊り台</Trans></SubTitle>
        <Description width="half"><Trans>つり台は家の中で飾る場所があまり無い方や、かっこよく飾りたい方におすすめです。まるよし風鈴では行灯型の吊り台も製作しており、照明としてお使いいただくことも可能です。</Trans>

    </Description>
      </section>
      <div className="space-l" />
      <section>
              <GridList single gap >
          {TsuridaiData.map(item => (
            <div>
              <Image filename={item.image} />
              <MinTitle hannari><Trans>{item.title}</Trans></MinTitle>
              <Description left><Trans>{item.description}</Trans></Description>
            </div>
              ))}

            </GridList>
      </section>
    </div>
  )
}

export default Tsuridai
