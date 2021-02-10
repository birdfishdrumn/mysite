import React from "react"
import { Trans, Link, useI18next } from 'gatsby-plugin-react-i18next';
import styled from "styled-components"
import { MobileNav } from "./style";

const MobileLang = styled.li`
 display: flex;
 margin:0 auto;
 justify-content:center;
`


export const NavItem = ({ lang }) => {
  const { languages, changeLanguage } = useI18next();
  return (
        <ul>
          <li>
            <Link to="/about/"><Trans>江戸風鈴とは</Trans></Link>
          </li>

          <li>
            <Link to="/product/"><Trans>まるよしの風鈴</Trans></Link>
          </li>
          <li>
            <Link to="/workshop/"><Trans>体験する</Trans></Link>
          </li>
          <li>
            <Link to="/works/"><Trans>私たちの仕事</Trans></Link>
          </li>
          <li>
            <Link to="/shop/"><Trans>お店、家族の紹介</Trans></Link>
        </li>
            <li>
            <Link to="/question/"><Trans>よくある質問</Trans></Link>
          </li>
          <li>
            <Link to="/contact/"><Trans>お問い合わせ</Trans></Link>
      </li>
      {lang && (
        <MobileLang>
          {languages.map((lng) => (
            <li key={lng} style={{ marginRight:"20px" }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}>
                {lng}
              </a>
            </li>
          ))}
        </MobileLang>
      )
      }
        </ul>
  )
}
