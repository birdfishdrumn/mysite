import React from 'react'
import {graphql,useStaticQuery} from "gatsby"
import { PickupContainer } from "./style"
import {Link} from "gatsby-plugin-react-i18next"
import Img from "gatsby-image";
import { SubTitle, Description, MinTitle } from "../../style/GlobalStyle"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
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

  const pickup = data.contentfulWork
  return (
    <PickupContainer>
      <Link to={`/blog/post/${pickup.slug}`}><div className="center">
        <SubTitle bottom><DoneOutlineIcon color="secondary" style={{ fontSize: 30,padding:"0 10px 10px 0px" }}/>Pick Up</SubTitle>

        <Img fluid={pickup.image.fluid} style={{margin:"0 auto"}}/>
      </div>
        <MinTitle hannari>{pickup.title}</MinTitle>
         <Description hannari>{pickup.content.content}</Description>
      {/* <div key={pickup.id} slug={pickup.slug} fluid={pickup.image.fluid} alt={pickup.image.description} dataTime={pickup.date}
            catname={pickup.category.name} title={pickup.title}  /> */}
        </Link>
    </PickupContainer>
  )
}

export default Pickup
