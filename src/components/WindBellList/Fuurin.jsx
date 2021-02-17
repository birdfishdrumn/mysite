import React,{useState,useEffect,useCallback}  from 'react'
import {graphql} from "gatsby"
import Image from "../image"
import { AchievementFilter, MoneyLuckFilter, DiseaseFree, AmuletFilter, SeasonFlower, KirikoFilter, TsuriganeFilter, FuukinFilter, AnimalFilter } from "./index";
import InputLabel from '@material-ui/core/InputLabel';

import { SubTitle, Description, GridList, FlexNav, Scroll, ScrollItem } from "../../style/GlobalStyle";
import { ProductSlider } from "../index";
import { Button } from "../../components/Button";
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import NativeSelect from '@material-ui/core/NativeSelect';
// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import { Slide } from 'material-auto-rotating-carousel';
import {Trans, useTranslation,Link} from
'gatsby-plugin-react-i18next';


// const { red, blue, green } = require('@material-ui/core/colors');



const useStyles = makeStyles((theme) => ({
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
    margin:"0 auto"
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialog: {
    zIndex:"999"
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



const Fuurin = ({location,data}) => {
  const [change, setChange] = useState(false)
  const [language, setLanguage] = useState("")
    const classes = useStyles();
 const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  console.log(data)
    useEffect(() => {
    if (location.pathname.split("/")[1]==="en") {
     setLanguage("English")
  }
  }, [])
  // console.log(location.state.number)
  return (

    <div>
         <section className="center">
      <SubTitle><Trans>江戸風鈴</Trans></SubTitle>
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
           {/* <Tooltip title="拡大" interactive>
               <IconButton  onClick={handleClickOpen} >
                <li ><SearchIcon fontSize="large" /></li>
                </IconButton>
          </Tooltip> */}
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

      <Dialog className={classes.dialog} nClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>

        </DialogTitle>

        <DialogContent>
          <ProductSlider/>
        </DialogContent>


      </Dialog>

    </div>
  )
}

export default Fuurin
