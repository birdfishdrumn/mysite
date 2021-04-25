import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"

import Reservation from "./Reservation"

import { SubTitle, Description } from "../../style/GlobalStyle"
const Reserve = () => {
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
        <br />
        また他のお客様たちとの調整で、ご希望のお時間を少しずらしてご提案させていただくこともありますのでよろしくお願い致します。
      </Description>
      <Reservation />
    </div>
  )
}

export default Reserve
