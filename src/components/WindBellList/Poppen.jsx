import React,{useState,useCallback}  from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import { AchievementFilter,MoneyLuckFilter,DiseaseFree,AmuletFilter,SeasonFlower } from "./index";
import Layout from "../../components/layout"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem} from "../../style/GlobalStyle";
import { Button } from "../../components/Button";
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";

const  Poppen= ({}) => {
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
      <SubTitle>ポッペン</SubTitle>
          <Description  width="half">篠原まるよし風鈴では江戸風鈴を主として、その技術を応用してイヤリング、ぽっぺんなどを制作しております。また風鈴を吊るす台も販売していますので飾る場所がない方にはお勧めです。
      <br/>またこちらのオンラインショップでは各商品もご購入可能です。
    </Description>
    </section>
    <div className="space-l" />
    </div>
  )
}

export default Poppen
