import React from "react"
import {Link} from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default props => {


  const path = props.path

  const pageContext = props.pageContext
  const originPath = props.originPath ? props.originPath+"/" : ""
    return(
        <ul className="pagenation">
          {!pageContext.isFirst && (
  <li className="prev">
              <Link to={
                pageContext.currentPage === 2
                  ? `/${path}/${originPath}`
                  : `/${path}/${originPath}${pageContext.currentPage - 1}/`
                }
                rel="prev">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    <span>前のページ</span>
              </Link>
            </li>
          )}
          {!pageContext.isLast && (
              <li className="next">
              <Link to={
                `/${path}/${originPath}${pageContext.currentPage + 1}/`
              }rel = "next" >
              <span>次のページ</span>
                 <FontAwesomeIcon icon={faChevronRight}/>
                </Link>
            </li>
)}

        </ul>

    )
}
