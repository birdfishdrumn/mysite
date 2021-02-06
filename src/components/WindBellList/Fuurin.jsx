import React,{useState,useCallback}  from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import { AchievementFilter,MoneyLuckFilter,DiseaseFree,AmuletFilter,SeasonFlower,KirikoFilter,TsuriganeFilter,FuukinFilter,AnimalFilter} from "./index";
import Layout from "../../components/layout"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem} from "../../style/GlobalStyle";
import { Button } from "../../components/Button";
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";

const Fuurin = ({location}) => {
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
      <SubTitle>小丸型風鈴</SubTitle>
          <Description  width="half">篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。
      <br/>またこちらのオンラインショップでは各商品もご購入可能です。
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



          <div className="space-l" />
           {/* <div className={change ? styles.p_grid__scroll : styles.p_grid__row }></div> */}
          {/* <GridList change={change}>
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
          </GridList> */}
          <MoneyLuckFilter  change={change}/>
          <AchievementFilter change={change} />
          <DiseaseFree change={change} />
           <AmuletFilter change={change}/>
        <SeasonFlower change={change} />
        <KirikoFilter change={change}/>
        <AnimalFilter change={change}/>
        <SubTitle>新子丸、釣鐘型風鈴</SubTitle>
        <TsuriganeFilter change={change}/>
        <SubTitle>風琴</SubTitle>
        <FuukinFilter change={change}/>
    </section>
    <div className="space-l" />
    </div>
  )
}

export default Fuurin
