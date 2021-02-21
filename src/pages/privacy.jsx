import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description,MinTitle } from "../style/GlobalStyle";
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
        <SubTitle>個人情報のお取り扱いに関しまして</SubTitle>
        <div className="space-m" />

          <div className="center">
            <MinTitle>(1)個人情報の収集目的</MinTitle>
            <Description width="half" left>
              当店では体験の予約やお問い合わせの際に、お名前・メールアドレスやお電話番号の提供をお願いさせていただくことがあります。そして提供いただく個人情報は、その目的の範囲を超えないものとさせていただきます。
            </Description>
             <MinTitle>(2)個人情報の利用目的</MinTitle>
            <Description  width="half" left>
              当店ではお問い合わせやご予約で提供していただいた個人情報は、予約状況の確認のみご利用させていただき、その範疇を超えてご利用させていただくことはありません。
            </Description>
              <MinTitle>(3)個人情報の提供</MinTitle>
            <Description  width="half" left>
              当店では、以下の条件を除き原則お問い合わせ・お申込みいただいた方の同意なく、個人情報を第三者に提供することはございません。<br/><br />
1.法令に基づく場合<br />
2.ご本人の同意がある場合<br />
3.国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合

            </Description>
            <MinTitle>(4)個人情報の管理</MinTitle>
               <Description  width="half" left>
             当店ではお客様の個人情報を管理する際は、適切な管理を行なうとともに、外部への流出防止に努めさせていただきます。
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
