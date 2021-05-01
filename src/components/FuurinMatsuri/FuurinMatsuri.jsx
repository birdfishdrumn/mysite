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
              <Link to="/blog/post/huurin_app_news">
                <MinTitle>
                  <Trans>風鈴体験サービス「ふうりん祭り」のお知らせ</Trans>
                </MinTitle>
                <Description left>
                  <Trans></Trans>
                </Description>

                <Button>
                  <Trans>詳しく見る</Trans>
                </Button>
              </Link>
            </div>
      </ListColumn>

    </AppWrapper>
  )
}

export default FuurinMatsuri
