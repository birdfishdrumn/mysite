
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import Box from '@material-ui/core/Box';
import { Link } from "gatsby";
import { PaintWorkshop,RemoteWorkshop,BlowGlassWorkshop,GroupWorkshop} from "../WorkshopList/index";


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
          {children}
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
  tab: {
    padding:"15px"
  },
  bar: {
    position:"fixed"
  }
}));

export default function WorkshopTab({num,data}) {


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
        aria-label="scrollable force tabs example"
        //  variant="scrollable"
              centered
        >
          <Tab label="絵付け"  {...a11yProps(0)} />
        <Tab label="ガラス吹き" {...a11yProps(1)}/>
        <Tab label="リモート"  {...a11yProps(2)} />
         <Tab label="団体・学校"  {...a11yProps(3)} />

        </Tabs>

      <TabPanel value={value} index={0}>
      <PaintWorkshop/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BlowGlassWorkshop/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <RemoteWorkshop/>
      </TabPanel>
         <TabPanel value={value} index={3}>
       <GroupWorkshop/>
      </TabPanel>

    </div>
  );
}
