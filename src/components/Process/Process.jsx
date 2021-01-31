import React from 'react'
import { Circle, ProcessWrapper, Image,Number,ImageContainer,ProcessGrid, ProcessDescription } from "./style"

import Img from "gatsby-image"

const Process = ({data}) => {
  return (
    <div className="center">
      <ProcessGrid>
         <ProcessWrapper>
        <ImageContainer noneMargin>
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
         <ProcessDescription noneMargin>1300℃で溶けたガラスを小さく巻き取る。 これが風鈴の鳴り口部分となり、口玉と言います。</ProcessDescription>
      </ProcessWrapper>
           <ProcessWrapper reverse>
        <ImageContainer noneMargin content="3">
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
         <ProcessDescription left noneMargin>500円玉くらいの大きさに口玉を膨らます。厚みを均等にできるように気をつけます。</ProcessDescription>
        </ProcessWrapper>
               <ProcessWrapper >
        <ImageContainer noneMargin content="3">
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
         <ProcessDescription noneMargin>口玉の上にもう一度ガラスを巻き取ります。これが風鈴本体になります。</ProcessDescription>
        </ProcessWrapper>
               <ProcessWrapper reverse>
        <ImageContainer noneMargin content="3">
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
         <ProcessDescription noneMargin>少し空気を入れて中心に針金を通して穴をあけます。これは糸を通すための穴となります。</ProcessDescription>
        </ProcessWrapper>
               <ProcessWrapper >
        <ImageContainer noneMargin content="3">
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
         <ProcessDescription noneMargin>風鈴が曲がらないようにしながら、一気に息を入れて本体を膨らまします。これで風鈴の玉はできました！</ProcessDescription>
        </ProcessWrapper>
               <ProcessWrapper reverse>
        <ImageContainer noneMargin content="3">
          <Img fluid={data.kikyou.childImageSharp.fluid} style={{borderRadius:"50%"}}/>
          </ImageContainer>
         <ProcessDescription noneMargin>風鈴を冷ましてから、最初に吹いた口玉の部分を砥石で削り、この時にギザギザができます。 その後、糸を通せば風鈴の完成です。</ProcessDescription>
        </ProcessWrapper>

      </ProcessGrid>

    </div>
  )
}

export default Process