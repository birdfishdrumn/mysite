import React, { useState,useCallback } from "react";
import { Link} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from "@material-ui/core/Button";
import TextInput from "../components/UI/textInput"

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


//   const handleChange = useCallback((event) => {
//     switch (event.target.name) {
//       case "name":
//         setName(event.target.value);
//         break;
//       case "email":
//         setEmail(event.target.value);
//         break;
//       case "subject":
//         setSubject(event.target.value);
//         break;
//       case "message":
//         setMessage(event.target.value);
//         break;
//       default:
//         console.log("key not found");
//     }
// },[setName,setEmail,setMessage,setSubject])

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );
    const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setName]
    );
    const inputSubject = useCallback(
    (event) => {
      setSubject(event.target.value);
    },
    [setName]
    );
    const inputMessage = useCallback(
    (event) => {
      setMessage(event.target.value);
    },
    [setName]
  );

  const canSubmit = () => {
    if (name === "") return true;
    if (email === "") return true;
    if (subject === "") return true;
    if (message === "") return true;

    return false;
  };

  return (
    <div>
      <Layout>
        <SEO  pagetitle="お問い合わせフォーム" />

        <h1 className="bar center">Contact</h1>
        <div className="space-m" />

        <p className="center">
          各種お問い合わせはこちらのフォームよりお願いいたします。
          <br></br>
          お名前・メールアドレス・件名・問い合わせ内容を記載して送信ボタンをクリックしてください。
        </p>
        <div className="space-l"/>
        <div className="contact center">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            {/* <div className="contact__area">
              {/* <TextField
                id="name"
                className="contact__field"
                name="name"
                label="お名前"
                type="text"
                variant="outlined"
                value={name}
                onChange={handleChange}
              />
            </div> */}

            <TextInput
              id={name}
          fullWidth={true}
          label={"お名前"}
          multiline={false}
          required={true}
          onChange={inputName}
              rows={1}
               variant="outlined"
          value={name}
              type={"text"}
            />
                 <div className="space-s" />
            <TextInput
              id={email}
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          onChange={inputEmail}
              rows={1}
               variant="outlined"
          value={email}
              type={"email"}

            />
                 <div className="space-s" />
            <TextInput
              id={subject}
          fullWidth={true}
          label={"件名"}
          multiline={false}
          required={true}
          onChange={inputSubject}
              rows={1}
               variant="outlined"
          value={subject}
          type={"text"}
            />
                 <div className="space-s" />
            <TextInput
          id={message}
          fullWidth={true}
          label={"お問い合わせ内容"}
          multiline={true}
          required={true}
          onChange={inputMessage}
              rows={5}
               variant="outlined"
          value={message}
          type={"text"}
        />
     <div className="space-s" />
            <div className="contact__btn">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={canSubmit()}
              >
                送信
              </Button>
            </div>
          </form>
        </div>

      </Layout>
    </div>
  );
};

export default Contact;
