import React from "react"
import {graphql,useStaticQuery,Link} from "gatsby"
import Img from "gatsby-image"
import { Logo } from "./index"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
faInstagram
} from "@fortawesome/free-brands-svg-icons"
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
      <footer className="footer">
	<div className="container">
		<div className="site">
		<Link to = "/">
        <Logo/>
		</Link>
		</div>

		<ul className="sns">
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
		</ul>
      </div>
      <div className="back">

      </div>
</footer>
)
}

export default Footer
