import React from 'react'
import ProductCard from "../ProductCard/ProductCard";
import { GridCard } from "./style";


const CardList = () => {

  const data = [{
    title:"オンラインショップ"
  }, {
    title:"体験学習"
    }, {
    title:"商品の紹介"
  }]

  return (
    <GridCard>
      {data.map((p) => (
        <ProductCard title={p.title}/>
      ))}
    </GridCard>
  )
}

export default CardList
