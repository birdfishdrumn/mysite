import React,{useEffect} from "react";
import { SubTitle, Description, ProductColumn, Figure, TextFlex } from "../../style/GlobalStyle";
import Aos from "aos"
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
import styled from "styled-components";
import Img from "gatsby-image"

const ProductImg = styled(Img)`
    /* width:90%; */
    margin:0 auto;
    @media(max-width:768px){
      width:85%;
    }
`
const TextButton = styled.div`

 padding:5px;
 width:100px;
 text-align:center;
 margin:20px auto;
  border:1px solid #ccc;
  @media(min-width:768px){
    width:35px;
 text-align:right;
 border:1px solid #ccc;
 padding:10px 0;
height:90px;
 cursor: pointer;
 transition:0.3s;
 margin:auto 20px 0 0;
 &:hover:not(:disabled){
  color:white;
  background:black;
  border:1px solid rgba(0,0,0,0);
  }
}
`

const Product = ({data,description,title,destination,num,reverse,isEn}) => {
 useEffect(() => {
    Aos.init({ duration: 1000, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (
       <ProductColumn  data-aos="fade-up" reverse={reverse}>
          <div>
            <Figure  >
              <ProductImg
                fluid={data.childImageSharp.fluid}
                alt=""
              />
            </Figure>
            </div>
      <TextFlex isEn>
        <div>
        <Description style={{width:"auto"}} left >
          <Trans>{description}</Trans>


        </Description >
          <Link to={destination} state={{ number: num }}><TextButton><Trans>詳しく見る</Trans></TextButton></Link>
          </div>
                <SubTitle hannari noSpace border>
                <Trans>{title}</Trans>
            </SubTitle>
          </TextFlex>
        </ProductColumn>
  )
}

export default Product


      //  <ProductColumn   reverse={reverse}>
      //     <div>
      //       <Figure  data-aos="fade-up">
      //         <ProductImg
      //           fluid={data.childImageSharp.fluid}
      //           alt=""
      //         />
      //       </Figure>
      //       </div>
      //     <TextFlex isEn>
      //   <Description left >
      //     <Trans>{description}</Trans>

      //           <Link to={destination} state={{ number: num}}><TextButton><Trans>詳しく見る</Trans></TextButton></Link>
      //       </Description >
      //           <SubTitle hannari noSpace border>
      //           <Trans>{title}</Trans>
      //       </SubTitle>
      //     </TextFlex>
      //   </ProductColumn>
