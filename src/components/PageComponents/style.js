import styled from "styled-components";
import Img from "gatsby-image"
export const IntroduceContainer = styled.div `
 height:30%;
 width:50%;
 background: #eee;
 margin:0 auto;
 padding:50px;
display:flex;
@media(max-width:768px){
  flex-direction:column;
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
    width: 100%;

    margin:0;
  }
`
export const HistoryImage = styled(Img)
`
 width:60%;
 @media(max-width:1024px){
  margin:0 auto;
 }
`