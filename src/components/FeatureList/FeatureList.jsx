import React from 'react'
import Feature from "../Feature/Feature"
import { List } from "./style"

const FeatureList = ({ data }) => {
  const dataList = [
    { image: data.kikyou, description: "一つ一つ型を使わず、宙で形を整えて作ります。" },
    { image: data.gizagiza , description: "風鈴の鳴り口にガラス管がスレただけで心地よい音が鳴ります。"},
    {image:data.kikyou,description:"絵を内側から描くことで、ガラスの艶を生かした、透明感のあるものに仕上がります。"}
  ]
  return (
    <List>
      {dataList.map((item,index) => (
        <Feature key={index} data={item.image} description={item.description}/>
      ))}

    </List>
  )
}

export default FeatureList
