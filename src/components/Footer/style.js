import styled from "styled-components"

export const FooterWrapper = styled.footer `
    padding-top: 80px;
    padding-bottom: 80px;
    color: #fff;

    background-image: none;
    background-size: cover;
    background-color: #00695B;
    @media(min-width:768px){
      padding-top: 120 px;
        padding-bottom: 120 px;
    }
`

export const FooterContainer = styled.div `
    display: grid;
    flex-direction: column;
    align-items: center;
   grid-template-columns:1fr;
    >div{
        text-align: center;
        margin:5px auto;
           @media(min-width:768px){

        text-align: left;
    }
    }
      @media(min-width:768px){
       flex-direction: row;
            justify-content: space-between;
            align-items: center;
          grid-template-columns:2fr 3fr 3fr;
    }
`
export const ContactIcon = styled.div `
 >p{
   margin-top:20px;
 }
`
export const SNS = styled.ul `
     display: flex;
    list-style: none;
    font-size: 40px;
    text-align:center;
    margin:0 auto;
    >li:not(last-child){
     margin:20px;
    }
  `

// .footer.site p {
//     margin - top: 20 px;
//     margin - bottom: 50 px;
//     font - size: 14 px;
// }




/* SNSメニュー */