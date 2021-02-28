import React,{useEffect,useState} from "react"
// import {Header} from "../components/Header/Header"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Aos from "aos";
import { IconButton } from "@material-ui/core";
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "aos/dist/aos.css";

import { Access,Family,Media}from "../components/PageComponents/index"
import SEO from "../components/seo"
import Layout from "../components/layout"
import {SubTitle,FlexNav,FlexNavLi} from "../style/GlobalStyle"
import Image from "../components/image"


export default ({ data, location }) => {
  const [select, setSelect] = useState("Shop")
  const [active,setActive] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 1000, startEvent: 'DOMContentLoaded', once: true });

  }, [])



  const ShopTag = ({data}) => {
    switch (select) {
      case "Shop":
        return <Access data={data} />

      case "Family":
        return <Family data={data} />

      case "Media":

        return <Media />

    }
    return <Access data={data} />

  }
  return (
    <Layout>
      <SEO
        pagetitle="お店・スタッフの紹介"
        pagedesc="こちらは篠原まるよし風鈴のお店、また職人の紹介をいたします。"
        pagepath={location.pathname}
        pageimg={data.about.childImageSharp.original.src}
        pageimgw={data.about.childImageSharp.original.width}
        pageimgh={data.about.childImageSharp.original.height}
      />
      <div className="hero">
        <figure>
          <Image filename="kiriko_narabi.jpg" style={{height:"100%"}} alt="製品情報" />
        </figure>
      </div>

      <article className="content center">
        <SubTitle>お店・家族の紹介</SubTitle>
        <FlexNav  small >
          <FlexNavLi active onClick={() => setSelect("Shop")}><IconButton><StoreIcon  /></IconButton><br/>お店</FlexNavLi>
          <FlexNavLi active onClick={() => setSelect("Family")}><IconButton><SupervisedUserCircleIcon /></IconButton><br />職人の紹介</FlexNavLi>
            <FlexNavLi  active onClick={()=>setSelect("Media")}><IconButton><YouTubeIcon/></IconButton><br/>メディア</FlexNavLi>
        </FlexNav>
        {/* {active ? <Family data={data}/>:
          (
            <Access data={data}/>

         )
        } */}
        <ShopTag data={data}/>


      </article>

    </Layout>
  )
}
        //スプレッド構文で配列を展開する。
export const query = graphql`
query {
  about: file(relativePath: {eq: "Introduce/huurin_zaru_top.jpg"}){
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
      shop: file(relativePath: {eq: "shop.jpg"}){


     publicURL


  }

}
`
