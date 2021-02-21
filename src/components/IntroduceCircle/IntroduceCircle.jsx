import React from 'react'
import CircleCard from "./CircleCard"
import { List } from "./style"

const FeatureList = ({ data,product}) => {
  const Product = [
    { image: "naire.jpg", description: "まるよし風鈴では風鈴に特別な名入れやオーダーメイドのもの受け付けております。大切なへ方のプレゼントにお勧めいたします。",title:"名入れ・オーダーメイド",link:"/ordermade" },
    { image: "fuurin_arekore.jpg", description: "風鈴の吊るし場所、割れてしまった場合、修理のことなどはこちらからどうぞ。",title:"風鈴のあれこれ",link:"/fuurinInformation"},
    { image: "huurin_box.jpg", description: "江戸風鈴は一つ一つ箱に入れて発送したり持ち帰れます。こちらではラッピングなどについてもご紹介致します。",title:"風鈴の梱包・発送",link:"/wrapping"},
  ]
  const WorkshopKit = [
    { image: "taiken_kit_contents.jpg", description: "体験キット" },
    { image: "taiken_backet.jpg" , description: "パレット紙、筆洗い、ティッシュ"},

  ]
  const introduce = product ? Product : WorkshopKit
  return (
    <List>
      {introduce.map((item,index) => (
        <CircleCard title={item.title ? item.title : ""} key={index} image={item.image} description={item.description} content={item.content} link={item.link}/>
      ))}

    </List>
  )
}

export default FeatureList
