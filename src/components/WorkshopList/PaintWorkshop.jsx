import React,{useState,useCallback} from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll,SubTitle, ScrollItem,Description,Nav,Allow } from "../../style/GlobalStyle";
import { CarouselSlider } from "../index";
import { PaintWorkshopData, paintSummary, paintCaution } from "./WorkshopData";
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
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
              <SubTitle hannari><Trans>-絵付け体験-</Trans></SubTitle>
          <Description  left width="half">
   <Trans>絵付け体験では、こちらで用意する江戸風鈴の内側からお好きに絵を描いていただけます。私たちが絵の描き方を説明しますので、絵の苦手な方でもご安心ください。一人でもお友達同士でも夢中になって楽しむことができますよ。</Trans>
    </Description>
      </section>
         <Nav hannari>
        {paintSummary.map((item) => (
            <>
            <li><Trans>{item.title}</Trans></li>
            <p><Trans>{item.description}</Trans></p>
            </>
          ))}
          </Nav>
      <section>
        <SubTitle hannari><Trans>-体験の流れ-</Trans></SubTitle>

        <Nav hannari>
          {PaintWorkshopData.map((item,index) => (
            <>
           <li><Trans>{item.title}</Trans></li>
              <p><Trans>{item.description}</Trans></p>
              <Allow/>
              </>
        ))}

         <li><Trans>⑥短冊を付けて完成！</Trans></li>
        <p><Trans>短冊をつけて割れないように箱に入れて持ち帰れます。お疲れ様でした。</Trans></p>
        </Nav>

      </section>
      <section>
        <SubTitle hannari><Trans>-注意事項-</Trans></SubTitle>
         <Nav left hannari small square>
          {paintCaution.map((item) => (
            <li>{item}</li>
          ))}
          </Nav>
      </section>

      <section>
      </section>
      </div>
  )
}

export default PaintWorkshop
