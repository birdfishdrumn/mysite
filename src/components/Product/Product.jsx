import React from 'react'
import Img from "gatsby-image"
import {Link} from "gatsby"
import { ProductImage, Content, Image, ProductText,ProductButton,ProductDescription } from "./style";


const Product = ({img,title,description,noBtn,btnText,center,link}) => {
  return (
    <ProductImage>

     <figure >
	   <Image fluid={img} alt="製品情報"/>
      </figure>
           <div className="space-m"/>
      <ProductText large left>
        {title}

        <ProductDescription>{description}</ProductDescription>
        <Link to={link}><ProductButton noBtn={noBtn}>{btnText ? btnText : "詳しく"}</ProductButton></Link>
      </ProductText>


    </ProductImage>
  )
}

export default Product
