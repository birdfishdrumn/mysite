import React, { useState,useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Img from "gatsby-image"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description,TwoColumn,Figure,Nav } from "../style/GlobalStyle";
import { Contact } from "../components/index"
import styled from "styled-components"

import TextInput from "../components/UI/textInput"


const TextNav = styled.ul`
 margin-top:30px;
text-align:center;
>li{
  margin:5px;
  font-size:1.3rem;
   font-weight:bold;
}
>p{
  margin:10px;
  >span{
  font-size:0.9rem;
  color:red;
}
}



`

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
          <SubTitle>江戸風鈴の名入れ</SubTitle>
          <Description left width="half">ただ今江戸風鈴の名入れを承っております。ご希望のお名前を職人が一つ一つ墨で書き、背景にぼかしの入った短冊模様を入れて制作致します。大切な方のへのプレゼント、何か企画のお名前を入れたりイベントなどにもオススメです。<br/></Description>
           <TwoColumn reverse>
          <div>
              <Description large left >

                <TextNav style={{ marginTop: "30px"}} className="center">
                  <li >料金</li>
                  <p>¥300(税抜き)<br/><span >※それ以上は一文字増えるごとに+100円になります</span>。</p>
                  <li>注文方法</li>
                  <p>オンラインショップよりご購入希望の商品と名入れの商品を一緒にお入れください。ご希望の名前は備考欄にお書きください。</p>
                 </TextNav>
            </Description>

          </div>
          <div>
                <Figure>
              <Img
                fluid={data.naire.childImageSharp.fluid}
                alt=""
                style={{ width: "80%" ,borderRadius:"50%",margin:"0 auto"}}
              />
            </Figure>
          </div>
        </TwoColumn>
          <SubTitle>江戸風鈴の吊るし方</SubTitle>

   </article>
      </Layout>
    </div>
  );
};



export const query = graphql`
query {
  contact: file(relativePath: {eq: "iro.jpg"}){
    childImageSharp {
      fluid(maxWidth: 800) {
...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
    naire: file(relativePath: {eq: "productImg/naire.jpg"}){
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
