import React  from 'react'
import {graphql,useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import { IntroduceCircle,Process } from "../index";
import Layout from "../../components/layout"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem, MinTitle} from "../../style/GlobalStyle";
import { Button } from "../../components/Button";


const  WorkshopKit= ({}) => {
    const data = useStaticQuery(graphql`
query kitQuery{
    kikyou: file(relativePath: {eq: "iro2.jpg"}){
    childImageSharp {
      fluid(maxWidth: 400) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
   }
   `)
  return (

    <div>
        <section className="center">
      <SubTitle hannari>体験キット</SubTitle>
        <Description left width="half">自宅でも江戸風鈴の体験ができるように、江戸風鈴の体験キットをご用意いたしました。
         こちらがあればお簡単な筆洗いを用意する以外がすぐに江戸風鈴の絵付け体験を楽しむことができます。
    </Description>
      </section>
      <section className="center">
        <SubTitle hannari>体験の始め方</SubTitle>

        <div className="space-m" />
        <MinTitle>用意する物</MinTitle>
          <div className="space-m" />
        <IntroduceCircle data={data} />

      </section>
      <section>
        {/* <Process data={data}/> */}
      </section>
    <div className="space-l" />
    </div>
  )
}

export default WorkshopKit
