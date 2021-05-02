import React from 'react'
import { AppWrapper } from "./style"
import { ListColumn, Description, MinTitle } from "../../style/GlobalStyle"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import { Button } from "../Button"
import Image from "../image"

const FuurinMatsuri = ({img}) => {
  return (
    <AppWrapper>
      <ListColumn>
         <div>
              <img src={img} alt="製品情報" />
            </div>
        <div>

                <MinTitle>
                  <Trans>風鈴体験サービス「ふうりん祭り」のお知らせ</Trans>
                </MinTitle>
                <Description left>
                  <Trans>この度、風鈴の体験をより楽しくするサービスができました。絵の描き方のコツ、色の作り方、更に風鈴の短冊を変えたりして、自分の作品を投稿できます。詳しくは下記のボタンよりどうぞ！</Trans>
                </Description>

                <Button onClick={()=> window.open("https://fuurin-paint-workshop.web.app/", '_blank')}>
            <Trans>詳しく見る</Trans>
            <span style={{fontSize:"0.7rem"}}>※外部リンクに飛びます</span>
                </Button>

            </div>
      </ListColumn>

    </AppWrapper>
  )
}

export default FuurinMatsuri
