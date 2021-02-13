import React,{useState,useCallback}  from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import { AchievementFilter,MoneyLuckFilter,DiseaseFree,AmuletFilter,SeasonFlower } from "./index";
import Layout from "../../components/layout"
import { SubTitle, Description, GridList, MinTitle, Scroll, ScrollItem } from "../../style/GlobalStyle";
import { TsuridaiData } from "./TsuridaiData";
import Image from "../image"

const  Tsuridai= () => {

  // console.log(location.state.number)
  return (

    <div>
        <section className="center">
      <SubTitle hannari>吊り台</SubTitle>
        <Description width="half">つり台は家の中で飾る場所があまり無い方や、かっこよく飾りたい方におすすめです。まるよし風鈴では行灯型の吊り台も製作しており、照明としてお使いいただくことも可能です。

    </Description>
      </section>
      <div className="space-l" />
      <section>
              <GridList  gap >
          {TsuridaiData.map(item => (
            <div>
              <Image filename={item.image} />
              <MinTitle hannari>{item.title}</MinTitle>
              <Description>{item.description}</Description>
            </div>
              ))}

            </GridList>
      </section>
    </div>
  )
}

export default Tsuridai
