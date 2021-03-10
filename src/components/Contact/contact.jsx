 import React, { useState,useCallback,useContext } from "react"

import 'date-fns';

import TextInput from "../UI/textInput"
import Button from "@material-ui/core/Button";

import {SubTitle} from "../../style/GlobalStyle"

import { FirebaseContext } from "../../firebase";



const Contact = ({dialog}) => {


   const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const { firebase } = useContext(FirebaseContext);
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
    [setEmail]
    );
    const inputSubject = useCallback(
    (event) => {
      setSubject(event.target.value);
    },
    [setSubject]
    );
    const inputMessage = useCallback(
    (event) => {
      setMessage(event.target.value);
    },
      [setMessage]
    );


  const canSubmit = () => {
    if (name === "") return true;
    if (email === "") return true;
    if (subject === "") return true;

      if (message === "") return true;

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.postForm({
      name: name,
      email: email,
      subject:subject,

      message: message,


    })
}

  return (
    <div className="contact center">
      {dialog && <SubTitle>お問い合わせ</SubTitle>}
      <form
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

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
          name="name"
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
          name="email"
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
          name="subject"
        />


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
          name="message"
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
  )
}

export default Contact
