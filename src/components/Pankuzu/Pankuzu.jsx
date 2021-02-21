import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {Link} from "gatsby"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:"20px 20px 0 20px",
    '& > * + *': {
      marginTop: theme.spacing(5),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link  to="/">
         Top
        </Link>
        <Link color="inherit" to={props.link} onClick={handleClick}>
          {props.title}
        </Link>
        {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
      </Breadcrumbs>

    </div>
  );
}
