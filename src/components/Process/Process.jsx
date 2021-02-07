import React from 'react'
import { Circle, ProcessWrapper, Image,Number,ImageContainer,ProcessGrid, ProcessDescription } from "./style"
import ProcessCard from "./ProcessCard";
import Img from "gatsby-image"
import { processData, paintProcessData} from "./processData";
const array = [1, 2, 3]

const Process = ({ data, paint }) => {
  let process = "";
  if (paint) {
    process = paintProcessData
  } else {
    process = processData
  }
  return (
    <div className="center">

      <ProcessGrid>
        {process.map((item, index) => {
          if(index % 2 !== 0){
            return <ProcessCard data={data} reverse="true" content={item.content} description={item.description}/>
          } else {
              return <ProcessCard data={data} content={item.content} description={item.description}/>
          }

        })}

      </ProcessGrid>

    </div>
  )
}

export default Process
