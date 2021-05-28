import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function SideBar(props : any) {
  const classes = useStyles();  
  const theme = useTheme();
  const [openDrower, setOpenDrower] = React.useState(props.openDrower);
  const handleDrawerClose = () => {
    setOpenDrower(false);
    props.setOpenDrower(false);
  };

  return (
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrower||props.openDrower}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>          
          <ListItem to="/CreateEvent" component={Link} button key="Create Event">
              <ListItemIcon> <EmojiEventsIcon /> </ListItemIcon>
              <ListItemText primary="Create Event" />
            </ListItem>
        </List>
            
        <Divider />
        
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem to="/WriteMessage" component={Link} button key="Write Message">
              <ListItemIcon> <ChatBubbleOutlineIcon /> </ListItemIcon>
              <ListItemText primary="Write Message" />
            </ListItem>
        </List>

        <Divider />

        <List>          
          <ListItem to="/UserFriends" component={Link} button key="Friends">
              <ListItemIcon> <EmojiEventsIcon /> </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItem>
        </List>

      </Drawer>
  );
}