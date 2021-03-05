import React, { useEffect }from 'react'
import Feature from "./Feature"
import { List } from "./style"


const FeatureList = ({ data }) => {

  const dataList = [
    { image: "garasuhuki-top.jpg", description: "一つ一つ型を使わず、宙で形を整えて作ります。そのため音も違います。",content:"宙吹き" },
    { image:"kirikuchi_square.jpg", description: "風鈴の鳴り口にガラス管がスレただけで心地よい音が鳴ります。",content:"ギザギザ"},
    {image:"kikyou.jpg",description:"絵を内側から描くことで、ガラスの艶を生かした透明感のあるものに仕上がります。",content:"内側から彩色"}
  ]
  return (
    <List >
      {dataList.map((item,index) => (
        <Feature  key={index} image={item.image} description={item.description} content={item.content}/>
      ))}

    </List>
  )
}

export default FeatureList
