import styled, { css, createGlobalStyle, keyframes } from "styled-components"

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

`;

// export const TwoColumn = styled.h1 `
//   display: grid;
//   grid-gap:50px;
//   margin:0 150px 0;
//   grid-template-columns:1fr 1fr;

//   >div{
//    margin:40px;
//   }
//   >div:last-child{
//    text-align:center;
//   }

//   @media(max-width:1024px){
//     margin:10px;
//     grid-gap:10px;
//     grid-template-columns:1fr;
//      >div{
//    margin:5x;
//   }
//   }
// `

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

export const Content = styled.h1 `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
 font-weight: bold;
 margin:100px;
 text-align:center;
 font-size:3.5rem;

   @media(max-width:768px){
     margin:50px;
    font-size:2.5rem;
  }
`;


export const SubTitle = styled.div `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;;
 font-weight: bold;
 margin-bottom:0px;
 text-align:center;
 font-size:2.5rem;
 padding:30px;
`
export const Description = styled.div `
 font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;;

 font-weight:bold;
 line-height: 2em;
 padding:30px 0 30px;
 width:${props => (props.space && "60%")};
  font-size:${props => (props.large ? "1.1rem" : "1rem")};
 margin:0 auto;
 /* margin:${props => (props.both && "0 10px 0 10px")}; */
 @media(max-width:767px){
  width:80%;
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