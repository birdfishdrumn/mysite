import React from 'react'
import { SubTitle, Description, ProductColumn, Figure, MinTitle } from "../../style/GlobalStyle"
import Img from "gatsby-image"

const TopPageContent = ({data}) => {
  return (
    <div>
       <ProductColumn more >
          <div>
            <MinTitle first large>まるよし風鈴の作品</MinTitle>
            <Description padding left width="more">風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。</Description>
          </div>
          <div>
            <Figure>
              <Img fluid={data.berry.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
      </ProductColumn>
      <div className="space-l"/>
          <ProductColumn more reverse>
          <div>
            <MinTitle first large>体験学習</MinTitle>
            <Description padding left width="more">風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。</Description>
          </div>
          <div>
            <Figure>
              <Img fluid={data.berry.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
      </ProductColumn>
       <div className="space-l"/>
             <ProductColumn more>
          <div>
            <MinTitle first large>オンラインショップ</MinTitle>
            <Description padding left width="more">風鈴には様々な縁起の良い絵柄が描かれます。小丸型、新子丸、中丸、釣鐘型のように大きさが違う種類のものもあります。</Description>
          </div>
          <div>
            <Figure>
              <Img fluid={data.berry.childImageSharp.fluid} alt="" style={{ width: "100%" }} />
            </Figure>
          </div>
        </ProductColumn>
    </div>
  )
}

export default TopPageContent
