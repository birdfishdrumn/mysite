import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Wrapper, ResultWrapper } from "./style"
import TextHighlighter from "./highlight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchResult = props => {
  // 全記事データ取得 //
  const tempData = useStaticQuery(graphql`
    query SearchData {
      allContentfulWork(
        sort: { fields: date, order: DESC }
        limit: 100
      ) {
        edges {
            node{
          title
          category{
            name
          }
          tags{
            name
          }
          date
          content{
            content
          }
          dateJP:date(formatString: "YYYY年MM月DD日")
          slug

          }
        }
      }
    }
  `)
  const [data, setData] = useState([])
  useEffect(() => {
    const temp = []
    tempData.allContentfulWork.edges.map(e => {
      temp.push(e.node)
    })
    setData(temp)
  }, [])

  // 表示非表示の切り替え //
  const [className, setClassName] = useState("")
  useEffect(() => {
    let id
    if (props.focus && props.value !== "") {
      id = setTimeout(() => {
        setClassName("active")
      }, 100)
    } else {

        id=setClassName("")

    }
    return () => {
      clearTimeout(id)
    }
  }, [props.focus, props.value])

  // 検索処理 //
  const [result, setResult] = useState([])
  const search = () => {
    const value = props.value.toLowerCase()
    // filterで当てはまった、title,contentのみを取得する。
    const temp = data.filter(e => {
      const target = `
        ${e.title.toLowerCase()}
        ${e.content.content.toLowerCase()}
      `
      return target.indexOf(value) !== -1
    })
    setResult(temp)
  }
  // もしvalueに何か値が出力されたらsearchを実行して検索結果を取得する。
  useEffect(() => {
    if (props.value !== "") {
      search()
    }
  }, [props.value])

  return (
    // classNameは表示、非表示を決める
    <ResultWrapper className={className}>
      <div className="result-inner">
        <span className="res">

          {result.length === 0 ? <b><FontAwesomeIcon icon={faSadTear} style={{ color: "#6DB65B" }}  />検索結果がありません</b> : (<b> <FontAwesomeIcon style={{ color: "#6DB65B" }} icon={faClock} />{result.length}件の検索結果があります。</b>)}
        </span>
        <ul>
          {result.map(node => {
            return (
              <li key={node.slug}>
                <Link to={`/blog/post/${node.slug}/`}>
                  <TextHighlighter str={node.title} includes={props.value} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </ResultWrapper>
  )
}

const Search = props => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <Wrapper className={props.className} focus={focus}>
<FontAwesomeIcon style={{color:"#6DB65B"}} icon={faSearch} />
      <input
        type="text"
        placeholder="Search"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />

      <SearchResult focus={focus} value={value} />
    </Wrapper>
  )
}

export default Search
