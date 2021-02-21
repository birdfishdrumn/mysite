import React from 'react'
import {  ProcessWrapper, ImageContainer, ProcessDescription } from "./style"
import Img from "gatsby-image"
import Image from "../image"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
const ProcessCard = ({ data, description, reverse, content, image }) => {


  console.log(image)
  return (

    <div>
             <ProcessWrapper reverse={reverse}>
        <ImageContainer noneMargin content={content}>
          <Image filename={image}style={{borderRadius:"50%"}}/>
          </ImageContainer>
        <ProcessDescription noneMargin><Trans>{description}</Trans></ProcessDescription>
      </ProcessWrapper>
    </div>
  )
}

export default ProcessCard
