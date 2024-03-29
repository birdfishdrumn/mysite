import React, { useEffect } from "react"
// import {Header} from "../components/Header/Header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"

import { Process } from "../components/index"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { History } from "../components/PageComponents/index"
import {
  TwoColumn,
  SubTitle,
  Figure,
  Description,
  Youtube,
} from "../style/GlobalStyle"
import { Trans } from "gatsby-plugin-react-i18next"

export default ({ data, location }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (
    <Layout>
      <SEO
        pagetitle="江戸風鈴とは"
        pagedesc="江戸風鈴の特徴、ガラスの玉が作られる流れ、絵付けの流れ、また江戸風鈴の歴史について紹介いたします。"
        pagepath={location.pathname}
        pageimg={data.about.childImageSharp.original.src}
        pageimgw={data.about.childImageSharp.original.width}
        pageimgh={data.about.childImageSharp.original.height}
      />
      <section className="hero">
        <figure>
          <Img
            fluid={data.about.childImageSharp.fluid}
            style={{ height: "100%" }}
            alt="製品情報"
          />
        </figure>
      </section>

      <article className="content">
        <SubTitle>
          <Trans>江戸風鈴のこと</Trans>
        </SubTitle>

        <div className="space-l" />
        <TwoColumn data-aos="fade-up">
          <div>
            <SubTitle border noSpace>
              <Trans>江戸風鈴とは</Trans>
            </SubTitle>
            <Description left>
              <br />
              <Trans>
                江戸風鈴は江戸時代から伝わる技術を受け継いで制作しているガラス製の風鈴です。
              </Trans>
              <br />
              <br />
              <br />
              <Trans>
                型を使わずに宙吹きで作られ、絵は全て職人の手によって一つ一つ彩色されています。柄も明るい夏にぴったりの金魚や花火、可愛いじんべえ鮫や招き猫など多くの種類のものがあり,一つ一つ縁起の良い意味があります。
              </Trans>
              <br /> <br /> <br />
              <Trans>
                篠原まるよし風鈴で主に製作している短冊のデザインは上が朱色、下が緑の「天地ぼかし」になっており、太陽の恵みと地上の生命の繁栄を表しています。
              </Trans>
            </Description>
          </div>
          <div>
            <Figure>
              <Img
                fluid={data.works.childImageSharp.fluid}
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
        </TwoColumn>
        <div className="space-xl" />
        <section className="center">
          <SubTitle data-aos="fade-up">
            <Trans>江戸風鈴ができるまで</Trans>
          </SubTitle>
          <div className="space-m" />
          <Description data-aos="fade-up" left width="half">
            <Trans>
              江戸風鈴は一つ一つ職人が製作しています。最初に風鈴の玉から作るガラス吹き、ガラスの玉ができたら一つ一つ風鈴の内側から絵を描いていきます。風鈴のガラス吹きは良い音のものができるまで10年かかると言われ、とても難しい技術です。絵付けは内側から描くため、最初は思うように描くことができずこちらも最低3年程度修行が必要な技術です。
            </Trans>
            <br />
            <br />
            <Trans>
              風鈴は庶民的なガラス工芸ですが、熟練の職人の技術によって作られているのです。
            </Trans>
          </Description>
          <div className="space-m" />
          <SubTitle>
            <Trans>ガラス吹き</Trans>
          </SubTitle>
          <div className="space-l" />
          <Process data={data} />

          <SubTitle>
            <Trans>動画で確認</Trans>
          </SubTitle>
          <Youtube
            src="https://www.youtube.com/embed/yYWowTXguP0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Youtube>
          <div className="space-l" />

          <SubTitle>
            <Trans>絵付け</Trans>
          </SubTitle>
          <div className="space-l" />
          <Process paint data={data} />
          <SubTitle>
            <Trans>動画で確認</Trans>
          </SubTitle>
          <Youtube
            src="https://www.youtube.com/embed/LbyTq_nvdBg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Youtube>
        </section>
        <div className="space-xl" />
        <SubTitle>
          <Trans>江戸風鈴の歴史</Trans>
        </SubTitle>
        <div className="space-m" />
        <History data={data} />
      </article>
    </Layout>
  )
}
//スプレッド構文で配列を展開する。
export const query = graphql`
  query {
    about: file(relativePath: { eq: "Introduce/glass_plane_top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        original {
          src
          height
          width
        }
      }
    }
    works: file(relativePath: { eq: "kingyo_re.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        original {
          src
          height
          width
        }
      }
    }
    kikyou: file(relativePath: { eq: "kikyou.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        original {
          src
          height
          width
        }
      }
    }
    history: file(relativePath: { eq: "garasuhuki.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        original {
          src
          height
          width
        }
      }
    }
    makitori: file(relativePath: { eq: "process/makitori.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        original {
          src
          height
          width
        }
      }
    }
    kuchidama: file(relativePath: { eq: "process/kuchidama.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
        original {
          src
          height
          width
        }
      }
    }
  }
`
