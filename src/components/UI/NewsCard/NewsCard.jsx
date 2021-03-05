import React from 'react';

import { Information,InfoTitle} from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

import { Link } from "gatsby";
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
<InfoTitle><Link to={`/blog/post/${props.slug}`}>{props.title}</Link></InfoTitle>
</dl>
      </Information>


  );
}

export default NewsCard
