import styled from "styled-components"

export const FooterWrapper = styled.footer`
  color: #fff;
  margin: auto 0;
  background-image: none;
  background-size: cover;
  background-color: #00695b;
  position: relative;
`

export const FooterContainer = styled.div`
  display: flex;

  flex-direction: column;
  margin: 0 auto;

  grid-template-columns: 1fr;
  > div {
    text-align: center;
    margin: auto;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  @media (min-width: 912px) {
    height: 55vh;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    > div:first-child {
      flex-basis: 45%;
      > div {
        margin-left: 20px;
      }
    }
    > div:nth-child(2) {
      flex-basis: 70%;
    }
    > div:last-child {
      flex-basis: 30%;
    }
  }
  /* 店の概要の要素 */

  @media (max-width: 912px) {
    > div:first-child {
      > div {
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
`
export const ContactIcon = styled.div`
  @media (max-width: 912px) {
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
    > div {
      text-align: center;
    }
    > p {
      margin-top: 20px;
    }
  }
`
export const SNS = styled.ul`
  margin: auto;
  list-style: none;
  font-size: 30px;
  text-align: left;
  display: ${props => props.flex && "inline-flex"};

  > li:not(last-child) {
    margin: 20px;
  }
  > li {
    /* background:${props => props.color && "black"}; */
    display: flex;

    > a {
      > span {
        font-size: 1rem;
        margin-left: 10px;
      }
    }
  }
`
export const FooterNav = styled.div`
  > ul {
    justify-content: center;
    list-style: none;

    display: flex;
    font-size: 1rem;
    text-align: center;
    color: white;
    padding-top: 10px;
    @media (max-width: 1024px) {
      font-size: 0.85rem;
    }
    @media (max-width: 912px) {
      flex-direction: column;
      text-align: center;
      font-size: 1rem;
      margin-bottom: 40px;
    }
    > li {
      margin: 15px;
      font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
      @media (max-width: 1024px) {
        margin-bottom: 6px;
      }
      @media (max-width: 912px) {
        padding-bottom: 15px;
        border-bottom: 1px solid white;
        margin: 10px 0;
      }
    }
  }
`

export const Privacy = styled.div`
  display: flex;
  cursor: pointer;
  font-family: "游明朝", "Yu Mincho", "Hiragino Mincho Pro", sans-serif;
  padding: 0px 50px 80px 130px;
  font-size: 0.8rem;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 20px 0 20px 0;
    margin: 0 auto;
    text-align: center;
  }
  > p {
    margin: 15px;
  }
`
