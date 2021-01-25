import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {Article} from "./style"
export default props => {

  const key = props.key
  const slug = props.slug
  const fluid = props.fluid
  const alt = props.alt
  const dataTime = props.dataTime
  const title = props.title
  const dateJP = props.dateJP
  const catname = props.catname
  const content = props.content ? (props.content.length > 80  ?   props.content.slice(0, 80) + "....." : props.content) : ""

  return (

    <Article key={key}>
        <div>

                <figure className="eyecatch-box">
                  <Img fluid={fluid} alt={alt} style={{ height: "100%" }} />
                        <p className="cat-chip">{catname}</p>
          </figure>
       </div>
      <div>
           <Link to={`/blog/post/${slug}`}>
        <aside>

                <h3>{title}</h3>
            {dataTime && (<time dataTime={dataTime}><FontAwesomeIcon icon={faClock} />
            {dateJP}</time>)}
                  </aside>

          <p>{content}</p>
                </Link>
        </div>
            </Article>
    )
}
