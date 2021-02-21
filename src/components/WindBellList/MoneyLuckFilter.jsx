import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList, FlexNav, Scroll, ScrollItem, SubTitle} from "../../style/GlobalStyle";
import WindBellCard from "./WindBellCard";
import { Language,Name } from "./Language"


const MoneyLuckFilter = ({change,language}) => {
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


  const Fran = data.allProducts.edges.forEach(edge =>  edge.node.translatedDescription.fr )
  console.log(Fran)
  return (
    <>

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

export default MoneyLuckFilter
