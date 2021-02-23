import React, { useState,useCallback } from "react";

import {Link} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description,Nav } from "../style/GlobalStyle";

import { Button } from "../components/Button"


export default ({data,location})=>{

//   if (location) {
//   // console.log(location.state)
// }

  return (
    <div>

      <Layout>
 {/* state: { name, email, phone, content, selectedDate, time, message, people }, */}

<div className="space-xl"/>
        <SEO  pagetitle="お問い合わせフォーム" />
 <article className="content">
          {location.state && location.state.subject ?
             <SubTitle>お問い合わせありがとうございます。</SubTitle>
           : <SubTitle>体験のお申し込みありがとうございます。</SubTitle>
          }
        <div className="space-m" />

          <div className="center">

            {location.state && location.state.subject ?
               <Description width="half">
         お問い合わせいただきありがとうございました。<br />
              担当の者が確認しだいご返信させていただきますので、今しばらくお待ちくださいませ。
          <br></br>

            </Description>
              :
                  <Description left width="half">
                     体験のお申し込みありがとうございます。担当のものが翌営業日以内にご返信させていただきますので今しばらくお待ちくださいませ。
          <br></br>

            </Description>
          }

            {location.state &&
              (
              <Nav small noSpace>
                <li>お名前</li>
                <p>{location.state.name}</p>
                <li>メールアドレス</li>
                <p>{location.state.email}</p>
                {location.state.phone && (<><li>電話番号</li>
                <p>{location.state.phone}</p>

                <li>体験内容</li>
                <p>{location.state.content}</p>
                <li>人数</li>
                <p>{location.state.people}</p>
                <li>体験日</li>
                <p>{location.state.selectedDate.toLocaleDateString()}</p>
                <li>体験時間</li>
                  <p>{location.state.time}</p></>)}
                <li>件名</li>
                <p>{location.state.subject}</p>
                <li>メッセージ</li>
                <p>{location.state.message}</p>
              </Nav>
            )}
               <Link to="/" ><Button>Topページに戻る</Button></Link>

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
