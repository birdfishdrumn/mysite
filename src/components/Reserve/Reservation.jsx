 import React, { useState,useCallback,useContext } from "react"
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from "../UI/textInput"
import Button from "@material-ui/core/Button";
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from "date-fns/locale/ja";

import InputLabel from '@material-ui/core/InputLabel';
import { SubTitle } from "../../style/GlobalStyle"
import FormControl from '@material-ui/core/FormControl';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { FirebaseContext } from "../../firebase";
import { People } from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Reservation = ({workshop,dialog}) => {
 const disableMonday = (date) =>{

    return date.getDay() === 1;
 }
  const { firebase } = useContext(FirebaseContext);
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1);
    const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const dt = new Date()
  // const week = dt.setDate(dt.getDate() + 7)
  const minDate =dt.setDate(dt.getDate() + 3)
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = useState(dt.setDate(dt.getDate()));

console.log(new Date())




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
    [setEmail]
    );
    const inputPhone = useCallback(
    (event) => {
      setPhone(event.target.value);
    },
    [setPhone]
    );
    const inputPeople = useCallback(
    (event) => {
      setPeople(event.target.value);
    },
    [setPeople]
    );
    const inputMessage = useCallback(
    (event) => {
      setMessage(event.target.value);
    },
      [setMessage]
    );

  const handleChange = (event) => {

    setContent(
event.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.postContact({
      name: name,
      email: email,
      phone: phone,
      content: content,
      selectedDate:selectedDate,
      message: message,
      people:people
    })
}

  const canSubmit = () => {
    if (name === "") return true;
    if (email === "") return true;
    if (phone === "") return true;
    if (content === "") return true;

      if (selectedDate === "") return true;



    return false;
  };


  return (
    <div className="contact center">
    <SubTitle>体験のお申し込み</SubTitle>
       <form onSubmit={handleSubmit}>
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

            <TextInput
          id={phone}
          fullWidth={true}
          label={"電話番号"}
          multiline={false}
          required={true}
          onChange={inputPhone}
          rows={1}
          variant="outlined"
          value={phone}
          type={"tell"}
          name="tell"
        />
        <div className="space-s" />


        {/* <span style={{color:"red"}}>※ガラス吹き,絵付けどちらか、体験人数を入力ください。また何か備考があれば続けて追記お願い致します。<br/></span> */}




          <TextInput
          fullWidth={true}
          id="outlined-number"
          label="人数"
          type={"people"}
          variant="outlined"
          value={people.toLocaleString()}
          onChange={inputPeople}
          name="people"
        />


          <TextInput
          id={message}
          fullWidth={true}
          label={"備考"}
          multiline={true}
          required={false}
          onChange={inputMessage}
          rows={5}
          variant="outlined"
          value={message}
          type={"text"}
          name="message"
        />
        <div className="space-m" />


  <FormControl component="fieldset">
      <FormLabel component="legend">体験内容</FormLabel>
      <RadioGroup aria-label="gender" name="content" value={content} onChange={handleChange}>
        <FormControlLabel value="絵付け体験" control={<Radio />} label="絵付け体験" />
        <FormControlLabel value="ガラス吹き体験" control={<Radio />} label="ガラス吹き体験" />
      </RadioGroup>
    </FormControl>
        <div className="space-l" />

      <MuiPickersUtilsProvider utils={DateFnsUtils}   locale={jaLocale}>
            <KeyboardDateTimePicker
              disablePast
              shouldDisableDate={disableMonday}
              minDate={minDate}

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

export default Reservation
