import React from 'react'
import { Circle, ProcessWrapper, Image,Number,ImageContainer,ProcessGrid, ProcessDescription } from "./style"
import ProcessCard from "./ProcessCard";
import Img from "gatsby-image"
// import { processData, paintProcessData} from "./processData";
const array = [1, 2, 3]



const Process = ({ data, paint }) => {

  const processData = [{
        description: "1300℃で溶けたガラスを小さく巻き取る。これが風鈴の鳴り口部分となり、口玉と言います。",
        content: "口玉を巻く",
        image: "makitori.jpg"
    },
    {
        description: "500円玉くらいの大きさに口玉を膨らます。厚みを均等にできるように気をつけます。",
        content: "膨らます",
        image: "kuchidama.jpg"
    },
    {
        description: "口玉の上にもう一度ガラスを巻き取ります。これが風鈴本体になります。",
        content: "本体を巻く",
        image: "hontai2.jpg"
    },
    {
        description: "少し空気を入れて中心に針金を通して穴をあけます。これは糸を通すための穴となります。",
        content: "針金を通す",
        image: "harigane.jpg"
    },
    {
        description: "風鈴が曲がらないようにしながら、一気に息を入れて本体を膨らまします。これで風鈴の原型はできました。",
        content: "膨らます",
        image: "hontai.jpg"
    },
    {
        description: "風鈴を冷ましてから、最初に吹いた口玉の部分を砥石で削ります。これが鳴り口のギザギザとなります！",
        content: "口玉を切る",
        image: "kuchi_cut.jpg"
    }
]

const paintProcessData = [{
        description: "絵を描くのに必要な、油性の顔料、水性の絵の具、筆を用意します。",
        content: "道具を用意",
        image: "ganryou.jpg"
    },
    {
        description: "気持ちを込めながら、最初に水性の絵の具で金魚の目や模様を丁寧に書いていきます。",
        content: "模様を描く",
        image: "moyou.jpg"
    },
    {
        description: "次に油性の顔料でこの金魚の体の色を塗っていきます。最初に赤で体の上部を塗り、お腹を白で塗ります。",
        content: "色ぬり",
        image: "kingyo_body.jpg"
    },
    {
        description: "金魚の体を塗り終えたら、一番の見せ所である尾びれを勢いよく書いていき、胸ビレを描きます。",
        content: "ヒレを描く",
        image: "kingyo_hire.jpg"
    },
    {
        description: "次に水引きという金魚の泳いでいる水を表すグラデーションの線をいれます。",
        content: "水引き",
        image: "kingyo_mizuhiki.jpg"
    },
    {
        description: "最後に水草を描き金魚の住む環境を整えます。これで金魚の絵柄の完成です!",
        content: "全体の仕上げ",
        image: "kingyo_last.jpg"
    }

]

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
