import React from "react"

import Header from "./Header/header"
import Footer from "./Footer/footer"
// import "nprogress/nprogress.css";
import "./layout.css"
import { FirebaseContext,useAuth} from "../firebase";

import "@fortawesome/fontawesome-svg-core/styles.css"//FontawsomeCssを先読みにする設定
import { config } from "@fortawesome/fontawesome-svg-core" //Fontawsomeのコンポーネント内でcssを適用しないようにする設定
config.autoAddCss = false
const Layout = ({ children }) => {
   const {firebase} = useAuth()
  return (
    <div>
      <FirebaseContext.Provider value={{firebase}}>
      <Header />
     {/* <TabMenu/> */}
        {children}


        <Footer />
        </FirebaseContext.Provider>
    </div>
  )
}

export default Layout
