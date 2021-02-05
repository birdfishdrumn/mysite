import React,{useState,useCallback} from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll,SubTitle, ScrollItem,Description,Nav,Allow } from "../../style/GlobalStyle";
import { CarouselSlider } from "../index";

import { IconButton } from "@material-ui/core";
const PaintWorkshop = ({data}) => {
//     const data = useStaticQuery(graphql`
// query PoppenQuery{
//     allProducts(
//     filter: {category: {eq:"ポッペン" }}){
//       edges {
//       node {
//         name
//         id
//         category
//         description
//          localImage {
//           childImageSharp{
//             fluid(maxWidth:300){
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }
//         }
//       }
//     }
// }
// `)
  //   const [change,setChange] = useState(false)
  // const handleOn = useCallback(()=>{
  //     setChange(true)
  // })
  //   const handleOff = useCallback(()=>{
  //     setChange(false)
  //   })
  // console.log(location.state.number)

  return (

        <div>
      <section className="center">
              <SubTitle hannari>-絵付け体験-</SubTitle>
          <Description  left width="half">篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。
      <br/>またこちらのオンラインショップでは各商品もご購入可能です。
    </Description>
      </section>
         <Nav hannari>
          <li>料金</li>
          <p>1,650円(税込)</p>
          <li>体験内容</li>
           <p>篠原まるよし風鈴で用意した風鈴の中から絵を描いてただく体験です。デザインに関しては見本などもあるので、描きたい柄がない場合でもご安心ください。</p>
          <li>所要時間</li>
           <p>約30分〜90分</p>
          <li>持ち物</li>
            <p>特にありませんが、デザインなどを考えていただきますとスムーズに描けると思います。</p>
          </Nav>
      <section>
        <SubTitle hannari>-体験の流れ-</SubTitle>

         <Nav hannari>
          <li>①予約</li>
          <p>基本的に体験は予約制になりますので、下記のフォーム、または電話にてご予約ください。</p>
           <Allow/>
        <li>②ご来店</li>
          <p> 体験日当日にご来店ください。またキャンセル、人数の変更がある場合は事前にお知らせください。</p>
           <Allow/>
        <li>③風鈴を選ぶ</li>
          <p>いくつかの風鈴の中から気に入った音のものを選びましょう。</p>
           <Allow/>
          <li>④絵の説明を受ける</li>
          <p>いくつかの風鈴の中から気に入った音のものを選びましょう。</p>
           <Allow/>
         <li>⑤絵を描く</li>
          <p>いくつかの風鈴の中から気に入った音のものを選びましょう。</p>
           <Allow/>
         <li>⑥短冊を付けて完成！</li>
        <p>いくつかの風鈴の中から気に入った音のものを選びましょう。</p>
        </Nav>

      </section>
      <section>
        <SubTitle hannari>-注意事項-</SubTitle>
         <Nav left hannari small square>

          <li>体験は小学校低学年以下のお子様には少し難しいので、お付き添いの上ご来店ください。</li>
          <li>風鈴はガラス製のため、落とすと割れてしまうので、慎重にお取り扱いください。</li>
           <li></li>
          </Nav>
      </section>

      <section>
        {/* <CarouselSlider img={data}/> */}



      </section>
      </div>
  )
}

export default PaintWorkshop
