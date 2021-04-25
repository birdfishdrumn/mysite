import React from "react"

import { Information, InfoTitle } from "./style"

import { Link } from "gatsby"
const NewsCard = props => {
  return (
    <Information>
      <dl>
        <dt>
          {" "}
          {props.dataTime && (
            <time dataTime={props.dataTime}> {props.dateJP}</time>
          )}
        </dt>
        <InfoTitle>
          <Link to={`/blog/post/${props.slug}`}>{props.title}</Link>
        </InfoTitle>
      </dl>
    </Information>
  )
}

export default NewsCard
