import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SubTitle, Description, Nav } from "../style/GlobalStyle"

import { Button } from "../components/Button"

export default ({ data, location }) => {
  //   if (location) {
  //   // console.log(location.state)
  // }

  return (
    <div>
      <Layout>
        {/* state: { name, email, phone, content, selectedDate, time, message, people }, */}

        <div className="space-xl" />
        <SEO
          pagetitle={
            location.state && location.state.subject
              ? "お問い合わせありがとうございます。"
              : "体験のお申し込みありがとうございます。"
          }
        />
        <article className="content">
          {location.state && location.state.subject ? (
            <SubTitle>お問い合わせありがとうございます。</SubTitle>
          ) : (
            <SubTitle>体験のお申し込みありがとうございます。</SubTitle>
          )}
          <div className="space-m" />

          <div className="center">
            {location.state && location.state.subject ? (
              <Description width="half">
                お問い合わせいただきありがとうございました。
                <br />
                担当の者が確認しだいご返信させていただきますので、今しばらくお待ちくださいませ。
                <br></br>
              </Description>
            ) : (
              <Description left width="half">
                  体験のお申し込みありがとうございます。担当のものが最短で翌営業日以内にはご返信させていただきますので今しばらくお待ちくださいませ。
                    <p style={{ color: "red", fontSize: "0.9rem", textAlign: "left" }}>
                  ※メールの返信が届かない方は迷惑メールアドレスに振り分けられている可能性があります。
                  それでもお返事がこない場合はお手数おかけしますが直接お電話にてお問い合わせくださいませ。
                  </p>
                <br></br>
              </Description>
            )}

            {location.state && (
              <Nav small noSpace>
                <li>お名前</li>
                <p>{location.state.name}</p>
                <li>メールアドレス</li>
                <p>{location.state.email}</p>
                {location.state.phone ? (
                  <>
                    <li>電話番号</li>
                    <p>{location.state.phone}</p>

                    <li>体験内容</li>
                    <p>{location.state.content}</p>
                    <li>人数</li>
                    <p>{location.state.people}</p>
                    <li>体験日</li>
                    <p>{location.state.selectedDate.toLocaleDateString()}</p>
                    <li>体験時間</li>
                    <p>{location.state.time}</p>

                    <li>メッセージ</li>
                    <p>{location.state.message}</p>
                  </>
                ) : (
                  <>
                    <li>件名</li>
                    <p>{location.state.subject}</p>
                    <li>メッセージ</li>
                    <p>{location.state.message}</p>
                  </>
                )}
              </Nav>
            )}
            <Link to="/">
              <Button>Topページに戻る</Button>
            </Link>
          </div>

          <div className="space-xl" />
        </article>
      </Layout>
    </div>
  )
}
