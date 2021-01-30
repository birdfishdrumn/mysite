 import React, { useState,useCallback } from "react"
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import TextInput from "../UI/textInput"
import Button from "@material-ui/core/Button";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Contact = ({outline,workshop}) => {

   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
              <TextField
                id="name"
                className="contact__field"
                name="name"
                label="お名前"
                type="text"
                variant="outlined"
                value={name}
                onChange={inputName}
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
        {workshop &&
          <TextInput
          id={subject}
          fullWidth={true}
          label={"人数"}
          multiline={false}
          required={true}
          onChange={inputSubject}
          rows={1}
          variant="outlined"
          value={subject}
          type={"number"}
          name="subject"
        />
       }
        <div className="space-s" />

        {/* 体験かどうか */}
        {workshop ?
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="体験希望日"
          type="text"
          name="message"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
            />
            </MuiPickersUtilsProvider>
          :
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
        }
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
