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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
       当店の新型コロナウイルス対策につきまして
      </Button>
      <Dialog className={classes.dialog} nClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
           当店の新型コロナウイルス対策につきまして
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           <Description left>私達のお店は従業員も少なく、お店も小さいですが、私達なりに感染の不安を少しでも和らげて風鈴のご購入や、体験を楽しんでいただけますようにいくつか対策を考えました。まだまだ肩の力を抜けない世の中が続きますが、少しでもこの状況を脱したいと一人一人が協力していけば、いつか終わりが見えてくると思うので感染対策のご協力をお願い致します。</Description>
          </Typography>
          {/* <Typography gutterBottom>
           <MinTitle>お店の対策</MinTitle>
          </Typography>
          <Typography gutterBottom>
            <Nav small noSpace>
              {shopPlan.map(item => (
                <>
                <li><FontAwesomeIcon icon={item.icon} /> {item.title}</li>
                  <p>{item.description}</p>
                  </>
              ))}

            </Nav>
          </Typography> */}
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
