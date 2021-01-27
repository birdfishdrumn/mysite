import styled from "styled-components"
import Img from "gatsby-image"
import { Button } from "../Button";
import { Description } from "../../style/GlobalStyle";
export const ProductImage = styled.div `
 margin:0 5% 20px;
 position:relative;
    @media(max-width:767px){
    margin:0;
    }
`;

export const Image = styled(Img)
`
height:460px;

  object-fit:cover;
  @media(max-width:767px){
    width:100%;
    height:auto;

  }
`;
export const Content = styled.div `
    padding:20px;
      padding: 5px 10px;
      background:white;
      border: 1px solid black;
      font-weight: bold;
      font-size:16px;
      text-transform:uppercase;
      display:inline-block;
      color:black;
      text-decoration:none;
     cursor:pointer;
      &:hover{
        color:white;
        background: black;
      }
`;

// top,bottomに数値をくわえると文字部分が下に下がる。
export const ProductText = styled.div `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
 font-weight: bold;
 font-size:3.0em;
     position: absolute;
    top: 70px;
    right: 0;
    bottom:0;
    left: 0;
    margin: auto auto 10%;
    display: flex;
    padding-left:15%;
    flex-direction: column;
    justify-content: center;
    text-align:${props =>(props.left ? "left" : "center")} ;
    color: black;
    @media(max-width:767px){
          top: 10px;
        margin: auto auto 0 20px;
      font-size:1.2em;
      padding:10px;
    }
    /* text-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */

`
export const ProductButton = styled(Button)
`
  display:${props=>(props.noBtn && "none")};
  width:100px;
  background:transparent;
   @media(max-width:767px){
    width:70px;
    line-height:2px;
    font-size:1rem;
    }
`
export const ProductDescription = styled(Description)
`
font-size:1.3rem;
margin:0;
  width:40%;
 @media(max-width:767px){
      font-size:0.7em;
      line-height: 1.2em;
      width:50%;
      font-wight:lighter;
      padding:10px 0 10px;
    }
`