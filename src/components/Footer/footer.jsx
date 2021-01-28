import React from "react"
import {graphql,useStaticQuery,Link} from "gatsby"
import Img from "gatsby-image"
import { Logo } from "../index"
import {FooterWrapper,FooterContainer,SNS,ContactIcon} from "./style"
import { Description } from "../../style/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
faInstagram
} from "@fortawesome/free-brands-svg-icons"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
const Footer = () => {

  const data = useStaticQuery(graphql`
query{
    pattern: file(relativePath: {eq: "pattern.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1920,quality: 90) {

...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
    }
  }
`)

  return (
 <FooterWrapper>
  	<FooterContainer>
		<div className="site">
		<Link to = "/">
        <Logo/>
					</Link>
					<Description color="black">東京都台東区台東4-25-10</Description>
		</div>
				<ContactIcon>
					<p><PhoneIcon />03-3832-0227</p>
				<p>	<MailIcon/>mail: maruyosi@sam.hi-ho.ne.jp</p>
		</ContactIcon>
		<SNS>
			<li>
				<a href="https://twitter.com/">
					<FontAwesomeIcon icon={ faTwitter} />
					<span className="sr-only">Twitter</span>
				</a>
			</li>
			<li>
				<a href="https://facebook.com/">
					<FontAwesomeIcon icon={ faFacebookSquare} />
					<span className="sr-only">Facebook</span>
				</a>
			</li>
			<li>
				<a href="http://instagram.com/">
						<FontAwesomeIcon icon={ faInstagram} />
					<span className="sr-only">Instagram</span>
				</a>
			</li>
		</SNS>
  </FooterContainer>
      <div className="back">

      </div>
</FooterWrapper>
)
}

export default Footer
