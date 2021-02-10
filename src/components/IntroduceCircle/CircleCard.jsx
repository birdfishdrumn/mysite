import React from 'react'
import { Circle } from "./style"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import Img from "gatsby-image"

import { Description,MinTitle } from '../../style/GlobalStyle'
export default ({data,description,title}) => {
  return (
    <div>
      <Link to="/fuurinInformation">
      <Circle>
        <Img fluid={data.childImageSharp.fluid} style={{ borderRadius: "50%" }}/>
      </Circle>
      <MinTitle hannari><Trans>{title}</Trans></MinTitle>
      <Description width="more" left width="more">

          <Trans>{description}</Trans></Description>
        </Link>
    </div>
  )
}
