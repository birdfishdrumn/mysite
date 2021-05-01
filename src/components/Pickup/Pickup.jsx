import React from "react"
import  "../../style/style.css"
import { graphql, useStaticQuery } from "gatsby"
import { PickupContainer } from "./style"
import { Link } from "gatsby-plugin-react-i18next"

import { SubTitle, Description, MinTitle,StyledImage} from "../../style/GlobalStyle"
import DoneOutlineIcon from "@material-ui/icons/DoneOutline"
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StyledDescription = styled(Description)`
width:500px;
@media(max-width:768px){
  width:95%;
  margin:10px;
}
`

const Pickup = () => {
  const data = useStaticQuery(graphql`
    query PickupQuery {
      allContentfulWork(filter: { category: { name: { eq: "pickup" }}}
      ){
          edges {
        node {
          title
          id
          content {
            content
          }
          date
          dateJP: date(formatString: "YYYY年MM月DD日")
          category {
            name
          }
          slug
          image {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
      }
    }
  `)
  //   allContentfulWork(filter: {category: {name: {eq: "pickup"}}}) {
  //   edges {
  //     node {
  //       title
  //     }
  //   }
  // }
  const settings = {
    dots: true,
    arrow:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 5000

  };

  const pickup = data.allContentfulWork.edges
  console.log(pickup)
  return (
    <>
    <PickupContainer>
    <SubTitle bottom>
            <DoneOutlineIcon
              color="secondary"
              style={{ fontSize: 30, padding: "0 10px 10px 0px" }}
            />
            Pick Up
          </SubTitle>
    <Slider {...settings}>

          {pickup.map((item) => (

            <div >
                 <Link to={`/blog/post/${item.node.slug}`}>
        <div className="center">
  <MinTitle hannari style={{marginBottom:"40px"}}>{item.node.title}</MinTitle>

          <StyledImage fluid={item.node.image.fluid} style={{ margin: "0 auto" }} />
        </div>
        <StyledDescription left hannari >{item.node.content.content}</StyledDescription>
            </Link>

              </div>
            ))}
   {/* <Link to={`/blog/post/${pickup.slug}`}>
        <div className="center">


          <StyledImage fluid={pickup.image.fluid} style={{ margin: "0 auto" }} />
        </div>
        <MinTitle hannari>{pickup.title}</MinTitle>
        <Description hannari>{pickup.content.content}</Description>
            </Link> */}


    </Slider>

      </PickupContainer>


      </>
  )
}

export default Pickup
