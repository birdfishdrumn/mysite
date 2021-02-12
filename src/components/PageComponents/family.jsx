import React from 'react'
import { IntroduceContainer,IntroduceAnimal,FamilyImage,FamilyDescription,Flex } from "./style"
import huurin from "../../images/kingyo.jpg"
import { MinTitle } from "../../style/GlobalStyle";
import {TimeLine} from "../index";



const family = ({data}) => {


  return (
    <div className="center">
      <div className="space-l"/>
      <section>
      <IntroduceContainer>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid} /></div>
        <div>
        <MinTitle hannari>篠原 正義</MinTitle>
          <FamilyDescription left >中学時代から数えて職人歴49年。普段はガラス吹き、絵付け、体験指導を行っております。 風鈴の事ならお任せ下さい。</FamilyDescription>
          </div>
      </IntroduceContainer>
      </section>
      <div className="space-xl"/>
      <section>
      <TimeLine/>
      </section>
      <section>
         <div className="space-l"/>
         <IntroduceContainer>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid} /></div>
        <div>
        <MinTitle hannari>篠原 延子</MinTitle>
          <FamilyDescription left >中学時代から数えて職人歴49年。普段はガラス吹き、絵付け、体験指導を行っております。 風鈴の事ならお任せ下さい。</FamilyDescription>
          </div>
        </IntroduceContainer>
             <div className="space-l"/>
         <IntroduceContainer>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid} /></div>
        <div>
        <MinTitle hannari>篠原 孝通</MinTitle>
          <FamilyDescription left >中学時代から数えて職人歴49年。普段はガラス吹き、絵付け、体験指導を行っております。 風鈴の事ならお任せ下さい。</FamilyDescription>
          </div>
        </IntroduceContainer>
             <div className="space-l"/>
         <IntroduceContainer>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid} /></div>
        <div>
        <MinTitle hannari>篠原 通宏</MinTitle>
          <FamilyDescription left >中学時代から数えて職人歴49年。普段はガラス吹き、絵付け、体験指導を行っております。 風鈴の事ならお任せ下さい。</FamilyDescription>
          </div>
        </IntroduceContainer>
        <div className="space-l" />
        <Flex>
            <IntroduceAnimal>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid} /></div>
        <div>
        <MinTitle hannari>ふうた</MinTitle>

          </div>
        </IntroduceAnimal>
              <div className="space-s"/>
            <IntroduceAnimal>
        <div><FamilyImage fluid={data.about.childImageSharp.fluid} /></div>
        <div>
        <MinTitle hannari>カメ男</MinTitle>

          </div>
          </IntroduceAnimal>
          </Flex>
      </section>

    </div>
  )
}

export default family
