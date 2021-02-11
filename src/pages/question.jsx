import React, { useState,useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Img from "gatsby-image"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description, MinTitle } from "../style/GlobalStyle";
import { QuestionAccordion } from "../components/index"

export default ({data,location})=>{


  return (
    <div>

      <Layout>
        <div>
	<figure>
	   <Img fluid={data.contact.childImageSharp.fluid} alt="製品情報"/>
    </figure>
        </div>

        <SEO pagetitle="お問い合わせフォーム"
         pagedesc="こちらでは様々な商品を紹介します。"
      pagepath={location.pathname}
      pageimg={data.contact.childImageSharp.original.src}
      pageimgw={data.contact.childImageSharp.original.width}
      pageimgh={data.contact.childImageSharp.original.height}/>
 <article className="content">
        <SubTitle>よくある質問</SubTitle>
        <div className="space-m" />

          <div className="center">
            <MinTitle hannari>仕事に関して</MinTitle>


        <div className="space-l"/>
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
