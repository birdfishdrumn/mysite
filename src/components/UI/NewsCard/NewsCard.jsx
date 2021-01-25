import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components"

import Img from "gatsby-image"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "70%",
    margin: "0 auto 30px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    textAlign: "left",
    alignItems: "center",
    margin: "auto 0",


  },
  cover: {
    width: 151,
    height:151,
    objectFit: "cover"
  }
}));



const  NewsCard = (props) =>{
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>

      </div>
      <CardMedia
        className={classes.cover}
      >
      <Img fluid={props.fluid}/>
      </CardMedia>
           <CardContent className={classes.content}>
        <Typography>
          {props.title}
           </Typography>
        <Typography variant="subtitle1" color="textSecondary">
               {props.dataTime && (<time dataTime={props.dataTime}><FontAwesomeIcon icon={faClock} />
            {props.dateJP}</time>)}
        </Typography>
        </CardContent>

    </Card>
  );
}

export default NewsCard
