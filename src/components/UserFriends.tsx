import { SyntheticEvent, useEffect, useState } from "react";
import { addFriend, getAllUsers } from "../api/user";
import { User } from "../contexts/AuthProvider";
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { AccountCircle } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import { Avatar, IconButton, ListItemAvatar, ListItemSecondaryAction } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default function UserList(){

    const handleClick = (name : any) => {
        addFriend(name);
    }

    const classes = useStyles();

    const[users, setUsers] = useState([]);

    useEffect (() => {
        getAllUsers(null).then(setUsers)
    }, [])

    let userList = users.map((user : User) =>(       
        
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <AccountCircle />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.userName}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" data-user={user.userName} onClick={handleClick.bind(null, user.userName)}>
                    <AddIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    ))
     
    return(
        <div>
            <div>MEET YOUR FUTURE FRIENDS</div>
            
            <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {userList}
            </List>
        </div>
    </div>
    )
}