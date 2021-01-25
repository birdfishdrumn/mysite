import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import Search from "../Search/search"
import { Logo } from "../Logo"
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import {HeaderBar,Bar,Nav,HeaderMenu} from "./style"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const Hamburger = styled(IconButton)`
  @media(min-width:767px){
    display:none;
  }
`
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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

const Header = (props) => {
  const classes = useStyles()
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
             <div>

                      <Hamburger className={classes.menuButton} color="inherit">
                     <MenuIcon  style={{ fontSize: 50 }}/>
                  </Hamburger>


      <Nav>
        <ul>
          <li>
            <Link to="/">江戸風鈴とは</Link>
          </li>

                <li>
            <Link to="/product/">商品の紹介</Link>
              </li>
                    <li>
            <Link to="/workshop/">体験</Link>
                                          </li>
                                              <li>
            <Link to="/works/">仕事の紹介</Link>
                                          </li>
                                              <li>
            <Link to="/contact/">お店、家族の紹介</Link>
              </li>
                                                 <li>
            <Link to="/contact/">お問い合わせ</Link>
              </li>

        </ul>
                  </Nav>

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
