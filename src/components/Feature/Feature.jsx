import React from 'react'
import { FeatureCard } from "./style"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import Img from "gatsby-image"

import { Description } from '../../style/GlobalStyle'
export default ({data,description,content}) => {
  return (
    <div>
      <FeatureCard content={content}>
        <Img fluid={data.childImageSharp.fluid} style={{ borderRadius: "50%" }}/>
      </FeatureCard>
      <Description padding  both width="half"><Trans>{description}</Trans></Description>
    </div>
  )
}
