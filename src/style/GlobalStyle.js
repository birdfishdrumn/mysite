import styled, { css, createGlobalStyle, keyframes } from "styled-components"
import Img from "gatsby";
import { rgba } from "polished"

/* ===============================================
#  color setting
=============================================== */
export const colors = {}

colors.background = "#fffeff"
colors.text = "#617e8c"

colors.paleGray = "#f9f9f9"
colors.lightGray = "#ddd"
colors.gray = "#96acb3"

colors.primaryPurple = "#9E69D7"
colors.primary = "#FA96BB"
colors.primaryLight = rgba("#FA96BB", 0.15)
colors.primaryPale = rgba("#FA96BB", 0.07)

colors.secondary = "#FFB238"
colors.danger = "#FF5C55"
colors.success = "#4FCE7A"
colors.warn = "#feaa2e"
colors.info = "#2490eb"

/* ===============================================
#  other variables
=============================================== */

export const fadeIn = keyframes `
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

export const fadeOut = keyframes `
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
  }
`

export const size = {
    width: "800px",
    topHeight: "370px",
}

// ==========テキストデザイン===========

export const Content = styled.h1 `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
 font-weight: bold;
 margin:100px;
 text-align:center;
 font-size:3.5rem;

   @media(max-width:768px){
     margin:50px;
    font-size:2.0rem;
  }
`;



export const Title = styled.h1 `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
 font-weight: bold;
     position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto auto 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
     @media(max-width:767px){
 font-size:1.7rem;
   }
`;


export const Nav = styled.ul `
   font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;;
 font-weight: normal;
 margin:0 auto;
 text-align:center;
 font-size:1.8rem;
 padding:30px;
 list-style:none;
  @media(max-width:767px){
　　font-size:1.4rem;
   }
 >li{
  margin:10px;
    text-align:center;
 }
 >p{
   display:inline-block;
   font-size:1.2rem;
    text-align:center;
   color:grey;
  width:60%;
   margin:10px;
   @media(max-width:767px){
width:90%;
 font-size:1.1rem;
   }
 }
`


export const SubTitle = styled.div `
 font-family:${props =>(props.hannari ? "はんなり明朝" :"'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif")};
 font-weight: bold;
 margin-bottom:0px;
 text-align:center;
 font-size:${props=>(props.small ? "1.8rem" : "2.2rem")};
 border:${props=>(props.border && "1px solid black")};
 padding:${props => (props.noSpace ? "10px" : "30px")};
 @media(max-width:768px){
   font-size:1.7rem;
 }
`



export const Description = styled.div `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;;
text-align:${props => (props.left ? "left" : "center")};
 font-weight:normal;
 line-height: 1.8em;
 padding:${props => (props.padding ? "30px 0 30px" : "10px 0 10px")};

  ${props => {
  switch (props.width) {
    case "half":
      return `width:50%;`
    case "more":
      return  `width:70%;`
  }
  return "width:100%;"
 }};
  font-size:${props => (props.large ? "1.4rem" : "1rem")};
 margin:${props => (props.noneMargin ? "0" : "0 auto")};
 ${props => {
  switch (props.color) {
    case "white":
      return `color: white;`
    case "black":
      return  `color:black;`
  }
  return "color:gray;"
 }};
 /* margin:${props => (props.both && "0 10px 0 10px")}; */
 @media(max-width:767px){
  width:90%;
  font-size:${props => (props.small &&  "0.8rem")};
 }
`


export const ImageText = styled.div `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
 font-weight: bold;
 font-size:${props =>(props.large ? "1.4rem" : "3.5rem")};
     position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto auto 10%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    text-align:${props =>(props.left ? "left" : "center")} ;
    color: #fff;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`
export const MinTitle = styled.div `
  font-family:${props =>(props.hannari ? "はんなり明朝" :"'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif")};
 font-weight: bold;
 font-size:1.5rem;
 margin:10px;
  `
    // ==========テキストデザイン===========


// ------------- レイアウト--------------------

export const TextFlex = styled.div`
  display:flex;
  width:80%;
     height:300px;
  >div:first-child{
    flex-basis: 75%;
    line-height:2.2rem;
    /* height:300px; */
    margin:0 40px;
     -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align:left;
  }
  >div:last-child{
    font-size:2.0rem;
    height:80%;
    padding:10px;
    flex-basis: 10%;
    @media(max-width:768px){

    }
  }
`

export const TwoColumn = styled.div `
   display: grid;
   grid-gap:50px;
   margin:0 10% 0;
   grid-template-columns:1fr 1fr;
   max-width:1000px;
   >div{
    margin:40px;
   }
   >div:last-child{
    text-align:center;
   }

   @media(max-width:1024px){
     margin:10px;
     grid-gap:10px;
     grid-template-columns:1fr;
      >div{
    margin:5x;
   }
   }
`
export const ProductColumn = styled.div `
   display: grid;
   grid-gap:0px;
   margin:0 auto;
   grid-template-columns:1fr 1fr;
   max-width:808px;
   >div{
    margin:20px;

   }
   >div:first-child{
      @media(min-width:768px){
         order:${props=>props.reverse ? 2 : 1};
    }

   }
   >div:last-child{
    text-align:center;
    @media(min-width:768px){
  order:${props => props.reverse ? 1 : 2};

    }

   }

   @media(max-width:768px){
     margin:10px;
     grid-gap:0px;
     grid-template-columns:1fr;

      >div{
    margin:5x;
   }
   }
`

export const MaxTwoColumn = styled.h1 `
   display: grid;
   grid-gap:50px;
   margin:0;
   grid-template-columns:1fr 1fr;
   max-width:100%;
   >div{
    margin:0px;
   }
   >div:last-child{
    text-align:center;

   }

   @media(max-width:1024px){
     margin:10px auto;
     grid-gap:10px;
     grid-template-columns:1fr;

      >div{
    margin:5x;
   }
   }
`

export const Scroll = styled.figure `
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
`
export const ScrollItem = styled.li `
     display: inline-block;
`

export const GridList = styled.figure `

  ${({ change }) => change ? `

   @media(max-width:767px){
    overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
   }
  `

  : `

 display:grid;
 grid-template-columns:1fr 1fr 1fr;
 grid-gap:0px;
 max-width:1024px;
 text-align:center;
 margin:0 auto;
  `

  };
 @media(max-width:1024px){
 grid-template-columns:1fr 1fr 1fr;
 }
 @media(max-width:767px){
 grid-template-columns:1fr 1fr;
 margin:0;
 }
`
export const FlexNav = styled.nav`

text-align:center;
display:inline-block;
margin:${props => (props.small ? "10px auto" : "30px auto")};
list-style:none;
 display:flex;
 color:grey;
  flex-wrap: wrap;
  justify-content:center;
  >li{
    margin:20px;
  }
`


// ------------- レイアウト--------------------

export const Featured = styled.section `
  margin:0;
`;

export const News = styled.section `
 background: #eee;
 text-align:center;
 margin:0 auto;

 padding-bottom:30px;
`;

export const Gallery = styled.div `
 margin:0 5% 0;

`


export const Figure = styled.figure `
 margin:0;
`


export const SpaceS = styled.div `
 margin: 10px 0 10px 0;
  `
export const SpaceM = styled.div `
    margin: 30 px 0 30 px 0;
  `
export const SpaceL = styled.div `
 margin: 50 px 0 50 px 0;
  `;
export const PaddingS = styled.div `
padding: 20 px 0 20 px;
  `;

export const PaddingM = styled.div `
 padding: 50 px 0 50 px;
  `;


/* ===============================================
#  set css variables
=============================================== */
function setColor() {
    let styles = ""
    for (const key in colors) {
        styles += `--${key}: ${colors[key]};`
    }
    return css `
    :root {
      ${styles}
      --width: ${size.width};
      --topHeight: ${size.topHeight};
    }
  `
}

/* ===============================================
#  font setting
=============================================== */
const font = css `
  font-family: -apple-system, system-ui, "Helvetica Neue", "Segoe UI",
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "ヒラギノ角ゴ ProN W3", Arial,
    メイリオ, Meiryo, sans-serif;
  word-wrap: break-word;
  word-break: break-all;
  -moz-font-feature-settings: "palt";
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: auto;
  -webkit-text-stroke: 1px transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  letter-spacing: 0.05rem;
  font-weight: 400;
  color: var(--text);
`

/* ===============================================
#  global style
=============================================== */
const GlobalStyle = createGlobalStyle `
  ${setColor}
  html {
    font-size: 16px;
  }
  body {
    ${font}
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    position: relative;
    background: var(--background);
    a {
      color: var(--text);
    }
  }
  * {
    box-sizing: boreder-box;
    margin: 0;
    padding: 0;

  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  input, button, textarea, button, select {
    ${font}
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    line-height: 1.5;
    font-size: 16px;
    -webkit-appearance: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  ::selection {
    background: rgba(255, 250, 118, 0.35);
  }

  /* ===============================================
  # smart phone
  =============================================== */
  @media screen and (max-width: 780px) {
    html, body {
      font-size: 15px;
    }
    .pc {
      display: none !important;
    }
  }

  /* ===============================================
  # pc
  =============================================== */
  @media screen and (min-width: 781px) {
    .sp {
      display: none !important;
    }
  }
`

export default GlobalStyle