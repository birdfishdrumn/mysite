import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ListCard,NewsImage } from "./style";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

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

      <ListCard>
        <div>
          <NewsImage fluid={props.fluid}/>
        </div>
        <div>
        <h3>{props.title}</h3>
            <p>{props.dataTime && (<time dataTime={props.dataTime}> <FontAwesomeIcon icon={faClock} />
 {props.dateJP}</time>)}</p>
    </div>

        </ListCard>


  );
}

export default NewsCard
