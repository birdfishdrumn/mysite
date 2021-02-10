import React, { useEffect } from 'react';
import Aos from "aos"
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import { timeLineData } from "./timeLineData";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '5px 15px',
    flex: "none"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimeLineWrapper = styled.div`
 max-width:900px;
 margin:0 auto;
`
const TimeLineText = styled(Typography)`
font-size:1rem;
text-align:left;
`
const TimeLineDescription = styled(Typography)`
font-size:0.9rem;
text-align:left;
`
export default function CustomizedTimeline() {
  const classes = useStyles();
useEffect(() => {
    Aos.init({ duration: 1000, startEvent: "DOMContentLoaded", once: true })
  }, [])
  return (

    <TimeLineWrapper>
       {
        timeLineData.map((item) => (
          <Timeline align="left">
            <TimelineItem data-aos="fade-up">
     <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {item.year}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={item.color}>

          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper  className={classes.paper}>
            <TimeLineText variant="h6" component="h5">

{item.title}
                  </TimeLineText>
                  <TimeLineDescription>
  {item.description}
                  </TimeLineDescription>
          </Paper>
        </TimelineContent>
      </TimelineItem>
        </Timeline>
        ))}
    </TimeLineWrapper>
      );
}
