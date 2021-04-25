import React, { useEffect } from "react"
import { Circle } from "./style"
import { Trans, Link } from "gatsby-plugin-react-i18next"

import Image from "../minImage"
import Aos from "aos"

import { Description, MinTitle } from "../../style/GlobalStyle"
export default ({ link, image, description, title }) => {
  useEffect(() => {
    Aos.init({ duration: 1200, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (
    <div data-aos="fade-up">
      <Link to={link}>
        <Circle>
          <Image filename={image} style={{ borderRadius: "10%" }} />
        </Circle>
        <MinTitle hannari>
          <Trans>{title}</Trans>
        </MinTitle>
        <Description width="more" left width="more">
          <Trans>{description}</Trans>
        </Description>
      </Link>
    </div>
  )
}
