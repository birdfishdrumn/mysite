import React,{useEffect} from 'react'
import {  Description, ProductColumn,DescriptionFlex, Figure, MinTitle } from "../../style/GlobalStyle"
import Img from "gatsby-image"
import { Button } from "../Button/styles";
import { Trans, Link } from 'gatsby-plugin-react-i18next';
import Image from "../minImage"
import Aos from "aos"
import styled from "styled-components";


const ProductTextFlex = styled(DescriptionFlex)`
@media(max-width:767px){
  /* width:87%; */
}
  >div:first-child{
     @media(min-width:768px){

    height:300px;
    text-align:center;
  }
}
  >div:last-child{
    height:330px;
    font-size:2.6rem;
     -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  }
`



const TopPageContent = ({ data }) => {
    const onlineOpen = () => {
    const url = "https://maruyosi.theshop.jp/"
      window.open(url, '_blank')

    }
    useEffect(() => {
    Aos.init({ duration: 1000, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (
    <div>
       <ProductColumn  data-aos="fade-up" responsive margin ="right" more >
         <ProductTextFlex>
             <div className="center">

            <Description left ><br/><Trans>篠原まるよし風鈴では主に小丸型と呼ばれる風鈴を中心に、少し形の変わった釣鐘型や風琴、またその技術を応用してイヤリングやポッペンなども制作しております。</Trans></Description>
            <div className="space-l"/>
              <Link to="/product" ><Button ><Trans>詳しく見る</Trans></Button></Link>
          </div>
           <MinTitle first hannari large><Trans>まるよしの風鈴</Trans></MinTitle>

        </ProductTextFlex>

          <div>
            <Figure>
              <Img fluid={data.shouhin.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
      </ProductColumn>
      <div className="space-m"/>
          <ProductColumn  data-aos="fade-up"  responsive margin="left" more reverse>
        <ProductTextFlex reverse>


             <div className="center">

            <Description left ><br/><Trans>まるよし風鈴では絵付け体験、ガラス吹体験、リモート絵付け体験など、体験も充実しています。世界で一つだけの風鈴を制作してみませんか？</Trans></Description>
            <div className="space-l"/>
              <Link to="/workshop" ><Button ><Trans>詳しく見る</Trans></Button></Link>
          </div>
           <MinTitle first hannari large><Trans>体験する</Trans></MinTitle>

        </ProductTextFlex>

          <div>
            <Figure>
              <Image filename="workshop_top.jpg" alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
      </ProductColumn>
       <div className="space-m"/>
         <ProductColumn  data-aos="fade-up"  responsive more margin="right">
                <ProductTextFlex>
             <div className="center">

            <Description left ><br/><Trans>こちらでは直接お店に来なくても、たくさんの種類の中から風鈴のご購入が可能です。割れないようにしっかり箱に入れて梱包し、プレゼント用の包装もできますので是非ご利用ください。</Trans></Description>
            <div className="space-l"/>
              <Button onClick={onlineOpen}><Trans>詳しく見る</Trans></Button>
          </div>
           <MinTitle first hannari  large><Trans>ネットショップ</Trans></MinTitle>

        </ProductTextFlex>

          <div>
            <Figure>
              <Image filename="onlineshop_top.jpg" alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
        </ProductColumn>
    </div>
  )
}

export default TopPageContent

  //  <ProductColumn more >

  //     </ProductColumn>
