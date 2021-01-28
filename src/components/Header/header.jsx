import React,{useState,useEffect,useCallback} from "react"
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
import ClosableDrawer from "./ClosableDrawer";

const Hamburger = styled(IconButton)`
  display:none;
  @media(max-width:768px){
    display:block
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
  const [sm, setSm] = useState(false)
    const [open, setOpen] = useState(false);
   const handleDrawerToggle = useCallback((event) => {
    if (event.type === "keydown" || (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(!open)
  },[setOpen,open])

//  useEffect(() => {
//    if (window.matchMedia('(max-width: 768px)').matches) {
//       setSm(true)
//     }
//  }, [window.matchMedia('(max-width: 768px)').matches])

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
                    <IconButton onClick={handleDrawerToggle}>
                            <MenuIcon style={{ fontSize: 50 }} />
                    </IconButton>

                  </Hamburger>

                    <Nav>
                      <ul>
                        <li>
                          <Link to="/about/">江戸風鈴とは</Link>
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
                          <Link to="/shop/">お店、家族の紹介</Link>
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
        <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </header>
    </div>

  )
}

export default Header
