import styled from "styled-components";

export const List = styled.div `
 display:grid;
 grid-template-columns:1fr 1fr 1fr;
margin:0 auto;
text-align:center;
max-width:1100px;

@media(max-width:1024px){
  grid-template-columns:1fr;
  margin:0 auto;
  text-align:center;
}

`