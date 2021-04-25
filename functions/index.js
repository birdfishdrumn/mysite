const functions = require("firebase-functions")
const admin = require("firebase-admin")
const nodemailer = require("nodemailer")

admin.initializeApp()

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const gmailSend = functions.config().admin.email
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

exports.createProduct = functions
  .region("asia-northeast1")
  .firestore.document("reservation/{reservationId}")
  .onCreate((snap, context) => {
    // const { Id } = context.params
    const post = snap.data()

    const customerEmail = post.email
    // console.log("Id", Id)
    let mailOptions = {
      from: gmailEmail,
      to: [gmailSend, customerEmail],

      subject: "篠原まるよし風鈴",
      html: `<div>
              <h4>この度は体験のご予約をいただきありがとうございます。</h4>
               <h4>下記の内容で体験の予約を受付させていただきました。</h4>

                <ul>
                    <li>${post.name}様</li>
                    <li>${post.email}</li>
                    <li>${post.phone}</li>
                    <li>${post.content}</li>
                    <li>${post.people}名</li>
                     <li>${post.selectedDate.toDate().toLocaleDateString()}</li>
                    <li>${post.time}</li>

               </ul>
                  <p>${post.message}</p>
                   <p>ご返信まで最短で翌営業日までにお返事させていただきますので、少々お待ちくださいませ。お客様にメールが届き次第予約の完了となりますのでよろしくお願い致します。
                   </p>
               <p>篠原まるよし風鈴<br/>東京都台東区台東4-25-10</p>
               <p>tel 03-3832-0227<br/>
               mail  maruyosi@sam.hi-ho.ne.jp
               </p>
            </div>`,
    }

    mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err)
        return
      }
      console.log("success")
    })
  })

exports.contactForm = functions
  .region("asia-northeast1")
  .firestore.document("contacts/{contactId}")
  .onCreate((snap, context) => {
    // const { Id } = context.params
    const post = snap.data()

    const customerEmail = post.email
    // console.log("Id", Id)
    let mailOptions = {
      from: gmailEmail,
      to: [gmailSend, customerEmail],

      subject: "篠原まるよし風鈴",
      html: `<div>
              <h4>この度はお問い合わせいただき誠にありがとうございます。</h4>
               <h4>下記の内容でお問い合わせを受け付けました。</h4>

                <ul>
                    <li>${post.name}様</li>
                    <li>${post.email}</li>
                    <li>${post.subject}</li>
                    <li>${post.message}</li>

               </ul>
                   <p>担当の物が確認次第お返事させていただきますので、少々お待ちくださいませ。</p>
               <p>篠原まるよし風鈴<br/>東京都台東区台東4-25-10</p>
               <p>tel 03-3832-0227<br/>
               mail  maruyosi@sam.hi-ho.ne.jp
               </p>
            </div>`,
    }

    mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err)
        return
      }
      console.log("success")
    })
  })
