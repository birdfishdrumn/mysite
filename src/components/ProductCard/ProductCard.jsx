import React from "react"

import { Link } from "gatsby"
import {
  ProductImage,
  Image,
  ProductText,
  ProductButton,
  ProductDescription,
} from "./style"

const ProductCard = ({ title, description, link, noBtn, btnText, img }) => {
  return (
    <ProductImage>
      <figure>
        <Image fluid={img} alt="製品情報" />
      </figure>

      <ProductText>
        {title}

        <ProductDescription>{description}</ProductDescription>
        <Link to={link}>
          <ProductButton noBtn={noBtn}>
            {btnText ? btnText : "詳しく"}
          </ProductButton>
        </Link>
      </ProductText>
    </ProductImage>
  )
}

export default ProductCard
