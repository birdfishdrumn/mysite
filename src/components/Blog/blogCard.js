import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
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

    return(
                       <article className="post" key={key}>
              <Link to={`/blog/post/${slug}`}>
                <figure className="eyecatch-box">
                  <Img fluid={fluid} alt={alt} style={{ height: "100%" }} />
                        <p className="cat-chip">{catname}</p>
                </figure>
     <aside>
            {dataTime && (<time dataTime={dataTime}><FontAwesomeIcon icon={faClock} />
            {dateJP}</time>)}
                  </aside>
          <h3>{title}</h3>
          <p>{content}</p>
                </Link>
            </article>
    )
}
