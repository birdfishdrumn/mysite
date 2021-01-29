import React from "react";
import Img from "gatsby-image"
import styled from "styled-components"
import { Description,MinTitle} from "../../style/GlobalStyle";

const WindBellWrapper = styled.div`
 height:auto;
      width: 250px;
      margin:0 auto;
      text-align:center;
       @media(max-width:767px){
    width: 85%;


  }
`
const WindBellImage = styled(Img)`
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


const WindBellCard = ({windBellImage,name,description,src,change}) =>{
  return (
    <WindBellWrapper>
   {change ? <img src={src}/> : <WindBellImage fluid={windBellImage} /> }


      <MinTitle>{name}</MinTitle>
      <Description color="grey" small>{description}</Description>
   </WindBellWrapper>
 )
}

export default WindBellCard;
