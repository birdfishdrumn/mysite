import styled from "styled-components";
import Img from "gatsby-image"

export const NewsImage = styled(Img)
`
 width:150px;
 height:150px;
 object-fit:cover;


`

export const ListCard = styled.div `
 display:inline-block;
  width:80%;
  text-align:center;

  background:white;
  height:150px;
  display:flex;
  margin:20px auto;
  @media(max-width:768px){
    width:100%;
  }
  >div:last-child{
    padding:20px;
    >p{
      color:grey;
      font-size:0.9rem;
    }
  }

`