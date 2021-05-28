import React, { useContext, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { GetUser, getUserName, hasToken } from '../api/auth';
import { useTheme } from '@material-ui/core';
import {TokenContext, UserContext} from '../contexts/AuthProvider'
import {IsAuthenticated} from '../api/auth'
import SideBar from './SideBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      flexGrow: 1,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MenuAppBar(props : any) {  
  const classes = useStyles();
  const [auth, setAuth] = React.useState(hasToken());
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const [openDrower, setOpenDrower] = React.useState(false);
  const {token, setToken} = useContext(TokenContext);
  const {user, setUser} = useContext(UserContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; 

  const handleDrawerOpen = () => {
    setOpenDrower(true);
  };

  const handleDrawerClose = () => {
    setOpenDrower(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleDrawerOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BUBBLES SOCIAL NETWORK
          </Typography>
          
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
                {IsAuthenticated()? "Hello " + user?.userName : ""}
              </IconButton>
              {!IsAuthenticated()?
              <Menu
                id="menu-anonymus"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              > 
                <MenuItem to="/SignIn" component={Link} >SigIn</MenuItem>
                <MenuItem to="/SignUp" component={Link} >SignUp</MenuItem>                               
              </Menu>
              :
              <Menu
                id="menu-user"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem to="/UserWall" component={Link} > My Wall </MenuItem>
                <MenuItem onClick={()=>{localStorage.removeItem("token"); localStorage.removeItem("user"); setToken(null); window.location.reload()}}>SigOut</MenuItem> 
              </Menu>
              } 
            </div>
          
        </Toolbar>
      </AppBar>
      {!IsAuthenticated() ? null :      
        <SideBar openDrower={openDrower} setOpenDrower={setOpenDrower}></SideBar>
      }
    </div>
  );
}