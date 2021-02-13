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

const ConflictImageWrapper = styled.div`
position:relative;

`

const ConflictImage = styled(Img)`
position:absolute;
top:0;
right:0;
  z-index:0;
`
const AbsoluteImage = styled(Img)`
position:absolute;
top:10;
right:10;
  z-index:2;

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
           <div className="space-l"/>
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
            <SubTitle>風鈴のオーダーメイドについて</SubTitle>
            <TwoColumn>
              <div>
              <Description large left >
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
          <div>

              <ConflictImage
                fluid={data.naire.childImageSharp.fluid}
                alt=""

                  />
                   <AbsoluteImage
                fluid={data.naire.childImageSharp.fluid}
                alt=""
              />

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
