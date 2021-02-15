import React, { useState,useCallback } from "react";

import {Link} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description } from "../style/GlobalStyle";

import { Button } from "../components/Button"


export default ({data})=>{


  return (
    <div>

      <Layout>
        {/* <div>
	<figure>
	   <Img fluid={data.contact.childImageSharp.fluid} alt="製品情報"/>
    </figure>
        </div> */}

<div className="space-xl"/>
        <SEO  pagetitle="お問い合わせフォーム" />
 <article className="content">
        <SubTitle>お問い合わせありがとうございます。</SubTitle>
        <div className="space-m" />

          <div className="center">
            <Description  width="more">
              お問い合わせいただきありがとうございました。<br />
              担当の者が確認しだいご返信させていただきますので、今しばらくお待ちくださいませ。
          <br></br>
              <div className="space-xl"/>
        <Link to="/" ><Button>Topページに戻る</Button></Link>
            </Description>

        </div>


             <div className="space-xl" />
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
