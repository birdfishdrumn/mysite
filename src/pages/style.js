import styled from "styled-components"

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