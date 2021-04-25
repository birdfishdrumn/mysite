import styled from "styled-components"

export const Article = styled.article`
  display: flex;
  max-width: 800px;
  justify-content: center;
  > div:last-child {
    padding: 0px 10px 10px 30px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    > div:first-child {
      margin: 0 auto;
    }
  }
`

export const Time = styled.time`
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  color: dimgray;
  text-align: left;
  margin-left: 0;
  padding-left: 0;
`

export const PostFigure = styled.figure`
  max-height: 100%;
  height: 150px;
  width: 200px;
  @media (max-width: 767px) {
    width: 80%;
  }
`
export const PostImage = styled.div`
  height: 150px;
  object-fit: cover;
`
