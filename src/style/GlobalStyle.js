import styled, { css } from "styled-components"
import Img from "gatsby-image"
// ==========テキストデザイン===========

export const Content = styled.h1 `
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  font-weight: bold;
  margin: 100px;
  text-align: center;
  font-size: 3.5rem;

  @media (max-width: 768px) {
    margin: 50px;
    font-size: 2rem;
  }
`

export const Title = styled.h1 `
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
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
  @media (max-width: 767px) {
    font-size: 1.7rem;
  }
`

export const Nav = styled.ul `
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  font-weight: normal;
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  padding: 30px;
  max-width: ${props => (props.min ? "550px" : "824px")};
  /* @media(max-width:767px){
  w
 } */
  > li {
    margin: ${props => (props.noSpace ? "0" : "15px 0 15px")};
    font-weight: bold;

    text-align: ${props => (props.left ? "left" : "center")};
    list-style: ${props => props.square && "square"};
    color: ${props => props.grey && "dimgrey"};
    font-size: ${props => (props.small ? "1.2rem" : "1.7rem")};
    @media (max-width: 767px) {
      /* font-size:1.7rem; */
      width: 100%;
    }
  }
  > p {
    font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
    display: inline-block;
    font-size: 1.1rem;
    text-align: ${props => (props.left ? "left" : "center")};
    color: grey;
    margin-bottom: 10px;
    padding: 0;
    width: 80%;
    line-height: 1.8em;
    /* margin:10px; */
    @media (max-width: 767px) {
      width: 100%;
      font-size: 1rem;
    }
  }
`

export const SubTitle = styled.div `
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  font-weight: bold;
  margin-bottom: 0px;

  color: ${props => (props.white ? "white" : "black")};
  text-align: ${props => (props.left ? "left" : "center")};
  font-size: ${props => (props.small ? "1.8rem" : "2.35rem")};
  border: ${props => props.border && "1px solid black"};

  text-shadow: ${props => props.shadow && "1px 1px 2px black"};
  padding: ${props => (props.noSpace ? "10px 0 10px" : "30px")};
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`

export const MinDescription = styled.p `
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  padding: 5px 0 5px;
  color: gray;
`

export const Description = styled.div `
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  text-align: ${props => (props.left ? "left" : "center")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  line-height: 1.7em;
  text-shadow: ${props => props.shadow && "1px 1px 2px black"};
  padding: ${props => (props.padding ? "30px 0 30px" : "10px 0 10px")};

  ${props => {
    switch (props.width) {
      case "half":
        return `width:50% !important;`
      case "more":
        return `width:70% !important;`
    }
    return "width:100%;"
  }};
  @media (max-width: 767px) {
    ${props => {
      switch (props.width) {
        case "half":
          return `width:80% !important;`
        case "more":
          return `width:70% !important;`
      }
      return "width:100%;"
    }};
  }
  font-size: ${props => (props.large ? "1.1rem" : "1rem")};
  margin: ${props => (props.noneMargin ? "auto 0" : "0 auto")};
  ${props => {
    switch (props.color) {
      case "white":
        return `color: white;`
      case "black":
        return `color:black;`
    }
    return "color:gray;"
  }};
  /* margin:${props => props.both && "0 10px 0 10px"}; */
  @media (max-width: 767px) {
    width: 90%;
    font-size: ${props => props.small && "0.8rem"};
  }
`

export const ImageText = styled.div`
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  font-weight: bold;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;

  height: 390px;
  font-size: ${props => (props.large ? "1.4rem" : "1.5rem")};
  position: absolute;
  top: -15rem;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 500px auto 10%;
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  text-align: ${props => (props.left ? "left" : "center")};
  color: #fff;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  @media (max-width: 767px) {
    font-size: 1.1rem;
    top: -27rem;
  }
`

export const MinTitle = styled.div`
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  font-weight: bold;
  ${props =>
    props.border &&
    `
  border-bottom:3px solid #ccc;
 display:inline-block;
 padding-bottom:10px;
 `}
  ${props =>
    props.borderLeft &&
    `
   border-left:6px solid black;
    padding-left:10px;
 `}
 color:${props => props.black && "black"};

  text-align: ${props => (props.left ? "left" : "center")};
  font-size: ${props => (props.large ? "1.8rem" : "1.5rem")};
  margin: 10px auto;
  ${props =>
    props.first &&
    `::first-letter{
   font-size:2.8rem;
 }`}
  @media(max-width:767px) {
    font-size: ${props => props.small && "1.1rem"};
  }
  position: relative;
  ${props =>
    props.custom &&
    `
    display:inline-block;
  color: black;/*文字色*/
  padding: 0.5em 0;/*上下の余白*/
  border-top: solid 3px #ccc;/*上線*/
  border-bottom: solid 3px #ccc;/*下線*/
  // background: #ccc;
  padding-left:10px;
  padding-right:10px;
 `}
`
// ==========テキストデザイン===========

// ------------- レイアウト--------------------
export const ProductTitle = styled.div`
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: left;
  height: 75%;
  line-height: 2rem;
  font-size: ${props => (props.small ? "1.8rem" : "2.2rem")};
  border: ${props => props.border && "1px solid black"};
  padding: 10px;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`

export const TextFlex = styled.div`
  display: flex;
  width: 80%;
  height: 270px;
  /* -ms-writing-mode: tb-rl;
   writing-mode: vertical-rl; */
  @media (max-width: 767px) {
    width: 87%;
  }
  > div:first-child {
    @media (min-width: 768px) {
      flex-basis: 75%;
      line-height: 2.2rem;
      height: 300px;
      margin: 0 40px;
      -ms-writing-mode: tb-rl;
      writing-mode: vertical-rl;
      text-align: left;
      width: 100%;
    }
    margin: 0 auto;
    width: 70%;
    height: 250px;
  }
  > div:last-child {
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    /* flex-basis: 10%; */
    /* width:50px; */
    /* margin:auto 0; */
    height: 250px;
    @media (max-width: 768px) {
      /* text-align:left; */
      font-size: 2rem;
      height: 60%;
      padding: 13px 5px 13px;
      margin-left: 20px;
      width: 50px;
    }
  }
`

export const DescriptionFlex = styled.div`
  display: flex;
  /* width:80%; */
  flex-direction: ${props => props.reverse && "row-reverse"};
  ${props =>
    props.hikawa &&
    `
    flex-direction:row-reverse;
 `}
  @media(max-width:767px) {
    /* width:87%; */
  }
  > div:first-child {
    @media (min-width: 768px) {
      flex-basis: 75%;
      line-height: 2.2rem;
      height: 500px;
      margin: auto 40px;
      text-align: left;
      width: 100%;
    }
    margin: 0 auto;
    width: 70%;
  }
  > div:last-child {
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    font-size: 2.9rem;
    height: 400px;
    text-align: left;
    margin: ${props =>
      props.reverse ? "0 0 0 auto" : "0 auto 0 0"} !important;
    ${props =>
      props.hikawa &&
      `
   margin: 0 0 0 20px !important;
   height:600px;
 `}
    @media(max-width:768px) {
      /* text-align:left; */
      font-size: 2.6rem;

      /* padding:13px 5px 13px; */
      /* width:50px; */
    }
  }
`

export const TwoColumn = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  > div {
    margin: 40px;
    @media (max-width: 767px) {
      margin: 5px;
    }
  }
  > div:first-child {
    @media (max-width: 1024px) {
    }
    @media (max-width: 767px) {
      order: ${props => props.reverse && 2};
    }
  }
  > div:last-child {
    text-align: center;
    margin: auto 0;
    @media (max-width: 767px) {
      margin: 5px;
      order: ${props => props.reverse && 1};
    }
  }

  @media (max-width: 767px) {
    margin: 10px;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    > div {
      margin: 5x;
    }
  }
`

export const ProductColumn = styled.div`
  display: grid;
  /* grid-gap:0px; */
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  /* max-width:807px; */
  max-width: ${props => (props.more ? "1024px" : "857px")};
  > div {
    ${props => {
      switch (props.margin) {
        case "left":
          return `margin:0 20px 20px 0 !important;`
        case "right":
          return `margin:0 0 20px 20px !important;`
      }
    }};
  }
  > div:first-child {
    @media (min-width: 768px) {
      width: 90%;
      margin: auto;
      order: ${props => (props.reverse ? 2 : 1)};
    }
    margin-bottom: 20px;
    order: ${props => props.responsive && 2};
  }
  > div:last-child {
    margin: auto;
    text-align: center;
    @media (min-width: 768px) {
      order: ${props => (props.reverse ? 1 : 2)};
    }
    order: ${props => props.responsive && 1};
    margin-bottom: ${props => props.responsive && "20px"};
  }
  @media (max-width: 767px) {
    /* grid-gap:0px; */
    grid-template-columns: 1fr;
    width: 100%;
    > div:first-child {
      @media (max-width: 767px) {
        /* justify-content:center; */
      }
    }
  }
  @media (max-width: 380px) {
    /* grid-gap:0px; */
    grid-template-columns: 1fr;
    width: 100%;
  }
`

export const MaxTwoColumn = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  max-width: ${props => (props.little ? "1224px" : "100%")};

  > div {
    margin: 0px;
  }
  > div:last-child {
    text-align: center;
    /* height:100%; */
    margin: ${props => props.auto && "auto 0"};
  }

  @media (max-width: 1024px) {
    margin: 10px auto;
    grid-gap: 10px;
    grid-template-columns: 1fr;

    > div {
      margin: 0px;
    }
  }
  > div:first-child {
    margin: ${props => props.auto && "auto 0"};
    @media (max-width: 1024px) {
      order: ${props => props.reverse && 2};
    }
  }
  > div:last-child {
    text-align: center;
    @media (max-width: 1024px) {
      margin: 0px;
      order: ${props => props.reverse && 1};
    }
  }
`

export const ListColumn = styled.div`
  display: flex;
  max-width: 880px;

  margin: 0 auto;
  > div:first-child {
    flex-basis: 25%;
    margin: 0 auto;
  }
  > div:last-child {
    margin: 0 auto;
    flex-basis: 60%;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    > div:first-child {
      width: 80%;
      margin: 30px auto 30px;
    }
  }
`

export const Scroll = styled.figure`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`
export const ScrollItem = styled.li`
  display: inline-block;
`

//---------- grid---------------

export const GridContainer = styled.div`
  display: grid;
  padding: 10px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  width: 700px;

  margin: 0 auto;
  @media (max-width: 768px) {
    width: auto;
    text-align: center;
  }
`

export const ItemA = styled.div`
  padding: 5px;
  font-size: 30px;
  text-align: center;
  grid-row: 1/3;
  grid-column: 1/2;
`

export const ItemB = styled.div`
  padding: 5px;
  font-size: 30px;
  text-align: center;
  grid-row: 1/3;
  grid-column: 2/3;
`

export const ItemC = styled.div`
  padding: 5px;
  font-size: 30px;
  text-align: center;
  grid-row: 2/3;
  grid-column: 2/3;
  /* background: #88f; */
`

export const GridList = styled.figure`
  ${({ change }) =>
    change
      ? `

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
  `};
  grid-gap: ${props => props.gap && "20px"};
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: ${props => (props.single ? "1fr" : "1fr 1fr")};
    margin: 0;
  }
`
// ---------grid-------------
export const FlexNav = styled.nav`
  text-align: center;
  display: inline-block;
  font-weight: bold;
  margin: ${props => (props.small ? "5px auto" : "30px auto")};
  list-style: none;
  display: flex;
  color: ${props => (props.white ? "white" : "grey")};
  flex-wrap: wrap;
  justify-content: center;
  > li {
    margin: 20px;
  }
`

export const FlexNavLi = styled.li`
  color: ${props => props.active === "true" && "red"};
`
// ------------- レイアウト--------------------

export const Allow = styled.div`
  margin: 0 auto;
  position: relative;
  height: 16px;
  width: 16px;
  background-color: #697b91;
  :before {
    position: absolute;
    content: "";
    border: solid 16px transparent;
    border-left: solid 16px #697b91;
    top: 16px;
    left: -8px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`

export const Featured = styled.section`
  margin: 0;
`

export const News = styled.section`
  background: #eee;
  text-align: center;
  margin: 0 auto;

  padding-bottom: 30px;
`

export const Gallery = styled.div`
  margin: 0 5% 0;
`

export const Figure = styled.figure`
  margin: 0;
`

export const Youtube = styled.iframe`
  width: 560px;
  height: 310px;
  @media (max-width: 767px) {
    width: 98%;
  }
`

export const StyledImage = styled(Img)`
 width:500px;
 height:400px;
 object-fit:cover;
 @media(max-width:768px){
   width:100%;
 }
`
/* ===============================================
#  set css variables
=============================================== */
// function setColor() {
//     let styles = ""
//     for (const key in colors) {
//         styles += `--${key}: ${colors[key]};`
//     }
//     return css `
//     :root {
//       ${styles}
//       --width: ${size.width};
//       --topHeight: ${size.topHeight};
//     }
//   `
// }

/* ===============================================
#  font setting
=============================================== */
// const font = css `
//   font-family: -apple-system, system-ui, "Helvetica Neue", "Segoe UI",
//     "Hiragino Kaku Gothic ProN", "Hiragino Sans", "ヒラギノ角ゴ ProN W3", Arial,
//     メイリオ, Meiryo, sans-serif;
//   word-wrap: break-word;
//   word-break: break-all;
//   -moz-font-feature-settings: "palt";
//   -webkit-font-feature-settings: "palt";
//   font-feature-settings: "palt";
//   font-variant-ligatures: no-common-ligatures;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-rendering: auto;
//   -webkit-text-stroke: 1px transparent;
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//   letter-spacing: 0.05rem;
//   font-weight: 400;
//   color: var(--text);
// `

/* ===============================================
#  global style
=============================================== */
// const GlobalStyle = createGlobalStyle `
/* ${setColor}
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
  } */

/* ===============================================
  # smart phone
//   =============================================== */
//   @media screen and (max-width: 780px) {
//     html, body {
//       font-size: 15px;
//     }
//     .pc {
//       display: none !important;
//     }
//   }

//   /* ===============================================
//   # pc
//   =============================================== */
//   @media screen and (min-width: 781px) {
//     .sp {
//       display: none !important;
//     }
//   }
// `

// export default GlobalStyle