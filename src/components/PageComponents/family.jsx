import React from "react"
import {
  IntroduceContainer,
  IntroduceAnimal,
  FamilyImage,
  FamilyDescription,
  Flex,
} from "./style"

import { MinTitle } from "../../style/GlobalStyle"
import { TimeLine } from "../index"
import { familyData } from "./familyData"
import Image from "../minImage"

const family = ({ data }) => {
  return (
    <div className="center">
      <div className="space-l" />
      <section>
        <IntroduceContainer>
          <FamilyImage>
            <Image filename="maruyosi.jpg" style={{ borderRadius: "50%" }} />
          </FamilyImage>
          <div>
            <MinTitle hannari>篠原 正義</MinTitle>
            <FamilyDescription left>
              中学時代から数えて職人歴49年。普段はガラス吹き、絵付け、体験指導を行っております。
              風鈴の事ならお任せ下さい。
            </FamilyDescription>
          </div>
        </IntroduceContainer>
      </section>
      <div className="space-xl" />
      <section>
        <TimeLine />
      </section>
      <div className="space-l" />
      <section>
        {familyData.map(item => (
          <>
            <IntroduceContainer>
              <FamilyImage>
                <Image filename={item.image} style={{ borderRadius: "50%" }} />
              </FamilyImage>
              <div>
                <MinTitle hannari>{item.name}</MinTitle>
                <FamilyDescription left>{item.description}</FamilyDescription>
              </div>
            </IntroduceContainer>
            <div className="space-m" />
          </>
        ))}
      </section>
      <section>
        <div className="space-l" />
        <Flex>
          <IntroduceAnimal>
            <FamilyImage>
              <Image filename="huuta.jpg" style={{ borderRadius: "50%" }} />
            </FamilyImage>
            <div>
              <MinTitle hannari>ふうた</MinTitle>
            </div>
          </IntroduceAnimal>
          <div className="space-s" />
          <IntroduceAnimal>
            <FamilyImage>
              <Image filename="turtle.jpg" style={{ borderRadius: "50%" }} />
            </FamilyImage>
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
