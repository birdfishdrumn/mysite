import styled from "styled-components"
import { Description } from "../../style/GlobalStyle"

export const IntroduceContainer = styled.div`
  height: 30%;
  max-width: 700px;

  /* border:3px solid black; */
  margin: 0 auto;
  padding: 5px;
  display: flex;
  > div:last-child {
    margin: 0 auto;
    width: 80%;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    margin: 0 5px;
  }
`
export const IntroduceAnimal = styled.div`
  height: 30%;
  max-width: 295px;

  /* border:3px solid black; */
  margin: 0 30px;
  padding: 30px;

  > div:last-child {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    margin: 0 20px;
  }
`

export const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin: 0;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const FamilyImage = styled.div`
  width: 250px !important;

  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 220px;
  }
  @media (max-width: 767px) {
    width: 220px;

    margin: 0 auto;
  }
`
export const HistoryImage = styled.div`
  margin: auto;
  width: 80%;
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`

export const FamilyDescription = styled(Description)`
  align-items: center;
  margin: auto;
  width: 100%;
  padding: 40px 0px 0;
  @media (min-width: 768px) {
    width: 80%;
  }
`
