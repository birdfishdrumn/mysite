import React, { useEffect }from 'react'
import { FeatureCard } from "./style"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import Img from "gatsby-image"
import Aos from "aos";
import Image from "../image"

import { Description } from '../../style/GlobalStyle'
export default ({ image, description, content }) => {
     useEffect(() => {
    Aos.init({ duration: 1200, startEvent: 'DOMContentLoaded', once: true });
  }, [])
  return (
    <div>
      <FeatureCard data-aos="fade-up" content={content}>
        <Image filename={image} style={{ borderRadius: "50%" }}/>
      </FeatureCard>
      <Description padding  both width="half"><Trans>{description}</Trans></Description>
    </div>
  )
}
