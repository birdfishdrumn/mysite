import React, { useEffect } from "react"
import { FeatureCard } from "./style"
import { Trans } from "gatsby-plugin-react-i18next"

import Image from "../image"
import { Description } from "../../style/GlobalStyle"
export default ({ image, description, content }) => {
  return (
    <div>
      <FeatureCard content={content}>
        <Image filename={image} style={{ borderRadius: "50%" }} />
      </FeatureCard>
      <Description padding both width="half">
        <Trans>{description}</Trans>
      </Description>
    </div>
  )
}
