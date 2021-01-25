import styled from "styled-components";

export const List = styled.div `
 display:grid;
 grid-template-columns:1fr 1fr 1fr;
margin:0 auto;
text-align:center;

@media(max-width:1024px){
  grid-template-columns:1fr;
  margin:0 auto;
  text-align:center;
}

`