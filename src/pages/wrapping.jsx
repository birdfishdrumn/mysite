import React from "react";

import Img from "gatsby-image"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description,TwoColumn,Figure,MinTitle} from "../style/GlobalStyle";

import styled from "styled-components"
import Image from "../components/image";



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

// const ConflictImageWrapper = styled.div`
// position:relative;

// `

export default ({data,location})=>{


  return (
    <div>

      <Layout>
              <SEO
           pagetitle="風鈴のあれこれ"
      pagedesc="こちらでは江戸風鈴の吊るし方や修理に関することなど、風鈴のあれこれについてご紹介いたします。"
      pagepath={location.pathname}
      pageimg={data.naire.childImageSharp.original.src}
      pageimgw={data.naire.childImageSharp.original.width}
        />
        <section className="hero">
	<figure>
            <Image filename="arekore_top.jpg" style={{height:"100%"}} alt="製品情報"/>
    </figure>
        </section>


 <article className="content">
    <section>
          <SubTitle>江戸風鈴の梱包</SubTitle>

            <TwoColumn reverse>
                 <div>
                <Figure>
              <Image
                filename="fuurin_wrapping.jpg"
                alt=""
                style={{ width: "100%" ,margin:"0"}}
                  />
                  <div className="space-m"/>
                </Figure>
                     <Figure>
              <Image
                filename="kiriko_wrapping.jpg"
                alt=""
                style={{ width: "100%" ,margin:"0"}}
              />
            </Figure>
          </div>

          <div>
              <Description left  width="more">
                  篠原まるよし風鈴でお買い上げいただいたお客様、体験をおやりになったお客様の風鈴は全て割れないようにパッキンや箱でお包み致します。
                  体験をおやりになったお客様は結構箱に入るのか不安に思われるようですがご安心ください。<br /><br /><br />
                  箱の種類は小丸型の風鈴の場合は基本的には白い無地の箱と江戸風鈴のシールの付いた箱にお入れいたします。<br />切子の風鈴やじんべえ鮫、釣鐘型など少し高価な風鈴に関しては写真下のような化粧箱にお入れさせていただきます。
            </Description>

          </div>

        </TwoColumn>
          </section>
           <div className="space-l"/>

           <section>
            <SubTitle>風鈴のラッピング</SubTitle>
            <Description left width="half">
              プレゼントをご希望の方には風鈴の箱をラッピングすることもできますので、お申し付け下さい。ネットショップでご注文の方は注文時の備考欄よりラッピング希望とお伝えくださいませ。
            </Description>

          </section>
                    <div className="space-l"/>
          <section>
            <SubTitle>江戸風鈴の発送</SubTitle>
             <Description left width="half">
              当店では江戸風鈴の発送も行っております。ネットショップでのご購入の場合はもちろん、お店にきて音などを選んだ上でご購入いただいた場合なども発送が可能ですのでお申し付け下さいませ。
            </Description>
            <MinTitle>※海外への発送に関しまして</MinTitle>
            <Description left width="half">当店から直接では海外への発送は行っておりませんがご希望の方はお問い合わせフォーム、お電話、メールにてご相談くださいませ。これまでもフランスやニュージーランド、タイの方々などにもお取引の実績もございます。</Description>
          </section>

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
      fluid(maxWidth: 200) {
...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
      hang: file(relativePath: {eq: "productImg/huurin_hang_kiriko.jpg"}){
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
}`
