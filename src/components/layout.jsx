import React from "react"

import Header from "./Header/header"
import Footer from "./Footer/footer"
import CategoryFooter from "./categoryFooter"
import TagFooter from "./tagFooter"
import {  TabMenu} from "./index";
import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"//FontawsomeCssを先読みにする設定
import { config } from "@fortawesome/fontawesome-svg-core" //Fontawsomeのコンポーネント内でcssを適用しないようにする設定
config.autoAddCss = false
const Layout = ({children,location}) => {
  return (
    <div>
      <Header location={location}/>
     {/* <TabMenu/> */}
        {children}


      <Footer/>
    </div>
  )
}

export default Layout
