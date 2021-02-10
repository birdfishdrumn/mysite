import React,{useState,useCallback} from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll,SubTitle, ScrollItem,Description } from "../../style/GlobalStyle";
import WindBellCard from "./WindBellCard";
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";
const Earring = () => {
    const data = useStaticQuery(graphql`
query EarringQuery{
    allProducts(
    filter: {category: {eq:"イヤリング" }}){
      edges {
      node {
        name
        id
        category
        description
         localImage {
          childImageSharp{
            fluid(maxWidth:300){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        }
      }
    }
}
`)
    const [change,setChange] = useState(false)
  const handleOn = useCallback(()=>{
      setChange(true)
  })
    const handleOff = useCallback(()=>{
      setChange(false)
    })
  // console.log(location.state.number)

  return (

        <div>
      <section className="center">
              <SubTitle>イヤリング・ピアス</SubTitle>
          <Description  width="half">当店では風鈴の技術を応用して風鈴型のイヤリング、ピアスの製造も行っております。とても小さい商品でも、絵柄は内側から手描きで彩色してます。浴衣などと非常に相性が良いので夏のファッションとしていかがでしょうか。
    </Description>
           <FlexNav>
            <Tooltip title="グリッド" interactive>
              <IconButton  onClick={handleOff} >
                <li><GridOnIcon fontSize="large"/></li>
                </IconButton>
            </Tooltip>
            <Tooltip title="短冊まで" interactive>
               <IconButton  onClick={handleOn} >
                <li ><ViewColumnIcon fontSize="large" /></li>
                </IconButton>
          </Tooltip>
          </FlexNav>
      <SubTitle hannari>イヤリング</SubTitle>
        <GridList change={change}>
            {data.allProducts.edges.map(edge => (
            <ScrollItem>
                <WindBellCard
              key={edge.node.id}
                  windBellImage={edge.node.localImage[0].childImageSharp.fluid}
                   allImage={edge.node.localImage[1].childImageSharp.fluid}
              name={edge.node.name}
              description={edge.node.description}
              change={change}
            />
                </ScrollItem>
          ))}
          </GridList>
      </section>
      </div>
  )
}

export default Earring
