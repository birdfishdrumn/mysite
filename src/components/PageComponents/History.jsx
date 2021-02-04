import React from 'react'

import { Description,MinTitle,MaxTwoColumn,SubTitle,Figure,} from '../../style/GlobalStyle'
import Img from "gatsby-image"
import {HistoryImage } from "./style"

const History = ({data}) => {


  return (
    <div className="center">
         <MaxTwoColumn>
          <div>

            <Description width="more">
江戸風鈴の名称はその道の第一人者・篠原儀治（しのはら　よしはる）が

          ひとつひとつ宙吹きで作られたｶﾞﾗｽの風鈴を ”江戸風鈴”と命名しました。江戸時代の末期から庶民に知られるようになったｶﾞﾗｽの風鈴、

          それ以前は、庶民が手の届かない程高価なものでした。

          大名や豪商たちの中で珍品として崇め奉られ、”風琴”と呼ばれ

          お屋敷の部屋の中に下げられていました。風の琴なんて、名前も上品でした。

          <br/>
          <br/>
          <br/>現代のように、クーラーや扇風機などがない時代に

          どうやって、暑い夏を楽しく過ごそう？・・・創意・工夫で色々なものを 作り出しました。その中に自然の風を利用した”江戸風鈴”が生まれるのです。
          <br/><br/><br/>
          大昔は、自分の心を占うために、中国より伝来の”占風鐸”
          （宝石と宝石をぶつけて、その音色で吉凶を占う。）

          を考慮したものでしたが、だんだん変化して行き、まったく四季に関係の無い物が

          夏の風物詩として頭角をあらわします。

          透明なガラスを使用した風鈴の輝きやここちよい音色に庶民は心を奪われていったのです。<br/>
          <br/>
</Description>

          </div>
          <div>
            <Figure  data-aos="fade-up" >
              <HistoryImage
                fluid={data.history.childImageSharp.fluid}
                alt=""
                // style={{ width: "60%",margin:"0 auto" }}
              />
            </Figure>
          </div>
      </MaxTwoColumn>
       <Description width="half">
<span>『売り声もなくて買い手の数あるは、音にしられる風鈴の徳』</span>

          <br/>
          <br/>

          この狂歌は、江戸時代の末期に風鈴売りの様子を詠んだものです。

          この時代の物売りには珍しく、風鈴がそよ風を受けて軽やかな音を

          響かせるので、始終売り声をあげることが無かったといわれています。
          <br/><br/>
      </Description>

       <MinTitle >魔除けとしての風鈴</MinTitle>
      <Description width="half">

          日本人は、音に対する信仰がつよく「鈴」を魔除けにしているのは有名です。

          また、昔から朱色（あか）を魔除けにしており１９７０年代まで朱色の風鈴が

          過半数をしめていました。ガラス風鈴は”赤”があたりまえだったのです。

          (この頃売られていた風鈴に「朱色は、魔除け」と表示はしてないので、

          魔除けを意識して買われたのか不明です。)
          <br/><br/>
          江戸風鈴は、昔から人々の心を癒す（いやす）役目をしていたのです。
    </Description>
    </div>
  )
}

export default History