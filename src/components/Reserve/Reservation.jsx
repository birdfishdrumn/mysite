import React, { useState, useCallback, useContext } from "react"
import "date-fns"
import { makeStyles } from "@material-ui/core/styles"
import TextInput from "../UI/textInput"
import Button from "@material-ui/core/Button"
import DateFnsUtils from "@date-io/date-fns"
import jaLocale from "date-fns/locale/ja"

import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import { FirebaseContext } from "../../firebase"

import Select from "@material-ui/core/Select"

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
}))

const Reservation = () => {
  const disableMonday = date => {
    return date.getDay() === 1
  }
  const { firebase } = useContext(FirebaseContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState(1)
  const [phone, setPhone] = useState("")
  const [time, setTime] = useState("")
  const [message, setMessage] = useState("")
  const [content, setContent] = useState("")
  const dt = new Date()
  // const week = dt.setDate(dt.getDate() + 7)
  const minDate = dt.setDate(dt.getDate() + 2)
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = useState(dt)

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const inputName = useCallback(
    event => {
      setName(event.target.value)
    },
    [setName]
  )
  const inputEmail = useCallback(
    event => {
      setEmail(event.target.value)
    },
    [setEmail]
  )
  const inputPhone = useCallback(
    event => {
      setPhone(event.target.value)
    },
    [setPhone]
  )

  const inputMessage = useCallback(
    event => {
      setMessage(event.target.value)
    },
    [setMessage]
  )
  const selectPeople = event => {
    setPeople(event.target.value)
  }

  const selectTime = event => {
    setTime(event.target.value)
  }

  const handleChange = event => {
    setContent(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    firebase.postContact({
      name: name,
      email: email,
      phone: phone,
      content: content,
      selectedDate: selectedDate,
      message: message,
      people: people,
      time: time,
    })
  }

  const canSubmit = () => {
    if (name === "") return true
    if (email === "") return true
    if (phone === "") return true
    if (content === "") return true

    if (selectedDate === "") return true
    if (time === "") return true

    return false
  }

  return (
    <div className="contact center">
      {/* <SubTitle>体験のお申し込み</SubTitle> */}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <TextInput
          id={name}
          fullWidth={true}
          label={"お名前(必須)"}
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
          label={"メールアドレス(必須)"}
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
          label={"電話番号(必須)"}
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

        <div className="space-s" />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">人数</InputLabel>
          <Select
            native
            value={people}
            onChange={selectPeople}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
          </Select>
        </FormControl>
        <p style={{ color: "red", fontSize: "0.9rem", textAlign: "left" }}>
          ※只今フォームでは6人までのお申し込みとなっております。それ以上は電話でご相談ください。
          <br />
        </p>

        <div className="space-m" />

        <FormControl component="fieldset">
          <FormLabel component="legend">体験内容</FormLabel>
          <div className="space-s" />
          <RadioGroup
            aria-label="gender"
            name="content"
            value={content}
            onChange={handleChange}
          >
            <FormControlLabel
              value="絵付け体験"
              control={<Radio />}
              label="絵付け体験"
            />
            <FormControlLabel
              value="ガラス吹き体験"
              control={<Radio />}
              label="ガラス吹き体験"
            />
          </RadioGroup>
        </FormControl>
         <p style={{ color: "red", fontSize: "0.9rem", textAlign: "left" }}>

          <br />
        </p>
        <div className="space-l" />

        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
          <KeyboardDatePicker
            disablePast
            shouldDisableDate={disableMonday}
            minDate={minDate}
            margin="normal"
            id="date-picker-dialog"
            label="体験希望日"
            format="yyyy/MM/dd"
            value={selectedDate}
            name="message"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <p style={{ color: "red", fontSize: "0.9rem", textAlign: "left" }}>
          ※フォームでの体験は現在の日時から2日後のみ予約可能です。それ以内でしたらお電話でご予約ください。
          <br />
        </p>
          <p style={{ color: "red", fontSize: "0.9rem", textAlign: "left" }}>
          ※只今6/12日(土曜日)は12:30〜14:30の間は混み合っている為、それ以外のお時間をご検討の上、電話でのみご予約くださいませ。お手数おかけいたしますがよろしくお願い致します。
          <br />
        </p>

        <div className="space-s" />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">体験時間</InputLabel>
          <Select
            native
            value={time}
            onChange={selectTime}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"10:30"}>10:30</option>
            <option value={"11:00"}>11:00</option>
            <option value={"13:00"}>13:00</option>
             <option value={"13:00"}>13:30</option>
            <option value={"14:00"}>14:00</option>
             <option value={"14:00"}>14:30</option>
            <option value={"15:00"}>15:00</option>
            <option value={"15:00"}>15:30</option>
          </Select>
        </FormControl>
        <div className="space-m" />
        <TextInput
          id={message}
          fullWidth={true}
          label={"備考"}
          placeholder="何かご希望がございましたお描き下さい。"
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
