import React from 'react'
import {ProcessGrid } from "./style"
import ProcessCard from "./ProcessCard";
import { processData, paintProcessData} from "./processData";


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
            return <ProcessCard key={index} data={data} reverse="true" image={item.image}content={item.content} description={item.description}/>
          } else {
              return <ProcessCard key={index}  data={data} image={item.image} content={item.content} description={item.description}/>
          }

        })}

      </ProcessGrid>

    </div>
  )
}

export default Process
