 import React, { useState,useCallback } from "react"
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from "../UI/textInput"
import Button from "@material-ui/core/Button";
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from "date-fns/locale/ja";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Contact = ({outline,workshop}) => {
 const disableMonday = (date) =>{

    // const dateInterditesRaw = [
    //   new Date(date.getFullYear(),0,3),

    // ];


    // const dateInterdites = dateInterditesRaw.map((arrVal) => {return
    // arrVal.getTime()});

    return date.getDay() === 1;
 }

   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(1);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dt = new Date()
  // const week = dt.setDate(dt.getDate() + 7)
  const minDate =dt.setDate(dt.getDate() + 3)
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = useState(dt.setDate(dt.getDate() + 3));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  //   const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

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
    const inputNumber = useCallback(
    (event) => {
      setNumber(event.target.value);
    },
      [setNumber]
  );

  const canSubmit = () => {
    if (name === "") return true;
    if (email === "") return true;
    if (subject === "") return true;
    if (workshop) {
      if (selectedDate === "") return true;
    } else {
      if (message === "") return true;
    }
    return false;
  };

console.log(number)
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
        {workshop ?
          <>
          <TextInput
          id={subject}
          fullWidth={true}
          label={"体験内容 体験人数 備考"}
          multiline={true}
          required={true}
          onChange={inputSubject}
          rows={5}
          variant="outlined"
          value={subject}
          type={"text"}
          name="subject"
        />
             <span style={{color:"red"}}>※ガラス吹き,絵付けどちらか、体験人数を入力ください。また何か備考があれば続けて追記お願い致します。<br/></span></>
          :
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
      }


        {/* {workshop &&
          <TextInput
          fullWidth={true}
          id="outlined-number"
          label="人数"
          type={"number"}
          variant="outlined"
          value={number.toLocaleString()}
          onChange={inputNumber}
          name="role"
        />
       } */}


        {/* 体験かどうか  */}
        {workshop ?
      <MuiPickersUtilsProvider utils={DateFnsUtils}   locale={jaLocale}>
            <KeyboardDateTimePicker
              disablePast
              shouldDisableDate={disableMonday}
              minDate={minDate}
              minHour="10"
          margin="normal"
          id="date-picker-dialog"
          label="体験希望日"
          format="yyyy/MM/dd HH:mm"
              value={selectedDate}
              name="message"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
            />
            </MuiPickersUtilsProvider>
  //         <TextField
  //            disablePast
  // id="datetime-local"
  // label="Select Date & Time"
  // type="datetime-local"
  // defaultValue="2017-05-24T03:30"
  //           value={selectedDate}
  //           minDate = {minDate}
  // onChange={handleDateChange}
  // InputProps={{
  //  min: "2020-02-01T03:30"
  // }}
// />
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
