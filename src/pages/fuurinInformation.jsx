import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SubTitle, Description, TwoColumn, Figure } from "../style/GlobalStyle"
import { Trans } from "gatsby-plugin-react-i18next"
import Image from "../components/image"
import { Choice } from "../components/WindBellList/index"

export default ({ data, location }) => {
  return (
    <div>
      <Layout>
        <SEO
          pagetitle="風鈴のあれこれ"
          pagedesc="こちらでは江戸風鈴の吊るし方や修理に関することなど、風鈴のあれこれについてご紹介いたします。"
          pagepath={location.pathname}
          pageimg={data.arekore.childImageSharp.original.src}
          pageimgw={data.arekore.childImageSharp.original.width}
        />
        <section className="hero">
          <figure>
            <Image
              filename="arekore_top.jpg"
              style={{ height: "100%" }}
              alt="製品情報"
            />
          </figure>
        </section>

        <article className="content">
          <SubTitle>
            <Trans>江戸風鈴を吊るす場所</Trans>
          </SubTitle>
          <section>
            <TwoColumn>
              <div>
                <Figure>
                  <Image
                    filename="huurin_hang_kiriko.jpg"
                    alt=""
                    style={{ width: "100%", margin: "0" }}
                  />
                </Figure>
              </div>

              <div>
                <Description left>
                  <Trans>
                    今から少し前までは、軒下に下げるのが当たり前でした。軒下といっても、一階部分の軒です。二階以上のベランダなどに下げると風が強く、一日中鳴りっぱなしになります。風鈴の魅力は、時おり鳴るのが良いとされます。したがって一年中で風が少なく暑い夏が好まれます。
                  </Trans>
                  <br />
                  <br />
                  <br />
                  <Trans>
                    最近の家屋には、軒がない家が殆どです。古民家の様なお宅ばかりでしたら良いのですが、そうはいきません。また、マンションだったり、家と家の間が狭く、ご近所の方に「うるさいから止めて」なんて言われたりして表に下げる場所が無くなってしまいました。日本では特にこの風鈴を見ると自分の家に飾りたくなるんです。風情を楽しみ、音を愛でる習慣があるからです。
                  </Trans>

                  <br />
                  <br />
                  <Trans>
                    最近は、家の中に下げる方が殆どになりました。かといって家の中に吊り下げる場所はカーテンレールのような場所しかないことが多いです。そこで私たちは壁に特殊な釣り具をつけて飾ることもお勧めしています。また、吊り台に下げて風情を楽しむなんて言うことも良いかと思います。
                  </Trans>
                </Description>
              </div>
            </TwoColumn>
          </section>
          <div className="space-l" />

          <section>
            <SubTitle>
              <Trans>風鈴が壊れてしまった時</Trans>
            </SubTitle>
            <Description left width="half">
              <Trans>
                江戸風鈴の場合は、縁起の良いものが多く、「えーっ。」なんて言うことになりますね。大丈夫です。家族の身代わりになってくれたんです。「有難う」という気持ちで燃えないゴミの日に処分してください。
              </Trans>
            </Description>
            <div className="space-l" />
            <SubTitle>
              <Trans>糸・ガラス管の修理</Trans>
            </SubTitle>
            <Description left width="half">
              <Trans>
                古くなった風鈴の糸の交換は、本体が破損していなければできます。￥150円程で承っておりますのでご希望の方は一度メールやお電話でお問い合わせお願い致します。大切に使って頂いた方に感謝いたします。
              </Trans>
            </Description>
          </section>
          <Choice />
        </article>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    arekore: file(relativePath: { eq: "Introduce/fuurin_arekore.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
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
`
