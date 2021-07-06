import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"
import { Button } from "../Button/styles"
import Reservation from "./Reservation"

import { SubTitle, Description } from "../../style/GlobalStyle"
const Reserve = () => {
  const handleClickOpen = () => {
   const url = "https://reservation-app-dusky.vercel.app"
    window.open(url, "_blank")
  }
  return (
    <div className="center">
      <SubTitle>電話予約</SubTitle>

      <Description large color="black">
        <PhoneIcon style={{ fontSize: 50 }} />
        03-3832-0227
      </Description>
      <Description width="half" left>
        ※10:30〜18:00の受付になります。また月曜は定休日のため、月曜日以外にご連絡ください。
      </Description>
      <SubTitle>ご予約フォーム</SubTitle>
      <Description width="half" left>
        ※予約フォームでは送信した時点では予約は完了しません。返信のメールが来るまでお待ちくださいませ。最短で翌日のお返事になります。
      </Description>
          <div className="center"style={{ marginTop: 50 }}>
        <Button onClick={()=>handleClickOpen()}>予約フォームを開く</Button>
           <p style={{ color: "red", fontSize: "0.9rem" }}>
          ※外部リンクに飛びます。
          <br />
        </p>

      </div>
    </div>
  )
}

export default Reserve
