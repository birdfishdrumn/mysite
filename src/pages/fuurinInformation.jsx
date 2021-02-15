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
           pagetitle="風鈴のあれこれ"
      pagedesc="こちらでは江戸風鈴の吊るし方や修理に関することなど、風鈴のあれこれについてご紹介いたします。"
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

          <SubTitle>江戸風鈴の吊るし方</SubTitle>
          <section>
            <TwoColumn>
                 <div>
                <Figure>
              <Img
                fluid={data.hang.childImageSharp.fluid}
                alt=""
                style={{ width: "100%" ,margin:"0"}}
              />
            </Figure>
          </div>

          <div>
              <Description left  >
             今から少し前までは、軒下に下げるのが当たり前でした。
軒下といっても、一階部分の軒です。二階以上のベランダなどに
下げると風が強く、一日中鳴りっぱなしになります。
風鈴の魅力は、時おり鳴るのが良いとされます。<br/>
したがって一年中で風が少なく暑い夏が好まれます。
                  <br /><br />
最近の家屋には、軒がない家が殆どです。古民家の様なお宅
ばかりでしたら良いのですが、そうはいきません。
また、マンションだったり、家と家の間が狭く、ご近所の方に
「うるさいから止めて」なんて言われたりして表に下げる場所が
無くなってしまいました。日本では特にこの風鈴を見ると自分の家に
飾りたくなるんです。風情を楽しみ、音を愛でる習慣があるからです。
                  <br /><br />
                  最近は、家の中に下げる方が殆どになりました。カーテンレールのような場所にかひっかける箇所がないことも本当は悲しくもなります。そこで私たちは壁に特殊な釣り具をつけて飾ることも
お勧めしています。また、吊り台に下げて風情を楽しむなんて言う
ことも良いかと思います。
            </Description>

          </div>

        </TwoColumn>
          </section>
           <div className="space-l"/>

           <section>
            <SubTitle>風鈴が壊れてしまった時</SubTitle>
            <Description left width="half">
              江戸風鈴の場合は、縁起の良いものが多く、「えーっ。」なんて言うことに
              なりますね。大丈夫です。家族の身代わりになってくれたんです。
              「有難う」という気持ちで燃えないゴミの日に処分してください。
            </Description>
             <div className="space-l"/>
            <SubTitle>糸・ガラス管の修理</SubTitle>
            <Description left width="half">
              古くなった風鈴の糸の交換は、本体が破損していなければできます。￥150円程で承っておりますのでご希望の方は一度メールやお電話でお問い合わせお願い致します。大切に使って頂いた方に感謝いたします。
            </Description>
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