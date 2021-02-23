import React,{useEffect} from 'react'
import {  ProcessWrapper, ImageContainer, ProcessDescription } from "./style"
import Aos from "aos";
import Image from "../image"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
const ProcessCard = ({  description, reverse, content, image }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: 'DOMContentLoaded', once: true });

  }, [])
  return (

    <div>
             <ProcessWrapper data-aos="fade-up" reverse={reverse}>
        <ImageContainer noneMargin content={content}>
          <Image filename={image}style={{borderRadius:"50%"}}/>
          </ImageContainer>
        <ProcessDescription noneMargin><Trans>{description}</Trans></ProcessDescription>
      </ProcessWrapper>
    </div>
  )
}

export default ProcessCard
