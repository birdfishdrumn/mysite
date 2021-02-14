import React from 'react'
import {graphql,useStaticQuery,Link} from "gatsby"
import { PickupContainer } from "./style"
import Img from "gatsby-image";
import {SubTitle,Description,MinTitle} from "../../style/GlobalStyle"
const Pickup = () => {
  const data = useStaticQuery(graphql`
query PickupQuery{
 contentfulWork(category: {name: {eq: "pickup"}}) {
    id
    title
    image {
      fluid(maxWidth: 400) {
        ...GatsbyContentfulFluid_withWebp
      }
      description
      title
    }
    content {
      content
    }
    category {
      name
    }
    slug
  }
}
`)
  console.log(data.contentfulWork)
  const pickup = data.contentfulWork
  return (
    <PickupContainer>
      <Link to={`/blog/post/${pickup.slug}`}><div className="center">
        <SubTitle>Pick Up</SubTitle>

        <Img fluid={pickup.image.fluid} style={{margin:"0 auto"}}/>
      </div>
        <MinTitle hannari>{pickup.title}</MinTitle>
         <Description hannari>{pickup.content.content.slice(0,40)}</Description>
      {/* <div key={pickup.id} slug={pickup.slug} fluid={pickup.image.fluid} alt={pickup.image.description} dataTime={pickup.date}
            catname={pickup.category.name} title={pickup.title}  /> */}
        </Link>
    </PickupContainer>
  )
}

export default Pickup
