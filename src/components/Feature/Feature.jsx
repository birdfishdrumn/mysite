import React, { useEffect }from 'react'
import { FeatureCard } from "./style"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import Img from "gatsby-image"
import Aos from "aos";

import { Description } from '../../style/GlobalStyle'
export default ({ data, description, content }) => {
     useEffect(() => {
    Aos.init({ duration: 1200, startEvent: 'DOMContentLoaded', once: true });
  }, [])
  return (
    <div>
      <FeatureCard data-aos="fade-up" content={content}>
        <Img fluid={data.childImageSharp.fluid} style={{ borderRadius: "50%" }}/>
      </FeatureCard>
      <Description padding  both width="half"><Trans>{description}</Trans></Description>
    </div>
  )
}
