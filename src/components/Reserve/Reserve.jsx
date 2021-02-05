import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { Contact } from "../index";
import { SubTitle,Description } from "../../style/GlobalStyle"
const Reserve = () => {
  return (
    <div className="center">
      <SubTitle>電話予約</SubTitle>

      <Description large color="black"><PhoneIcon style={{ fontSize: 50 }} />03-3832-0227</Description>
      <Description>※10:30〜18:00の受付になります。また月曜は定休日のため、月曜日以外にご連絡ください。</Description>
      <SubTitle>ご予約フォーム</SubTitle>
      
      <Contact workshop/>
    </div>
  )
}

export default Reserve
