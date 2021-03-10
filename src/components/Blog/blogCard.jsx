import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Article,Time } from "./style"
import {Description, MinTitle} from "../../style/GlobalStyle"
export default props => {

  const key = props.key
  const slug = props.slug
  const fluid = props.fluid
  const alt = props.alt
  const dataTime = props.dataTime
  const title = props.title
  const dateJP = props.dateJP
  const catname = props.catname
  const content = props.content ? (props.content.length > 80  ?   props.content.content.slice(0, 80) + "....." : props.content.content) : ""

  return (

    <Article className="center" key={key}>
        <div>

                <figure >
                  <Img fluid={fluid} alt={alt} style={{ height: "100%" }} />
                        <p className="cat-chip">{catname}</p>
          </figure>
         </div>
         <div>
           <Link to={`/blog/post/${slug}`}>


                <MinTitle hannari>{title}</MinTitle>
            {dataTime && (<Time dataTime={dataTime}><FontAwesomeIcon />
            {dateJP}</Time>)}

          <Description left>{content}</Description>
                </Link>
        </div>
            </Article>
    )
}
