import styled from "styled-components"
import Img from "gatsby-image"
import { Description } from '../../style/GlobalStyle'

export const ProcessWrapper = styled.div `
 display:flex;
justify-content:center;

 margin-bottom:60px;
 @media(max-width:768px){
 flex-direction:${props => (props.reverse && "row-reverse")};

 }


`;
export const ProcessGrid = styled.div `
 display:grid;
 grid-template-columns:1fr;
 grid-gap:0px;
 max-width:1024px;
 margin:0 auto;
`
export const ImageContainer = styled.div `
  height:auto;
  width:220px;
  position:relative;
  height:auto;

       margin:${props => (props.noneMargin ? "0" : "0 auto")};
  border-radius:50%;

  &::after {
     font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
    content: ${props=>(props.content)};
    font-size:1.9rem;
   top:0;
    left: 0;
    z-index:999;
    background:black;
    color:white;
    width:50px;
    height:50px;
    padding:auto;
    align-items:center;
    border-radius:50%;
    position:absolute;

    z-index:9999;
  }
  @media(max-width:1024px){
    width:220px;

  }
   @media(max-width:767px){
    width:160px;

    margin:auto 30px;

  }
`

export const ProcessDescription = styled(Description)
`
 ::first-letter{
   font-size:2.5rem;
 }
 text-align:left;
font-size:1.2rem;
 margin:auto 60px;
 align-items:center;
 width:50%;
 @media(max-width:768px){
   font-size:1rem;
   width:40%;
   margin:auto 0px;
   padding:10px;
 }

`