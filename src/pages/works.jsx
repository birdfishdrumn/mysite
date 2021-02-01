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
} from "../style/GlobalStyle"

export default ({ data, location }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (
    <Layout>
      <SEO
        pagetitle="ESSENTIALSについて"
        pagedesc="食べ物の情報について発信しているサイトです"
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
        <MaxTwoColumn>
          <div>
            <SubTitle  data-aos="fade-up" noSpace>風鈴の制作</SubTitle>
          </div>
          <div>
            <Figure data-aos="fade-up">
              <Img
                fluid={data.glass_plane.childImageSharp.fluid}
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
        </MaxTwoColumn>
        <TwoColumn>
          <div>
            <Figure  data-aos="fade-up">
              <Img
                fluid={data.works.childImageSharp.fluid}
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
          <div>
            <SubTitle noSpace>体験指導</SubTitle>
          </div>
        </TwoColumn>
        <MaxTwoColumn>
          <div>
            <SubTitle noSpace>川崎大師風鈴市</SubTitle>
          </div>
          <div>
            <Figure  data-aos="fade-up" >
              <Img
                fluid={data.daruma.childImageSharp.fluid}
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
        </MaxTwoColumn>
        <MaxTwoColumn>
          <div>
            <Figure  data-aos="fade-up" >
              <Img
                fluid={data.hikawa.childImageSharp.fluid}
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
          <div>
            <SubTitle noSpace>川越氷川神社縁結び風鈴</SubTitle>
          </div>
        </MaxTwoColumn>
        <div className="space-xl" />
          <div className = "space-xl"/>
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
       glass_plane: file(relativePath: { eq: "glass_plane.jpg" }) {
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
    daruma: file(relativePath: { eq: "darumadaishi.jpg" }) {
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
    hikawa: file(relativePath: { eq: "hikawa.jpg" }) {
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
  }
`
