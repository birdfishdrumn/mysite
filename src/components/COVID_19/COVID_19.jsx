import React from 'react';
import { withStyles,makeStyles} from '@material-ui/core/styles';
import { Button } from "../Button/styles";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Description, MinTitle, Nav,GridList,MinDescription } from "../../style/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Trans} from 'gatsby-plugin-react-i18next';
import { shopPlan ,customerPlan} from "./covidData";
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

const useStyles = makeStyles((theme) => ({
  dialog: {
    zIndex: 10000,
    maxWidth: "1200px",
    margin:"0 auto"
  }
}));



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



export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button caution onClick={handleClickOpen}>
       <Trans>当店の新型コロナウイルス対策につきまして</Trans>
      </Button>
      <Dialog className={classes.dialog} nClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
           当店の新型コロナウイルス対策につきまして
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           <Description left>私達なりに感染の不安を少しでも和らげて風鈴のご購入や、体験を楽しんでいただけますようにいくつか対策を考えました。もうコロナが広がってから1年以上たって慣れてしまいましたが、引き続き感染対策のご協力をお願い致します。</Description>
          </Typography>

               <div className="space-l"/>
            <Typography gutterBottom>
           <MinTitle>お店の対策</MinTitle>
          </Typography>
          <div className="space-l"/>
          <div gutterBottom>
            <GridList  gap >
              {shopPlan.map(item => (
                <>
                  <div> <FontAwesomeIcon size="3x" icon={item.icon} /><MinTitle small>{item.title}</MinTitle>
                   <MinDescription>{item.description}</MinDescription></div>

                  </>
              ))}

            </GridList>
          </div>
          <Typography gutterBottom>
                 <div className="space-l"/>
           <MinTitle>お客様へのお願い</MinTitle>
          </Typography>
          <div className="space-l"/>
          <div gutterBottom>
            <GridList  gap >
              {customerPlan.map(item => (
                <>
                  <div> <FontAwesomeIcon size="3x" icon={item.icon} /><MinTitle small>{item.title}</MinTitle>
                   <MinDescription>{item.description}</MinDescription></div>

                  </>
              ))}

            </GridList>
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
}
