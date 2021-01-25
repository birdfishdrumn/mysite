import React from 'react'
import {Circle} from "./style"
import Img from "gatsby-image"

import { Description } from '../../style/GlobalStyle'
export default ({data,description}) => {
  return (
    <div>
      <Circle>
        <Img fluid={data.childImageSharp.fluid} style={{ borderRadius: "50%" }}/>
      </Circle>
      <Description large both space>{description}</Description>
    </div>
  )
}
