import React from "react"
import Image from "gatsby-image"
import useInstagram from "./UserInstagram"
import { GridList } from "../../style/GlobalStyle"
const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  return (
    <>
      {/* <h2>Instagram posts from @{username}</h2> */}
      <GridList style={{ maxWidth: "1000px", gridGap: "20px" }}>
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image fluid={photo.fluid} alt={photo.caption} />
          </a>
        ))}
      </GridList>
      {/* <a href={`https://instagram.com/${username}`}>See more on Instagram</a> */}
    </>
  )
}
export default Insta
