import React from 'react'
import { Circle, ProcessWrapper, Image, Number, ImageContainer, ProcessGrid, ProcessDescription } from "./style"
import Img from "gatsby-image"
const ProcessCard = ({data,description,reverse}) => {
  return (
    <div>
             <ProcessWrapper reverse={reverse}>
        <ImageContainer noneMargin>
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
        <ProcessDescription noneMargin>{description}</ProcessDescription>
      </ProcessWrapper>
    </div>
  )
}

export default ProcessCard
