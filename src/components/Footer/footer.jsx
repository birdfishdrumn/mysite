import React from "react"
import {graphql,useStaticQuery,Link} from "gatsby"

import { Logo } from "../index"
import {FooterWrapper,FooterContainer,SNS,ContactIcon,FooterNav,Privacy} from "./style"
import { Description } from "../../style/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
faInstagram
} from "@fortawesome/free-brands-svg-icons"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { NavItem } from "../Header/NavItem"


const Footer = () => {
	const date = new Date()
	const year = date.getFullYear()

  return (
		<FooterWrapper>
						<div>	<FooterNav>
    <NavItem lang/>
			</FooterNav>
			</div>
  	<FooterContainer>
		<div>
		<Link to = "/">
						<Logo/>
					</Link>
					<div className="space-s"/>

					<Description left color="white">
						〒110-0016<br />
						佐竹商店街内<br/>
						東京都台東区台東4-25-10</Description>

			</div>

 <ContactIcon>
					<Description  large color="white" left><PhoneIcon style={{ fontSize: 40 }} /> 03-3832-0227</Description>
					<Description color="white" style={{fontSize:"0.9rem"}} small left>受付時間 10:30〜18:00</Description>
					<Description  large color="white" left><MailIcon style={{ fontSize: 40 }} /> maruyosi@sam.hi-ho.ne.jp</Description>
					{/* <Description color="white" style={{fontSize:"0.9rem"}} small left>基本的に翌営業日にお返事</Description> */}

					</ContactIcon>


<div>
		<SNS>
			<li>
				<a href="https://twitter.com/@maruyosi_fuurin" target="blank">
					<FontAwesomeIcon icon={ faTwitter} />
					 <span>Twitter</span>
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/maruyosi_edofuurin" target="blank" >
						<FontAwesomeIcon icon={ faInstagram} />
					 <span>Instagram</span>
				</a>
			</li>
					</SNS>
					</div>

  </FooterContainer>
 		<Privacy>
				<p><Link to="/privacy">個人情報のお取り扱いに関しまして</Link></p>
				<p>{year} &copy; 篠原まるよし風鈴 All Rights Reserved.</p>
	 </Privacy>
</FooterWrapper>
)
}
export default Footer
