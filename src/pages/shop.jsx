import React,{useEffect,useState} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Aos from "aos";
import { IconButton } from "@material-ui/core";
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import "aos/dist/aos.css";
import styled from "styled-components";
import { Product } from "../components/index";
import { Access,Family}from "../components/PageComponents/index"
import SEO from "../components/seo"
import Layout from "../components/layout"
import {TwoColumn,SubTitle,Figure,Description,MinTitle,FlexNav} from "../style/GlobalStyle"



export default ({ data, location }) => {
  const [active,setActive] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: 'DOMContentLoaded', once: true });

  }, [])
  return (
    <Layout>
      <SEO
        pagetitle="ESSENTIALSについて"
        pagedesc="食べ物の情報について発信しているサイトです"
        pagepath={location.pathname}
        pageimg={data.about.childImageSharp.original.src}
        pageimgw={data.about.childImageSharp.original.width}
        pageimgh={data.about.childImageSharp.original.height}
      />
      <div className="eyecatch">
        <figure>
          <Img fluid={data.about.childImageSharp.fluid} alt="製品情報" />
        </figure>
      </div>

      <article className="content center">
        <SubTitle>お店・家族の紹介</SubTitle>
        <FlexNav small>
          <li onClick={()=>setActive(false)}><IconButton><StoreIcon/></IconButton><br/>お店</li>
          <li  onClick={()=>setActive(true)}><IconButton><SupervisedUserCircleIcon/></IconButton><br/>職人の紹介</li>
        </FlexNav>
        {active ? <Family data={data}/>:
          (
            <Access data={data}/>

         )
        }


      </article>

    </Layout>
  )
}
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  about: file(relativePath: {eq: "iro2.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1600) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
    shop: file(relativePath: {eq: "shop.jpg"}){
    childImageSharp {
      fluid(maxWidth: 400) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }
    map: file(relativePath: {eq: "map.jpg"}){
    childImageSharp {
      fluid(maxWidth: 800) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
      original{
        src
        height
        width
      }
    }
  }

}
`
