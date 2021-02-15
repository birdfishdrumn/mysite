import React from 'react'
import { Circle } from "./style"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import Img from "gatsby-image"
import Image from "../image"
import { Description,MinTitle } from '../../style/GlobalStyle'
export default ({link,image,description,title}) => {
  return (
    <div>
      <Link to={link}>
      <Circle>
          <Image filename={image} style={{ borderRadius: "10%" }}/>
      </Circle>
      <MinTitle hannari><Trans>{title}</Trans></MinTitle>
      <Description width="more" left width="more">

          <Trans>{description}</Trans></Description>
        </Link>
    </div>
  )
}
