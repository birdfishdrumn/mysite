import React, { useState,useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Img from "gatsby-image"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description } from "../style/GlobalStyle";
import { QuestionAccordion } from "../components/index"


import TextInput from "../components/UI/textInput"

export default ({data})=>{


  return (
    <div>

      <Layout>
        <div>
	<figure>
	   <Img fluid={data.contact.childImageSharp.fluid} alt="製品情報"/>
    </figure>
        </div>

        <SEO  pagetitle="お問い合わせフォーム" />
 <article className="content">
        <SubTitle>よくある質問</SubTitle>
        <div className="space-m" />

          <div className="center">
            <Description>
                 各種お問い合わせはこちらのフォームよりお願いいたします。
          <br></br>
          お名前・メールアドレス・件名・問い合わせ内容を記載して送信ボタンをクリックしてください。
            </Description>

        </div>
        <div className="space-l"/>
        <QuestionAccordion/>
   </article>
      </Layout>
    </div>
  );
};



export const query = graphql`
query {
  contact: file(relativePath: {eq: "iro.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {
...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
}`
