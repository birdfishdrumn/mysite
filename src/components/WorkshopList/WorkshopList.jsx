import React from 'react'
import { SubTitle, Nav, ListColumn, Description, MinTitle } from "../../style/GlobalStyle";
import { Link } from "gatsby";
import { Button } from "../Button";
import Img from "gatsby-image"
import {WorkshopData} from "./WorkshopData"
const WorkshopList = ({data}) => {
  return (
    <>
      {WorkshopData.map((item) => (<>
       <ListColumn>
        <div>
          <Img fluid={data.komaru.childImageSharp.fluid} alt="製品情報"/>
        </div>
        <div>
           <Link to = "/workshopContents" state={{number: item.num}}>
              <MinTitle>{item.title}</MinTitle>
              <Description left>{item.description}</Description>

            <Button>詳しく</Button>
          </Link>
        </div>
      </ListColumn>
        <div className="space-l" />
        </>
   ))}



      </>
  )
}

export default WorkshopList
