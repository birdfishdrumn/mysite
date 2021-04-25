import React from "react"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"
import styled from "styled-components"

import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"

import { SNS } from "../Footer/style"
const MobileLang = styled.ul`
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  > :last-child {
    margin-left: 15px;
  }
  > :first-child {
    margin-right: 15px;
  }
`

export const NavItem = ({ lang, mobile }) => {
  const { languages, changeLanguage } = useI18next()

  // languages[1] = "English"

  return (
    <ul>
      <li>
        <Link to="/about">
          <Trans>江戸風鈴とは</Trans>
        </Link>
      </li>

      <li>
        <Link to="/product">
          <Trans>商品の紹介</Trans>
        </Link>
      </li>
      <li>
        <Link to="/workshop">
          <Trans>体験する</Trans>
        </Link>
      </li>
      <li>
        <Link to="/works">
          <Trans>私たちの仕事</Trans>
        </Link>
      </li>
      <li>
        <Link to="/shop">
          <Trans>お店、家族の紹介</Trans>
        </Link>
      </li>
      <li>
        <Link to="/question">
          <Trans>よくある質問</Trans>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <Trans>お問い合わせ</Trans>
        </Link>
      </li>
      <li>
        {lang && (
          <MobileLang>
            {languages.map(lng => (
              <li key={lng}>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    changeLanguage(lng)
                  }}
                >
                  {lng}
                </a>
              </li>
            ))}
          </MobileLang>
        )}
      </li>
      {mobile && (
        <li>
          <SNS color flex>
            <li>
              <a href="https://twitter.com/@maruyosi_fuurin" target="blank">
                <TwitterIcon style={{ fontSize: "40px" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/maruyosi_edofuurin"
                target="blank"
              >
                <InstagramIcon style={{ fontSize: "40px" }} />
              </a>
            </li>
          </SNS>
        </li>
      )}
    </ul>
  )
}
