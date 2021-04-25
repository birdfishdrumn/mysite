import React, { useState, useEffect, useCallback } from "react"

import Image from "../image"
import {
  AchievementFilter,
  MoneyLuckFilter,
  DiseaseFree,
  AmuletFilter,
  SeasonFlower,
  KirikoFilter,
  TsuriganeFilter,
  FuukinFilter,
  AnimalFilter,
} from "./index"
import InputLabel from "@material-ui/core/InputLabel"

import { SubTitle, Description, FlexNav } from "../../style/GlobalStyle"
// import { ProductSlider } from "../index";
import styled from "styled-components"
import ViewColumnIcon from "@material-ui/icons/ViewColumn"
import GridOnIcon from "@material-ui/icons/GridOn"
import Tooltip from "@material-ui/core/Tooltip"
import { IconButton } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"

import FormControl from "@material-ui/core/FormControl"

import Select from "@material-ui/core/Select"
// import SearchIcon from '@material-ui/icons/Search';
// import NativeSelect from '@material-ui/core/NativeSelect';

import { Trans } from "gatsby-plugin-react-i18next"

const ImageContainer = styled.div`
  width: 50%;
  margin: 20px auto;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dialog: {
    zIndex: 10000,
    maxWidth: "1200px",
    margin: "0 auto",
  },
}))

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialog: {
    zIndex: "999",
  },
})

const Fuurin = ({ location, data }) => {
  const [change, setChange] = useState(false)
  const [language, setLanguage] = useState("日本語")
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = event => {
    setLanguage(event.target.value)
  }

  const handleOn = useCallback(() => {
    setChange(true)
  }, [setChange])
  const handleOff = useCallback(() => {
    setChange(false)
  }, [setChange])
  console.log(data)
  // もし英語のパスがあれば
  useEffect(() => {
    if (location.pathname.split("/")[1] === "en") {
      setLanguage("English")
    }
  }, [])
  // console.log(location.state.number)
  return (
    <div>
      <section className="center">
        <SubTitle>
          <Trans>江戸風鈴</Trans>
        </SubTitle>
        <Description left width="half">
          <Trans>
            風鈴と聞いた時、金魚や花火、あさがおなど夏の柄が多く浮かびますが実は一つ一つ基本的には意味があります。こちらでは風鈴の意味を写真と共に紹介いたします。また現在4カ国語に翻訳もできますので海外の方もご覧になれます。
          </Trans>
        </Description>
        <div className="space-l" />
        <SubTitle>
          <Trans>いろいろな江戸風鈴</Trans>
        </SubTitle>
        <ImageContainer>
          <Image filename="fuurin_size.jpg"></Image>
        </ImageContainer>
        <Description left width="half">
          <Trans>
            江戸風鈴には大きさや形が異なるものもあり、写真では左から小丸型、新子丸、釣鐘型といいます。形や大きさによっても音は違います。小丸型や新子丸では軽やかな音、釣鐘型では深みのある音がなります。
          </Trans>
          <br />
          <Trans>
            <Trans>店頭にお越しいただ場合は是非聴き比べてみてください。</Trans>
          </Trans>
        </Description>
        <div className="space-l" />
        <FlexNav>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Language</InputLabel>
            <Select
              native
              value={language}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"English"}>English</option>
              <option value={"Chinese"}>中国語</option>
              <option value={"Korean"}>韓国語</option>
              <option value={"France"}>France</option>
            </Select>
          </FormControl>
          <Tooltip title="グリッド" interactive>
            <IconButton onClick={handleOff}>
              <li>
                <GridOnIcon fontSize="large" />
                <p style={{ fontSize: "0.8rem" }}>風鈴本体</p>
              </li>
            </IconButton>
          </Tooltip>
          <Tooltip title="短冊まで" interactive>
            <IconButton onClick={handleOn}>
              <li>
                <ViewColumnIcon fontSize="large" />
                <p style={{ fontSize: "0.8rem" }}>短冊</p>
              </li>
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="拡大" interactive>
               <IconButton  onClick={handleClickOpen} >
                <li ><SearchIcon fontSize="large" /></li>
                </IconButton>
          </Tooltip> */}
        </FlexNav>
        <div className="space-l" />
        <SubTitle hannari>
          <Trans>金運上昇</Trans>
        </SubTitle>
        <MoneyLuckFilter change={change} language={language} />
        <div className="space-l" />
        <SubTitle hannari>
          <Trans>目標達成</Trans>
        </SubTitle>
        <AchievementFilter change={change} language={language} />{" "}
        <div className="space-l" />
        <SubTitle hannari>
          <Trans>無病息災</Trans>
        </SubTitle>
        <DiseaseFree change={change} language={language} />
        <div className="space-l" />
        <SubTitle hannari>
          <Trans>魔除け</Trans>
        </SubTitle>
        <AmuletFilter change={change} language={language} />
        <div className="space-l" />
        <SubTitle hannari>
          <Trans>季節の花</Trans>
        </SubTitle>
        <SeasonFlower change={change} language={language} />
        <div className="space-l" />
        <SubTitle hannari>
          <Trans>切子</Trans>
        </SubTitle>
        <KirikoFilter change={change} language={language} />
        <div className="space-l" />
        <SubTitle hannari>
          <Trans>可愛い動物</Trans>
        </SubTitle>
        <AnimalFilter change={change} language={language} />
        <div className="space-l" />
        {/* <SubTitle><Trans>新子丸、釣鐘型風鈴</Trans></SubTitle> */}
        <TsuriganeFilter change={change} language={language} />
        <div className="space-l" />
        <SubTitle>
          <Trans>風琴</Trans>
        </SubTitle>
        <FuukinFilter change={change} language={language} />
      </section>
      {/* <div className="space-l" />
       <Choice/> */}
      <div className="space-l" />
    </div>
  )
}

export default Fuurin
