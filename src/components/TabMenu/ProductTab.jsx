import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "gatsby";
import { Fuurin,Earring,Poppen,Tsuridai,WorkshopKit } from "../WindBellList/index";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    width: '100%',

  },
  tab: {
    padding: "15px",
    margin: "0 auto",
    justifyContent:"center"
  },
  bar: {
    position:"fixed"
  }
}));

export default function ScrollableTabsButtonForce({num,location}) {

   const [isHeightOver, setIsHeightOver] = React.useState(false);

  // useEffect(() => {
  //   const scrollAction = () => {
  //     if (450 < window.scrollY) {
  //       // 150の値は 判定したい高さに変更する
  //       setIsHeightOver(true);
  //     } else {
  //       setIsHeightOver(false);
  //     }
  //   };
  //   window.addEventListener("scroll", scrollAction, {
  //     capture: false,
  //     passive: true
  //   });
  //   scrollAction(); // 初期描画時に一度だけ判定する

  //   return () => {
  //     window.removeEventListener("scroll", scrollAction);
  //   };
  // }, []);
const number=Number(num)
  const classes = useStyles();
  const [value, setValue] = React.useState(number ? number : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

        <Tabs
          style={{boxShadow:"none"}}
          value={value}
          onChange={handleChange}
         className={classes.tab}
          indicatorColor="transparent"
        textColor="primary"
          scrollButtons="off"
        aria-label="scrollable force tabs example"
         variant="scrollable"
              // centered
        >
          <Tab label="風鈴"  {...a11yProps(0)} />
        <Tab label="イヤリング" {...a11yProps(1)}/>
          <Tab label="ポッペン"  {...a11yProps(2)} />
        <Tab label="体験キット" {...a11yProps(3)} />
         <Tab label="吊り台" {...a11yProps(4)} />
        </Tabs>

      <TabPanel value={value} index={0}>
        <Fuurin location={location}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Earring/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Poppen/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <WorkshopKit/>
      </TabPanel>
          <TabPanel value={value} index={4}>
        <Tsuridai/>
      </TabPanel>
    </div>
  );
}











// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import {Link} from "gatsby"
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   padding:"20px"
//   },
// });

// const  ProductTab = () =>{
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//  <Paper>
//     <Tabs
//       className={classes.root}
//         value={value}
//           style={{boxShadow:"none"}}
//         onChange={handleChange}
//         indicatorColor="transparent"
//         textColor="primary"
//         centered
//       >
//         <Link to="/fuurin"><Tab label="風鈴" /></Link>
//         <Link to="/earring"><Tab label="イヤリング" /></Link>
//       <Tab label="ぽっぺん" />
//         <Tab label="釣り台" />
//       </Tabs>
// </Paper>
//   );
// }
// export default ProductTab
