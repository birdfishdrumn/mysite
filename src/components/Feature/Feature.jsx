import React from 'react'
import { FeatureCard } from "./style"

import Img from "gatsby-image"

import { Description } from '../../style/GlobalStyle'
export default ({data,description}) => {
  return (
    <div>
      <FeatureCard>
        <Img fluid={data.childImageSharp.fluid} style={{ borderRadius: "50%" }}/>
      </FeatureCard>
      <Description padding  both width="half">{description}</Description>
    </div>
  )
}
