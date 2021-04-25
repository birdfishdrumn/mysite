import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  GridList,
  FlexNav,
  SubTitle,
  ScrollItem,
  Description,
  Figure,
  TwoColumn,
} from "../../style/GlobalStyle"
import Img from "gatsby-image"
import { Trans } from "gatsby-plugin-react-i18next"
import WindBellCard from "./WindBellCard"
import ViewColumnIcon from "@material-ui/icons/ViewColumn"
import GridOnIcon from "@material-ui/icons/GridOn"
import Tooltip from "@material-ui/core/Tooltip"
import { IconButton } from "@material-ui/core"
const Earring = () => {
  const data = useStaticQuery(graphql`
    query PoppenQuery {
      allProducts(filter: { category: { eq: "ポッペン" } }) {
        edges {
          node {
            name
            id
            category
            description
            localImage {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
      utamaro: file(relativePath: { eq: "Introduce/utamaro005_main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
            height
            width
          }
        }
      }
    }
  `)
  const [change, setChange] = useState(false)
  const handleOn = useCallback(() => {
    setChange(true)
  })
  const handleOff = useCallback(() => {
    setChange(false)
  })
  // console.log(location.state.number)

  return (
    <div>
      <section className="center">
        <SubTitle>
          <Trans>ポッペン</Trans>
        </SubTitle>
        <Description left width="half">
          <Trans>
            ポッペンは、ガラスの弾力性を使った唯一の工芸品です。お正月（年頭）に吹いて一年の厄を祓う。(※旧正月や節分を年の初めとして考える方が多いです。)ポッペンの絵は外側から一つずつ描かれます。
          </Trans>
        </Description>
        <div className="space-l" />
        <TwoColumn reverse>
          <div>
            <Description left noSpace>
              <Trans>
                ポッペンは底の部分がとても薄くなっていて、細い棒の部分を咥えて息を入れると”ポッ”凸咥えている口を放すと”ペン”凹と音が出ます。
              </Trans>
              <br />
              <br />
              <br />
              <Trans>
                ポッペンは音を鳴らすだけの玩具ではなく、この音で一年の厄を追い祓うと言う意味で日本全国にひろがったようです。
              </Trans>
              <br />
              <Trans>
                歌麿の浮世絵の中に”ビードロを吹く女”という有名な作品が
                あります。寛政4年‐寛政5年頃(西暦1792〜1793年頃)に当時の流行を取り入れた町娘を描いた浮世絵師・喜多川歌麿(1753〜1806年)の作品です。この町娘が吹いてるのまさにビードロ、ぽっぺんであり舶来品でその時代の流行品でした。
              </Trans>
              <br />
              <br />
              <br />
              <Trans>
                この作品の名前があまりにも有名になってしまい現在でもポッペンのことをビードロと言う人が多くいます。
              </Trans>
            </Description>
          </div>
          <div>
            <Figure>
              <Img
                fluid={data.utamaro.childImageSharp.fluid}
                alt=""
                style={{ width: "100%" }}
              />
            </Figure>
          </div>
        </TwoColumn>
        <section>
          <SubTitle hannari>
            <Trans>いろいろなポッペン</Trans>
          </SubTitle>
          <FlexNav>
            <Tooltip title="グリッド" interactive>
              <IconButton onClick={handleOff}>
                <li>
                  <GridOnIcon fontSize="large" />
                  <p style={{ fontSize: "0.8rem" }}>本体</p>
                </li>
              </IconButton>
            </Tooltip>
            <Tooltip title="全体" interactive>
              <IconButton onClick={handleOn}>
                <li>
                  <ViewColumnIcon fontSize="large" />
                  <p style={{ fontSize: "0.8rem" }}>全体</p>
                </li>
              </IconButton>
            </Tooltip>
          </FlexNav>

          <GridList change={change}>
            {data.allProducts.edges.map(edge => (
              <ScrollItem key={edge.node.id}>
                <WindBellCard
                  windBellImage={edge.node.localImage[0].childImageSharp.fluid}
                  allImage={edge.node.localImage[1].childImageSharp.fluid}
                  name={edge.node.name}
                  description={edge.node.description}
                  change={change}
                />
              </ScrollItem>
            ))}
          </GridList>
          <section>
            <SubTitle hannari>
              <Trans>ぽっぺんの作り方</Trans>
            </SubTitle>
            <Description>申し訳ありません。ただいま準備中です。</Description>
          </section>
        </section>
      </section>
    </div>
  )
}

export default Earring
