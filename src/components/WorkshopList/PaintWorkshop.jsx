import React,{useState,useCallback} from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll,SubTitle, ScrollItem,Description } from "../../style/GlobalStyle";
import { CarouselSlider } from "../index";
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
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
              <SubTitle hannari>絵付け体験</SubTitle>
          <Description  width="half">篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。
      <br/>またこちらのオンラインショップでは各商品もご購入可能です。
    </Description>
      </section>
      <section>
        {/* <CarouselSlider img={data}/> */}



      </section>
      </div>
  )
}

export default PaintWorkshop
