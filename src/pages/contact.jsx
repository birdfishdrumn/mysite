import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description } from "../style/GlobalStyle";
import {Contact} from "../components/index"



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
        <SubTitle>お問い合わせ</SubTitle>
        <div className="space-m" />

          <div className="center">
            <Description>
                 各種お問い合わせはこちらのフォームよりお願いいたします。
          <br></br>
          お名前・メールアドレス・件名・問い合わせ内容を記載して送信ボタンをクリックしてください。
            </Description>

        </div>

          <Contact />
             <div className="space-xl" />
   </article>
      </Layout>
    </div>
  );
};
