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
          <Typography>{children}</Typography>
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
    flexGrow: 1,
    width: '100%',
  },
  bar: {
    position:"fixed"
  }
}));

export default function ScrollableTabsButtonForce() {

   const [isHeightOver, setIsHeightOver] = React.useState(false);

  useEffect(() => {
    const scrollAction = () => {
      if (450 < window.scrollY) {
        // 150の値は 判定したい高さに変更する
        setIsHeightOver(true);
      } else {
        setIsHeightOver(false);
      }
    };
    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true
    });
    scrollAction(); // 初期描画時に一度だけ判定する

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position={isHeightOver ? "fixed": "static"} color="white" style={{boxShadow:"none"}} >
        <Tabs
          style={{boxShadow:"none"}}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="商品"  {...a11yProps(0)} />
          <Link to ="/product"><Tab label="体験" {...a11yProps(1)}/></Link>
          <Tab label="まるよし風鈴の仕事"  {...a11yProps(2)} />
          <Tab label="お店" {...a11yProps(3)} />
          <Tab label="ご質問"  {...a11yProps(4)} />
          <Tab label="お問い合わせ" {...a11yProps(5)} />

        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
