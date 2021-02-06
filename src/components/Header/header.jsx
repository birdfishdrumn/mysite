import React,{useState,useEffect,useCallback} from "react"
import PropTypes from 'prop-types';

import Search from "../Search/search"
import { Logo } from "../Logo"
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import {HeaderBar,Bar,Nav,HeaderMenu,MobileNav,LangNav} from "./style"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ClosableDrawer from "./ClosableDrawer";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Trans, Link, useI18next } from 'gatsby-plugin-react-i18next';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ToggleMenu from "../UI/ToggleMenu/ToggleMenu";


const Hamburger = styled(IconButton)`
  display:none;
  @media(max-width:767px){
    display:block
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
    fontSize: theme.spacing(3)
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
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

const NavItem = () => {
  return (
        <ul>
          <li>
            <Link to="/about/"><Trans>江戸風鈴とは</Trans></Link>
          </li>

          <li>
            <Link to="/product/"><Trans>まるよしの風鈴</Trans></Link>
          </li>
          <li>
            <Link to="/workshop/"><Trans>体験する</Trans></Link>
          </li>
          <li>
            <Link to="/works/"><Trans>私たちの仕事</Trans></Link>
          </li>
          <li>
            <Link to="/shop/"><Trans>お店、家族の紹介</Trans></Link>
        </li>
            <li>
            <Link to="/question/"><Trans>よくある質問</Trans></Link>
          </li>
          <li>
            <Link to="/contact/"><Trans>お問い合わせ</Trans></Link>
          </li>

        </ul>
  )
}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon  style={{ fontSize: 40 }}/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const Header = (props) => {
  const classes = useStyles()
  const [sm, setSm] = useState(false)
  const [open, setOpen] = useState(false);
  const { languages, changeLanguage } = useI18next();
    const [anchorEl, setAnchorEl] = useState(null);

  const OpenMenu= (event) => {
    setAnchorEl(event.currentTarget);
  };

  const CloseMenu = () => {
    setAnchorEl(null);
  };
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
        <Logo/>
                  </Link>

                </div>

                <ToggleMenu languages={languages} changeLanguage={changeLanguage}/>

             <div>
                   <Hamburger className={classes.menuButton} color="inherit" onClick={handleClickOpen}>

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
           <MobileNav> <NavItem/></MobileNav>
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
        {/* <ClosableDrawer open={open} onClose={handleDrawerToggle} /> */}
    </header>
    </div>

  )
}

export default Header
