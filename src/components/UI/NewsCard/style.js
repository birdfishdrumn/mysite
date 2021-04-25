import styled from "styled-components"
import Img from "gatsby-image"

export const NewsImage = styled(Img)`
  width: 150px;
  height: 150px;
  object-fit: cover;
`

export const Information = styled.div`
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  padding-bottom: 10px;
  text-align: center;

  > dl {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    text-align: left;
    @media (min-width: 768px) {
      display: flex;
      max-width: 800px;
      margin: 0 auto;
    }
  }
  > dt {
    padding-bottom: 6px;
    @media (min-width: 768px) {
      width: 22%;
    }
  }
`

export const InfoTitle = styled.div`
  margin-left: 5%;
  @media (max-width: 768px) {
    /* margin-left:0; */
  }
`
