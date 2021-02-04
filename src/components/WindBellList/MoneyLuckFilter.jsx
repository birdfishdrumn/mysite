import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll, ScrollItem, SubTitle} from "../../style/GlobalStyle";
import WindBellCard from "./WindBellCard";

const MoneyLuckFilter = ({change}) => {
  const data = useStaticQuery(graphql`
query MoneyLuckQuery{
    allProducts(
    filter: {category: {eq:"金運" }}){
      edges {
      node {
        name
        id
        category
        description
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
        <SubTitle hannari>金運上昇の柄</SubTitle>
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

export default MoneyLuckFilter