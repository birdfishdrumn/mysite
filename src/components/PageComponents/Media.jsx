import React from "react"
import {
  SubTitle,
  Youtube,
  MinTitle,
  Description,
  Nav,
} from "../../style/GlobalStyle"
import styled from "styled-components"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
const Flex = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Media = () => {
  return (
    <div>
      <section>
        <SubTitle>メディアの掲載</SubTitle>
        <MinTitle border>YouTube</MinTitle>

        <Nav border small min grey left>
          <Youtube
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o2XUNTQbP4A"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Youtube>
          <li>OWVが風鈴作りに挑戦してみた！[OWVチャンネル]</li>
          <li>
            しまじろうのできた！「ふうりんをつくるのまき」[しまじろう公式チャンネル]
          </li>
          {/* <li>TBS  「孤独のグルメ」</li> */}
        </Nav>
        {/* <Description>キューに追加
しまじろうのできた！「ふうりんをつくるのまき」【しまじろうチャンネル公式】

</Description> */}
      </section>
      <div className="space-l" />
      <section>
        <Flex>
          <Nav small min grey left>
            <MinTitle border>TV</MinTitle>
            <div className="space-m" />
            <li>NHK 「ニュースシブ五時」</li>
            <li>テレビ東京 「東京交差点」</li>
            <li>テレビ東京 「孤独のグルメ」</li>
            <li>テレビ東京 「モヤモヤさまぁ〜ず」</li>
            <li>フジテレビ 「なりゆき街道旅」</li>
            {/* <li></li> */}
          </Nav>
          <Nav small min grey left>
            <MinTitle border> 書籍</MinTitle>
            <div className="space-m" />
            <li>地球の歩き方 2021　東京編</li>
            <li>ダーリンの東京散歩: 歩く世界</li>
          </Nav>
        </Flex>
        <div className="space-m" />
        <Description>随時更新させていただきます！</Description>
      </section>
    </div>
  )
}

export default Media
