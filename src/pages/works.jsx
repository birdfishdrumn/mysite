import React, { useEffect } from "react"
// import {Header} from "../components/Header/Header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import { Product, BottomNotice,Contact,FloatingAction } from "../components/index"
import SEO from "../components/seo"
import Layout from "../components/layout"
import {
  TwoColumn,
  MaxTwoColumn,
  SubTitle,
  Figure,
  Description,
  DescriptionFlex
} from "../style/GlobalStyle"
import Image from "../components/image"

export default ({ data, location }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (
    <Layout>
      <SEO
        pagetitle="わたしたちの仕事"
        pagedesc="こちらでは篠原まるよし風鈴の仕事内容、またお世話になっている川崎大師風鈴市や川越氷川神社縁結び風鈴に関する仕事をご紹介いたします。"
        pagepath={location.pathname}
        pageimg={data.taiken.childImageSharp.original.src}
        pageimgw={data.taiken.childImageSharp.original.width}
        pageimgh={data.taiken.childImageSharp.original.height}
      />
      <div className="eyecatch">
        <figure>
          <Img fluid={data.taiken.childImageSharp.fluid} alt="製品情報" />
        </figure>
      </div>

      <article className="content">
        <SubTitle>篠原まるよし風鈴の仕事</SubTitle>
        <Description data-aos="fade-up" width="half">
          篠原まるよし風鈴では江戸風鈴の制作を行っており年間で12,000個ほど作ります。そうしてできた風鈴に絵を描いて販売、また体験学習に用います。
        </Description>
        <div className="space-xl"/>
        <MaxTwoColumn auto reverse>
          <div>
            <DescriptionFlex>

            <Description noneMargin width="more" left>
              <br />  <br />
              まるよし風鈴では家族4人で主に江戸風鈴の
              製作をしております。年間で12000個ほど職人の手作業によって作られます。
              <br />

             私どもの作る江戸風鈴は、江戸時代の享保(300年前)より現代まで受け継がれた技術で作り続けております。<br /><br />
              この風鈴が家に飾られ少しでも皆様の心を癒す、そんな時間を感じていただけるように作り続けております。
              <br /><br />
              この風鈴技術は日本のガラス工芸最古の技術であり、日本中でたった二軒が継承しているのみであります。
            </Description>
                 <SubTitle data-aos="fade-up" noSpace>江戸風鈴の製作</SubTitle>

            </DescriptionFlex>

          </div>
          <div>
            <Figure data-aos="fade-up">
              <Image
                filename="huurin_etsuke.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
        </MaxTwoColumn>
         <div className="space-xl"/>
        <MaxTwoColumn auto>
          <div>
            <Figure  data-aos="fade-up">
               <Image
                filename="glass_plane.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
          <div>
            <DescriptionFlex reverse>

               <Description width="more" left>
              <br />
              まるよし風鈴では、毎年たくさんのお客様が制作体験を楽しんでいかれます。その中で小学生、中学生、高校生、日本語学校の方達など学生さんたちがよく団体で来られます。
              <br />
              <br />
              この江戸風鈴の制作体験で
             <br /><br />
              ものを作ることの楽しみ
               <br /><br />
              作ったものに思いを入れること
                <br /><br />
              家に飾った時、作ったものから作り手の思いが音になって感じられる事
              <br /><br />
              などを実感して欲しいのです。
              <br />

              </Description>
                <SubTitle noSpace>体験学習</SubTitle>
              </DescriptionFlex>
          </div>
        </MaxTwoColumn>
            <div className="space-xl"/>
        <SubTitle>昔からお世話になってる方々</SubTitle>
        <div className="space-xl"/>
        <MaxTwoColumn auto reverse>
          <div>
            <DescriptionFlex>

               <Description width="more" left>
              <br />
              この風鈴市では、日本全国から集まった色々な風鈴が販売されます。
              ここではたくさんの風鈴たちが訪れたお客様を癒してくれるでしょう。
              <br /><br />
             もともとは風鈴には夏の暑い日にその音色で風を楽しむ、といった使い方があります。<br /><br />
              また、音のなる近辺に悪いものを寄せ付けないという意味もあります。その中でメインの「厄除けだるま」を当社が担っています。
              <br /><br />
              色々な思いで川崎大師に来られ、お参りした方がこのだるま風鈴を目当てに買って帰ります。
              <br/>その思いが叶い、無事に一年を過ごされるように心を込めて製作しています。
            </Description>
                     <SubTitle noSpace>川崎大師風鈴市</SubTitle>
              </DescriptionFlex>
          </div>
          <div>
            <Figure  data-aos="fade-up" >
              <Image
                filename="darumadaishi.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
        </MaxTwoColumn>
        <div className="space-xl" />

        <MaxTwoColumn auto>
          <div>
            <Figure  data-aos="fade-up" >
              <Image
                filename="hikawa.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
          <div>
            <DescriptionFlex hikawa >
              <Description width="more" noneMargin left>
              <br />
              この神社の境内に風が吹いた時は”神様が御出でになったことを表す”という言い伝えがあります。
              <br /><br />
             この時にたくさんの風鈴を飾り、参拝した方に風鈴の音でお知らせするという大役を当社が製作した「縁結び風鈴」が果たしています。
              <br /><br /><br />
             ”縁”には恋人と結ばれるだけではなく、仕事の縁など人との繋がりなどいろいろあります。
              <br /><br /><br />
              この風鈴を作るにあたり、自分達も精進して製作しております。
              <br /><br />
              こちらの縁結び風鈴は氷川神社様へ参拝される方に頒布(販売)もしております。

            </Description>
              <SubTitle noSpace>川越氷川神社縁結び風鈴</SubTitle>
              </DescriptionFlex>
          </div>
        </MaxTwoColumn>
        <div className="space-xl" />

        <div className="up-sm">
        <SubTitle>お仕事のご依頼</SubTitle>
<Contact/></div>

      </article>
  <FloatingAction title="お問い合わせする"/>
    </Layout>
  )
}
//スプレッド構文で配列を展開する。
export const query = graphql`
  query {
    taiken: file(relativePath: { eq: "taiken.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
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

  }
`
