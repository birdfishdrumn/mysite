import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Information,InfoTitle} from "./style";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { Description } from "../../../style/GlobalStyle";
const  NewsCard = (props) =>{

  return (
    // <Card className={classes.root}>
    //   <div className={classes.details}>

    //   </div>
    //   <CardMedia
    //     className={classes.cover}
    //   >
    //   <Img fluid={props.fluid}/>
    //   </CardMedia>
    //        <CardContent className={classes.content}>
    //     <Typography>
    //       {props.title}
    //        </Typography>
    //     <Typography variant="subtitle1" color="textSecondary">
    //            {props.dataTime && (<time dataTime={props.dataTime}><FontAwesomeIcon icon={faClock} />
    //         {props.dateJP}</time>)}
    //     </Typography>
    //     </CardContent>

    // </Card>

    <Information>
      <dl>
<dt> {props.dataTime && (<time dataTime={props.dataTime}> <FontAwesomeIcon icon={faClock} />    {props.dateJP}</time>)}</dt>
<InfoTitle>{props.title}</InfoTitle>
</dl>
      </Information>


  );
}

export default NewsCard
