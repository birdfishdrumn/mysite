import React from "react"

import Header from "./header"
import Footer from "./footer"
import CategoryFooter from "./categoryFooter"
import TagFooter from "./tagFooter"
import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"//FontawsomeCssを先読みにする設定
import { config } from "@fortawesome/fontawesome-svg-core" //Fontawsomeのコンポーネント内でcssを適用しないようにする設定
config.autoAddCss = false
const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
        <CategoryFooter/>
       <TagFooter/>
      <Footer/>
    </div>
  )
}

export default Layout
