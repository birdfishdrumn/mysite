import React,{useState,useEffect,useCallback}  from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import { AchievementFilter, MoneyLuckFilter, DiseaseFree, AmuletFilter, SeasonFlower, KirikoFilter, TsuriganeFilter, FuukinFilter, AnimalFilter } from "./index";
import InputLabel from '@material-ui/core/InputLabel';
import Layout from "../../components/layout"
import { SubTitle, Description,GridList,FlexNav,Scroll,ScrollItem} from "../../style/GlobalStyle";
import { Button } from "../../components/Button";
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {Trans, useTranslation,Link} from 'gatsby-plugin-react-i18next';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const Fuurin = ({location}) => {
  const [change, setChange] = useState(false)
  const [language, setLanguage] = useState("")
    const classes = useStyles();


  const handleChange = (event) => {

    setLanguage(
event.target.value,
    );
  };



  const handleOn = useCallback(()=>{
      setChange(true)
  })
    const handleOff = useCallback(()=>{
      setChange(false)
    })
  console.log(location)
    useEffect(() => {
    if (location.pathname.split("/")[1]==="en") {
     setLanguage("English")
  }
  }, [])
  // console.log(location.state.number)
  return (

    <div>
         <section className="center">
      <SubTitle><Trans>まるよし風鈴の江戸風鈴</Trans></SubTitle>
          <Description  left width="half"><Trans>風鈴と聞いた時、金魚や花火、あさがおなど夏の柄が多く浮かびますが実は一つ一つ基本的には意味があります。こちらでは風鈴の意味を写真と共に紹介いたします。また現在4カ国語に翻訳もできますので海外の方もご覧になれます。</Trans>
    </Description>
        <FlexNav>
           <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Language</InputLabel>
        <Select
          native
          value={language}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
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
              <IconButton  onClick={handleOff} >
                <li><GridOnIcon fontSize="large"/></li>
                </IconButton>
            </Tooltip>
            <Tooltip title="短冊まで" interactive>
               <IconButton  onClick={handleOn} >
                <li ><ViewColumnIcon fontSize="large" /></li>
                </IconButton>
          </Tooltip>
          </FlexNav>



          <div className="space-l" />

          <SubTitle hannari><Trans>金運上昇</Trans></SubTitle>
        <MoneyLuckFilter change={change} language={language} />
         <SubTitle  hannari><Trans>目標達成</Trans></SubTitle>
        <AchievementFilter change={change} language={language} />
        <SubTitle hannari><Trans>無病息災</Trans></SubTitle>
        <DiseaseFree change={change} language={language} />
        <SubTitle hannari><Trans>魔除け</Trans></SubTitle>
        <AmuletFilter change={change} language={language} />
        <SubTitle hannari><Trans>季節の花</Trans></SubTitle>
        <SeasonFlower change={change} language={language} />
           <SubTitle hannari><Trans>切子</Trans></SubTitle>
        <KirikoFilter change={change} language={language} />
        <SubTitle hannari><Trans>可愛い動物</Trans></SubTitle>
        <AnimalFilter change={change} language={language}/>
        <SubTitle><Trans>新子丸、釣鐘型風鈴</Trans></SubTitle>
        <TsuriganeFilter change={change} language={language}/>
        <SubTitle><Trans>風琴</Trans></SubTitle>
        <FuukinFilter change={change} language={language}/>
    </section>
    <div className="space-l" />
    </div>
  )
}

export default Fuurin
