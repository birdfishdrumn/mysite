import React from 'react'
import { IntroduceContainer,FamilyImage } from "./style"
import huurin from "../../images/kingyo.jpg"
import { Description } from '../../style/GlobalStyle'


const family = ({data}) => {


  return (
    <div className="center">
      <IntroduceContainer>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid}/></div>
        <Description both>中学時代から数えて職人歴49年。普段はガラス吹き、絵付け、体験指導を行っております。 風鈴の事ならお任せ下さい。</Description>
      </IntroduceContainer>
    </div>
  )
}

export default family
