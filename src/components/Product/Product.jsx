import React,{useEffect} from "react";
import { SubTitle, Description, ProductColumn, Figure, TextFlex } from "../../style/GlobalStyle";
import Aos from "aos"
import styled from "styled-components";
import Img from "gatsby-image"
import {graphql,Link} from "gatsby"
const ProductImg = styled(Img)`
    /* width:90%; */
    margin:0 auto;
`
const TextButton = styled.div`
 text-align:right;
 border:1px solid #ccc;
 padding:10px 0;
height:90px;
 cursor: pointer;
 transition:0.3s;
 margin:auto auto 0 0;
 &:hover:not(:disabled){
  color:white;
  background:black;
  border:1px solid rgba(0,0,0,0)
}
`


const Product = ({data,description,title,destination,num,reverse}) => {
 useEffect(() => {
    Aos.init({ duration: 1000, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (
       <ProductColumn reverse={reverse}>
          <div>
            <Figure  data-aos="fade-up">
              <ProductImg
                fluid={data.childImageSharp.fluid}
                alt=""
              />
            </Figure>
            </div>
          <TextFlex>
        <Description>
          {description}
                {/* 風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。
              */}
                <Link to={destination} state={{ number: num}}><TextButton>詳しく見る</TextButton></Link>
            </Description>
                <SubTitle hannari noSpace border>
                {title}
            </SubTitle>
          </TextFlex>
        </ProductColumn>
  )
}

export default Product
