import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import { GridList,SubTitle, ScrollItem } from "../../style/GlobalStyle";
import WindBellCard from "./WindBellCard";

const DiseaseFree = ({change,language}) => {
  const data = useStaticQuery(graphql`
query DiseaseFreeQuery{
    allProducts(
    filter: {category: {eq:"無病息災" }}){
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
   const Name = ({ langName }) => {
    switch (language) {
      case "France":
        return <div>{langName.translatedName.fr}</div>
      case "English":
        return <div>{langName.translatedName.en}</div>
      case "Chinese":
        return <div>{langName.translatedName.zh_TW}</div>
       case "Korean":
        return <div>{langName.translatedName.ko}</div>
    }
   return <div>{langName.name}</div>

  }

  const Language = ({ lang }) => {
    switch (language) {
      case "France":
        return <div>{lang.translatedDescription.fr}</div>
      case "English":
        return <div>{lang.translatedDescription.en}</div>
       case "Chinese":
        return <div>{lang.translatedDescription.zh_TW}</div>
      case "Korean":
        return <div>{lang.translatedDescription.ko}</div>
    }
   return <div>{lang.description}</div>

  }

  return (
    <>

        <GridList change={change}>
            {data.allProducts.edges.map(edge => (
            <ScrollItem>
                <WindBellCard
              key={edge.node.id}
                  windBellImage={edge.node.localImage[0].childImageSharp.fluid}
                   allImage={edge.node.localImage[1].childImageSharp.fluid}
              name={<Name langName={edge.node}/>}
                  description={<Language lang={edge.node}/>}
              change={change}
            />
                </ScrollItem>
          ))}
          </GridList>
          </>
    )
}

export default DiseaseFree
