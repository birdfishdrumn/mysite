import React from 'react'
import { Circle, ProcessWrapper, Image, Number, ImageContainer, ProcessGrid, ProcessDescription } from "./style"
import Img from "gatsby-image"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
const ProcessCard = ({data,description,reverse,content}) => {
  return (
    <div>
             <ProcessWrapper reverse={reverse}>
        <ImageContainer noneMargin content={content}>
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
        <ProcessDescription noneMargin><Trans>{description}</Trans></ProcessDescription>
      </ProcessWrapper>
    </div>
  )
}

export default ProcessCard
