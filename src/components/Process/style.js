import styled from "styled-components"
import Img from "gatsby-image"
import { Description } from '../../style/GlobalStyle'

export const ProcessWrapper = styled.div `
 display:flex;
justify-content:center;
margin:0 10px;
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
  width:230px;
  position:relative;
  height:auto;

       margin:${props => (props.noneMargin ? "0" : "0 auto")};
  border-radius:50%;

  &::after {
     font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
    /* content: "カービィ"; */
    /* ''で囲む必要がある */
    content:'${props => props.content}';
    font-size:1.6rem;
   top:-30px;
    left: -15px;
    z-index:999;
   font-weight:bold;
    color:black;
   -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
    padding:auto;
    /* background:black; */
    text-shadow:1px 1px 5px white;
    background: -moz-linear-gradient(to bottom,#F89174,#FFF 30%,#99CC33);
background: -webkit-linear-gradient(to bottom,#F89174,#FFF 30%,#99CC33);
background: linear-gradient(to bottom,#F89174,#FFF 50%,#99CC33);

    align-items:center;
    padding:10px 0;
    position:absolute;

    z-index:9999;
      @media(max-width:768px){
    font-size:1.3rem;

  }
  }
  @media(max-width:1024px){
    width:220px;

  }
   @media(max-width:767px){
    width:180px;

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
   width:45%;
   margin:auto 0px;
   padding:10px;
 }

`