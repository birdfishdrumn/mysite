import React from 'react'
import { SubTitle, Description, ProductColumn, Figure, MinTitle } from "../../style/GlobalStyle"
import Img from "gatsby-image"
import { Button } from "../Button/styles";
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';
const TopPageContent = ({ data }) => {
    const onlineOpen = () => {
    const url = "https://maruyosi.theshop.jp/"
window.open(url, '_blank')
}
  return (
    <div>
       <ProductColumn more >
          <div>
            <MinTitle first large><Trans>まるよしの風鈴</Trans></MinTitle>
          <Description left width="more"><Trans>篠原まるよし風鈴では主に小丸型と呼ばれる風鈴を中心に、少し形の変わった釣鐘型や風琴、またその技術を応用してイヤリングやポッペンなども制作しております。</Trans></Description>
          <Link to="/product"><Button><Trans>詳しく見る</Trans></Button></Link>
          </div>
          <div>
            <Figure>
              <Img fluid={data.shouhin.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
      </ProductColumn>
      <div className="space-l"/>
          <ProductColumn more reverse>
          <div>
            <MinTitle first large><Trans>体験する</Trans></MinTitle>
          <Description padding left width="more"><Trans>まるよし風鈴では絵付け体験、ガラス吹体験、リモート絵付け体験など、体験も充実しています。世界で一つだけの風鈴を制作してみませんか？</Trans></Description>
          <Link to="/workshop"><Button><Trans>詳しく見る</Trans></Button></Link>
          </div>
          <div>
            <Figure>
              <Img fluid={data.narabi.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
      </ProductColumn>
       <div className="space-l"/>
             <ProductColumn more>
          <div>
            <MinTitle first large><Trans>オンラインショップ</Trans></MinTitle>
          <Description padding left width="more"><Trans>まるよし風鈴の商品はこちらのオンラインショップよりどうぞ。プレゼント用のラッピングもできますのでお気軽にお伝えください。</Trans></Description>
          <Button onClick={onlineOpen}><Trans>詳しく見る</Trans></Button>
          </div>
          <div>
            <Figure>
              <Img fluid={data.online.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
        </ProductColumn>
    </div>
  )
}

export default TopPageContent

   // <ProductColumn more >
    //     <DescriptionFlex>


    //          <div>

    //         <Description left width="more"><Trans>篠原まるよし風鈴では主に小丸型と呼ばれる風鈴を中心に、少し形の変わった釣鐘型や風琴、またその技術を応用してイヤリングやポッペンなども制作しております。</Trans></Description>
    //           <Link to="/product"><Button><Trans>詳しく見る</Trans></Button></Link>
    //       </div>
    //        <MinTitle first large><Trans>まるよしの風鈴</Trans></MinTitle>

    //     </DescriptionFlex>

    //       <div>
    //         <Figure>
    //           <Img fluid={data.shouhin.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
    //         </Figure>
    //       </div>
    //   </ProductColumn>
