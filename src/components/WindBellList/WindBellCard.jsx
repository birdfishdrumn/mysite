import React from "react";
import Img from "gatsby-image"
import styled from "styled-components"
import { Description,MinTitle} from "../../style/GlobalStyle";

const WindBellWrapper = styled.div`
 height:auto;
      width: 250px;
      margin:10px auto;
      text-align:center;
       @media(max-width:767px){
    width: 90%;


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
const ScrollImage = styled(Img)`
   height:350px;

   margin:10px;
   @media(max-width:768px){
  width:200px;
   }
`

const WindBellCard = ({windBellImage,name,description,allImage,change,key}) =>{
  return (
    <WindBellWrapper key={key}>
      {change ? <ScrollImage fluid={allImage}/> : <WindBellImage fluid={windBellImage} /> }


      {!change && <><MinTitle hannari>{name}</MinTitle>
        <Description left color="grey" small>{description}</Description>
       </>
      }
   </WindBellWrapper>
 )
}

export default WindBellCard;
