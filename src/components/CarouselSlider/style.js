import styled from "styled-components";
import Img from "gatsby-image"

export const CarouselImage = styled(Img)
`
height:460px;
  margin:0 auto;
  max-width:1000px;
  object-fit:cover;
  @media(max-width:767px){
    width:100%;
    height:auto;
  margin:0;
  }

`;