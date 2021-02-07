import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll,SubTitle, ScrollItem } from "../../style/GlobalStyle";
import WindBellCard from "./WindBellCard";

const TsuriganeFilter = ({change}) => {
  const data = useStaticQuery(graphql`
query TsuriganeFilterQuery{
    allProducts(
    filter: {category: {eq:"釣鐘" }}){
      edges {
      node {
        name
        id
        category
        description
           translatedName {
          en
          fr
          ko
          zh_TW
        }
        translatedDescription {
          en
          ko
          fr
          zh_TW
        }
         localImage {
          childImageSharp{
            fluid(maxWidth:300){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        }
      }
    }
}
`)
  return (
    <>
      <SubTitle hannari>釣鐘型</SubTitle>
        <GridList change={change}>
            {data.allProducts.edges.map(edge => (
            <ScrollItem>
                <WindBellCard
              key={edge.node.id}
                  windBellImage={edge.node.localImage[0].childImageSharp.fluid}
                   allImage={edge.node.localImage[1].childImageSharp.fluid}
              name={edge.node.name}
              description={edge.node.description}
              change={change}
            />
                </ScrollItem>
          ))}
          </GridList>
          </>
    )
}

export default TsuriganeFilter
