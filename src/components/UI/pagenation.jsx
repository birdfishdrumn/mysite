import React from "react"
import { Link } from "gatsby"

import { ChevronRightIcon, ChevronLeftIcon } from '@material-ui/icons';

export default Pagenation = (props) => {


    const path = props.path

    const pageContext = props.pageContext
    const originPath = props.originPath ? props.originPath + "/" : ""
    return (<ul className="pagenation" > {!pageContext.isFirst && (
        <li className = "prev" >
                <Link to = {
                    pageContext.currentPage === 2 ?
                    `/${path}/${originPath}` :
                        `/${path}/${originPath}${pageContext.currentPage - 1}/`
                }rel = "prev" >
                <ChevronLeftIcon />
                <span > 前のページ </span> </Link> </li>
            )
        } {
                !pageContext.isLast && (
                    <li className = "next">
                <Link to = {
                    `/${path}/${originPath}${pageContext.currentPage + 1}/`
                }
                rel = "next" >
                <span > 次のページ </span> <ChevronRightIcon/>
                </Link> </li>
            )
        }

        </ul>

    )
}
