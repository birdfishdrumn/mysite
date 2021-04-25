import React from "react"
import { ListColumn, Description, MinTitle } from "../../style/GlobalStyle"
// import { Link } from "gatsby";
import { Trans, Link } from "gatsby-plugin-react-i18next"
import { Button } from "../Button"
import Image from "../image"
import { WorkshopData } from "./WorkshopData"
const WorkshopList = () => {
  return (
    <>
      {WorkshopData.map((item, index) => (
        <>
          <ListColumn key={index}>
            <div>
              <Image filename={item.image} alt="製品情報" />
            </div>
            <div>
              <Link to="/workshopContents" state={{ number: item.num }}>
                <MinTitle>
                  <Trans>{item.title}</Trans>
                </MinTitle>
                <Description left>
                  <Trans>{item.description}</Trans>
                </Description>

                <Button>
                  <Trans>詳しく見る</Trans>
                </Button>
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
