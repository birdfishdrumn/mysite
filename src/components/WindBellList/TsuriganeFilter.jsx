import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList,SubTitle, ScrollItem } from "../../style/GlobalStyle";
import WindBellCard from "./WindBellCard";
import { Language, Name } from "./Language"

const TsuriganeFilter = ({change,language}) => {
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
            fluid(maxWidth:200){
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
            <ScrollItem  key={edge.node.id}>
                <WindBellCard
                  windBellImage={edge.node.localImage[0].childImageSharp.fluid}
                   allImage={edge.node.localImage[1].childImageSharp.fluid}
               name={<Name language={language}  langName={edge.node}/>}
             description={<Language language={language}  lang={edge.node}/>}
              change={change}
            />
                </ScrollItem>
          ))}
          </GridList>
          </>
    )
}

export default TsuriganeFilter
