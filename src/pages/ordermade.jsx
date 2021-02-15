import React, { useState,useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Img from "gatsby-image"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SubTitle, Description,TwoColumn,Figure,Nav,ItemA,ItemB,ItemC,GridContainer} from "../style/GlobalStyle";
import { Contact } from "../components/index"
import styled from "styled-components"
import Image from "../components/image";
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

// const ConflictImageWrapper = styled.div`
// position:relative;

// `

const ImageA = styled(Img)`


    position:    absolute;
    z-index:    0;
    top:        0px;
    left:        0px;
  display:block;
   width:350px;
   margin-top:20px;
       @media(max-width:767px){
      width:270px;
    }
`


const ImageB = styled(Img)`


      position:    absolute;
    z-index:    999;
    top:        -80px;
    right:        40px;
    display:block;
    width:200px;
    @media(max-width:767px){
      width:150px;
       top:        -50px;
    right:        20px;
    }
`

export default ({data,location})=>{


  return (
    <div>

      <Layout>
              <SEO
           pagetitle="風鈴の名入れ・オーダーメイド"
      pagedesc="こちらでは江戸風鈴の名入れやオーダーメイドについてご紹介いたします。"
      pagepath={location.pathname}
      pageimg={data.naire.childImageSharp.original.src}
      pageimgw={data.naire.childImageSharp.original.width}
        />
        <section className="hero">
	<figure>
            <Image filename="naire_top.jpg" style={{height:"100%"}} alt="製品情報"/>
    </figure>
        </section>


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
           <div className="space-l"/>


          <section>
            <SubTitle>風鈴のオーダーメイドについて</SubTitle>
            <TwoColumn>
              <div style={{marginBottom:"0"}}>
              <Description  left >
                  新しい模様はデザインを決めたり、内側から描くのに大丈夫かな？
                  なんてことを準備しなくてはなりません。したがって通常のものより
                  高価になります。<br/><br/>

                  ５個前後の場合は一つ約3000〜4000円ほど、また一点ものの場合はもう少し高くなります。
<br/>
                  オーダーに関しましてはメールやお電話で詳しくはお問い合わせ下さいませ。
                  <br />
                  またオーダー時にはキャンセルがないように前金も頂いておりますのでご了承ください。
            </Description>

          </div>
          <div style={{margin:"0 auto"}}>
                <ImageA fluid={data.naire.childImageSharp.fluid}/>
       <ImageB fluid={data.naire.childImageSharp.fluid}/>
          </div>
            </TwoColumn>
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
