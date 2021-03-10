import React,{useState} from "react"
import PropTypes from 'prop-types';


import { Logo } from "../Logo"
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import {HeaderBar,Bar,Nav,HeaderMenu,MobileNav,LangNav} from "./style"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';


import {NavItem} from "./NavItem"

const Hamburger = styled(IconButton)`
  display:none;
  @media(max-width:1024px){
    display:block
  }
`
const LogoWrapper = styled.div`
  @media(max-width:1024px){
    margin-top:-5px;
  }

`

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2.5),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
    fontSize: theme.spacing(5)
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
    color: "black",
    textShadow:"1px 1px 2px white"
  },

}));



function HideOnScroll(props) {

  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon  />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const Header = (props) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false);
  const { languages, changeLanguage } = useI18next();




    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
          <header className="header">
          <HideOnScroll {...props}>
                     <HeaderBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Bar >
            <HeaderMenu>
              <div>
                  <Link to="/">
                    <LogoWrapper><Logo /></LogoWrapper>
                  </Link>
                </div>
                <LangNav small>
                      {languages.map((lng) => (
                      <li key={lng}>
                         <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lng);
              }}>
              {lng}
            </a>
                    </li>
                     ))}
                </LangNav>

             <div>
                   <Hamburger className={classes.menuButton} onClick={handleClickOpen}>
                            <MenuIcon style={{ fontSize: 50 }} />
                  </Hamburger>

                    <Nav>
                     <NavItem/>
                    </Nav>
             <div>

        <Dialog fullScreen open={open} className={classes.dialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
          <DialogContent>
           <MobileNav> <NavItem mobile lang/></MobileNav>
        </DialogContent>
        <DialogActions>


        </DialogActions>
      </Dialog>
      </div>

           </div>
                          </HeaderMenu>

        </Bar>

                  </HeaderBar>
        </HideOnScroll>

    </header>
    </div>

  )
}

export default Header
