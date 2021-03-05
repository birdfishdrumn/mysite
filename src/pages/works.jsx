import React, { useEffect } from "react"
// import {Header} from "../components/Header/Header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"
import { Trans} from 'gatsby-plugin-react-i18next';
import { Contact,FloatingAction } from "../components/index"
import SEO from "../components/seo"
import Layout from "../components/layout"
import {
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
        pagetitle="私たちの仕事"
        pagedesc="こちらでは篠原まるよし風鈴の仕事内容、またお世話になっている川崎大師風鈴市や川越氷川神社縁結び風鈴に関する仕事をご紹介いたします。"
        pagepath={location.pathname}
        pageimg={data.taiken.childImageSharp.original.src}
        pageimgw={data.taiken.childImageSharp.original.width}
        pageimgh={data.taiken.childImageSharp.original.height}
      />
      <div className="hero">
        <figure>
          <Img fluid={data.taiken.childImageSharp.fluid} style={{height:"100%"}}alt="製品情報" />
        </figure>
      </div>

      <article className="content">
        <SubTitle><Trans>私たちの仕事</Trans></SubTitle>

        <div className="space-l"/>
        <MaxTwoColumn auto reverse>
          <div>
            <DescriptionFlex>

            <Description noneMargin width="more" left>
              <br />  <br />
              <Trans>まるよし風鈴では家族4人で主に江戸風鈴の製作をしております。年間で12000個ほど職人の手作業によって作られます。</Trans>
              <br />
             <Trans>私どもの作る江戸風鈴は、江戸時代の享保(300年前)より現代まで受け継がれた技術で作り続けております。</Trans><br /><br />
              <Trans>この風鈴が家に飾られ少しでも皆様の心を癒す、そんな時間を感じていただけるように作り続けております。</Trans>
              <br /><br />
              <Trans>この風鈴技術は日本のガラス工芸で最も古い技術の一つであり、日本中でたった二軒が継承しているのみであります。</Trans>
            </Description>
                 <SubTitle data-aos="fade-up" noSpace><Trans>江戸風鈴の製作</Trans></SubTitle>

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
              <Trans>まるよし風鈴では、毎年たくさんのお客様が制作体験を楽しんでいかれます。その中で小学生、中学生、高校生、日本語学校の方達など学生さんたちがよく団体で来られます。</Trans>
              <br />
              <br />
              <Trans>この江戸風鈴の制作体験で</Trans>
             <br /><br />
              <Trans>ものを作ることの楽しみ</Trans>
               <br /><br />
              <Trans>作ったものに思いを入れること</Trans>
                <br /><br />
              <Trans>家に飾った時、作ったものから作り手の思いが音になって感じられる事</Trans>
              <br /><br />
              <Trans>などを実感して欲しいのです。</Trans>
              <br />

              </Description>
                <SubTitle  data-aos="fade-up"noSpace><Trans>体験学習</Trans></SubTitle>
              </DescriptionFlex>
          </div>
        </MaxTwoColumn>
            <div className="space-xl"/>
        <SubTitle><Trans>昔からお世話になってる方々</Trans></SubTitle>
        <div className="space-xl"/>
        <MaxTwoColumn auto reverse>
          <div>
            <DescriptionFlex>

               <Description width="more" left>
              <br />
              <Trans>この風鈴市では、日本全国から集まった色々な風鈴が販売されます。ここではたくさんの風鈴たちが訪れたお客様を癒してくれるでしょう。</Trans>
              <br /><br />
             <Trans>もともとは風鈴には夏の暑い日にその音色で風を楽しむ、といった使い方があります。</Trans><br /><br />
              <Trans>また、音のなる近辺に悪いものを寄せ付けないという意味もあります。その中でメインの「厄除けだるま」を当社が担っています。</Trans>
              <br /><br />
              <Trans>色々な思いで川崎大師に来られ、お参りした方がこのだるま風鈴を目当てに買って帰ります。</Trans>
              <br/><Trans>その思いが叶い、無事に一年を過ごされるように心を込めて製作しています。</Trans>
            </Description>
                     <SubTitle  data-aos="fade-up" noSpace><Trans>川崎大師風鈴市</Trans></SubTitle>
              </DescriptionFlex>
          </div>
          <div>
            <Figure  data-aos="fade-up" >
              <Image
                filename="kawasakidaishi_paint.jpg"
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
              <Trans>この神社の境内に風が吹いた時は”神様が御出でになったことを表す”という言い伝えがあります。</Trans>
              <br /><br />
             <Trans>この時にたくさんの風鈴を飾り、参拝した方に風鈴の音でお知らせするという大役を当社が製作した「縁結び風鈴」が果たしています。</Trans>
              <br /><br /><br />
            <Trans>”縁”には恋人と結ばれるだけではなく、仕事の縁など人との繋がりなどいろいろあります。</Trans>
              <br /><br /><br />
              <Trans>この風鈴を作るにあたり、自分達も精進して製作しております。</Trans>
              <br /><br />
              <Trans>こちらの縁結び風鈴は氷川神社様へ参拝される方に頒布(販売)もしております。</Trans>

            </Description>
              <SubTitle  data-aos="fade-up" noSpace><Trans>川越氷川神社縁結び風鈴</Trans></SubTitle>
              </DescriptionFlex>
          </div>
        </MaxTwoColumn>
        <div className="space-xl" />

        <div className="up-sm">
        <SubTitle><Trans>お仕事のご依頼</Trans></SubTitle>
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
