import React from 'react'
import { IntroduceContainer,FamilyImage,FamilyDescription } from "./style"
import huurin from "../../images/kingyo.jpg"
import {MinTitle} from "../../style/GlobalStyle";



const family = ({data}) => {


  return (
    <div className="center">
      <IntroduceContainer>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid} /></div>
        <div>
        <MinTitle hannari>篠原 正義</MinTitle>
          <FamilyDescription left >中学時代から数えて職人歴49年。普段はガラス吹き、絵付け、体験指導を行っております。 風鈴の事ならお任せ下さい。</FamilyDescription>
          </div>
      </IntroduceContainer>
    </div>
  )
}

export default family
