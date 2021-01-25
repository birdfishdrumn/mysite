import styled from "styled-components"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

export const HeaderBar = styled(AppBar)
`
   flex-grow: 1;
`

export const Bar = styled(Toolbar)
`
    margin: 0 auto;
    max-width: 1204px;
    width: 100%;

`
export const HeaderMenu = styled.div `
width:100%;
margin-top:20px;
   display:flex;
   justify-content:space-between;

`

export const Nav = styled.nav `
 @media(max-width:767px){
   display:none;
 }
 >ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 18px;
    font-weight:bold;
    font-size:1.2rem;
    text-shadow:1px 1px 2px black;
    color: white;
    >li{
          -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
   font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
    }
     >li:not(:last-child) {
    margin-right: 55px;
}
}
`