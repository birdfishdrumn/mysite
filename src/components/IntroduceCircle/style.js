import styled from "styled-components";

export const List = styled.div `
 display:grid;
 grid-template-columns:1fr 1fr ;
margin:0 auto;
text-align:center;
max-width:700px;
grid-gap:30px;

@media(max-width:767px){
  margin:0 auto;
   grid-template-columns:1fr ;
  text-align:center;
}
`


export const Circle = styled.div `
 width: 80%;

@media(max-width:767px){
 width:70%;

}
margin: 0 auto;
`