import styled from "styled-components";
import Img from "gatsby-image"
import { Description } from "../../style/GlobalStyle";
export const IntroduceContainer = styled.div `
 height:30%;
max-width:700px;
 background: #eee;
 margin:0 auto;
 padding:30px;
display:flex;
>div:last-child{
  margin:0 auto;
}
@media(max-width:768px){
  flex-direction:column;

  margin:0 20px;
}

`
export const FamilyImage = styled(Img)
`
  height:auto;
  width:250px;
  height:auto;
       margin:0 auto;
  border-radius:50%;
  @media(max-width:1024px){
    width:220px;

  }
   @media(max-width:767px){
    width: 220px;

    margin:0 auto;
  }
`
export const HistoryImage = styled(Img)
`margin:auto;
 width:80%;
 @media(max-width:1024px){
  margin:0 auto;
 }
`

export const FamilyDescription = styled(Description)
`
 align-items:center;
 margin:auto;

 padding:40px 20px 0;
 @media(min-width:768px){
   width:80%;

 }

`