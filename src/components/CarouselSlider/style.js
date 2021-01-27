import styled from "styled-components";
import Img from "gatsby-image"

export const Image = styled(Img)
`
height:460px;
  margin:0 5% 0;
  object-fit:cover;
  @media(max-width:767px){
    width:100%;
    height:auto;
  margin:0;
  }

`;