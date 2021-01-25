import React from 'react'
import Img from "gatsby-image"

import { ProductImage, Content, Image, ProductText,ProductButton,ProductDescription } from "./style";


const Product = ({img,title,description,noBtn}) => {
  return (
    <ProductImage>

     <figure>
	   <Image fluid={img} alt="製品情報"/>
        </figure>
      <ProductText large left>
        {title}
        <ProductDescription>{description}</ProductDescription>
           <ProductButton noBtn={noBtn}>詳しく</ProductButton>
      </ProductText>


    </ProductImage>
  )
}

export default Product
