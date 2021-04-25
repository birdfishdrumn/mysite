import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SubTitle, MinTitle } from "../style/GlobalStyle"
import { QuestionAccordion, IntroduceCircle } from "../components/index"
import Image from "../components/image"
export default ({ data, location }) => {
  return (
    <div>
      <Layout>
        <SEO
          pagetitle="よくある質問"
          pagedesc="こちらでは風鈴の仕事に関してよくある質問をご回答いたします。"
          pagepath={location.pathname}
          pageimg={data.question.childImageSharp.original.src}
          pageimgw={data.question.childImageSharp.original.width}
          pageimgh={data.question.childImageSharp.original.height}
        />
        <section className="hero">
          <figure>
            <Image
              filename="huurin_zaru_top.jpg"
              style={{ height: "100%" }}
              alt="製品情報"
            />
          </figure>
        </section>

        <article className="content">
          <SubTitle>よくある質問</SubTitle>
          <div className="space-m" />

          <div className="center">
            <MinTitle hannari>仕事に関して</MinTitle>

            <div className="space-l" />
            <QuestionAccordion business />
            <div className="space-l" />
            <MinTitle hannari>江戸風鈴に関して</MinTitle>
            <div className="space-l" />
            <QuestionAccordion fuurin />
            <div className="space-l" />
            <MinTitle hannari>江戸風鈴の歴史</MinTitle>
            <div className="space-l" />
            <QuestionAccordion history />
          </div>
          <div className="space-l" />
          <MinTitle hannari>江戸風鈴の発送・吊るし方</MinTitle>
          <div className="space-l" />
          <IntroduceCircle product />
        </article>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    question: file(relativePath: { eq: "Introduce/huurin_zaru_top.jpg" }) {
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
