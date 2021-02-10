import React from 'react'
import CircleCard from "./CircleCard"
import { List } from "./style"

const FeatureList = ({ data,product}) => {
  const Product = [
    { image: data.naire, description: "まるよし風鈴では風鈴に特別な名入れをしています。プレゼントにもおすすめです。",title:"名入れ" },
    { image: data.naire, description: "風鈴の吊るし方などこちらからどうぞ。",title:"風鈴の吊るし方"},

  ]
  const WorkshopKit = [
    { image: data.kikyou, description: "体験キット" },
    { image: data.kikyou , description: "パレット紙、筆洗い、ティッシュ"},

  ]
  const introduce = product ? Product : WorkshopKit
  return (
    <List>
      {introduce.map((item,index) => (
        <CircleCard title={item.title ? item.title : ""} key={index} data={item.image} description={item.description} content={item.content}/>
      ))}

    </List>
  )
}

export default FeatureList
