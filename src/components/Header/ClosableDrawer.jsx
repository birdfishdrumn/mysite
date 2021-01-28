import React,{useState,useCallback,useEffect} from "react"
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles,createStyles} from '@material-ui/core/styles';
import {navigate} from "gatsby"

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BrushIcon from '@material-ui/icons/Brush';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"



const useStyles = makeStyles((theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: 206,
            flexShrink: 0,

            }
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar, //appbarとtoolbarをセットで使うstyle
        drawerPaper: {
          width: 206,
          background:"rgba(255,255,255,0.8)"
        },

    }),
);


const ClosableDrawer = (props) => {
  const classes = useStyles()
  const { container } = props;




  const selectMenu = (event, path) => {
    // dispatch(push(path))
     navigate(path)
    // 選択したらドロワーが閉じる
    props.onClose(event,false)
}
  const [filters, setFilters] = useState([
      { func: selectMenu, label: "すべて", id: "all", value: "/" },

  ]
)

  const menus = [
    { func: selectMenu, label: "作品登録", icon: <AddCircleIcon />, id: "register", value: "/product" },

  ]
// ログイン状態をselector関数で取得する

  return (
    <nav className ={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary" //出したり閉じたり
        anchor="right" //右から出てくる。
        open={props.open}
        onClose={(e) => props.onClose(e,false)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps = {{keepMounted: true}} //スマホ表示の際にドロワーのパフォーマンスが上がる
      >
        <div
          onClose={(e) => props.onClose(e,false)}
          onKeyDown={(e)=>props.onClose(e,false)}
        >
          <List>

          </List>

          <List>
            {menus.map(menu => (
              <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary = {menu.label} />
              </ListItem>
            ))}


          </List>
          <Divider />

          <List>
            {filters.map(filter => (
              <ListItem button key={filter.id}
              onClick={(e)=>filter.func(e,filter.value)}
              >
                <ListItemText primary = {filter.label}/>
              </ListItem>
            ))}
          </List>
</div>
</Drawer>
    </nav>
  )
}

export default ClosableDrawer
