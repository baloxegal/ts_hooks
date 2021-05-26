import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, makeStyles, TextField, Theme, Typography, Link, TextareaAutosize } from '@material-ui/core';
import Alert from './Alert';
import {resStatus} from '../api/proxy';
import { LockOutlined } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import {login} from "../api/auth";
import { TokenContext } from '../contexts/AuthProvider';
import { sendMessage } from '../api/message';

const useStyles = makeStyles((theme: Theme) =>({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3,0,2)
    }
}));

export default function WriteMessage(){
    const classes = useStyles();
    
    
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const textBody = e.target.textBody.value;
        
        const messageRequest = {textBody : textBody};
        const responceData = await sendMessage(messageRequest);
        
    }

    const [data, setData] = useState({message : null, status : null});
    
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Write Message
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextareaAutosize required
                        id="textBody" name="textBody"
                        autoFocus/>                    
                    
                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className={classes.submit}>
                        SEND
                    </Button>
                    
                    

                    <Alert type = {resStatus(data.status)} message = {data.message}/>

                </form>
            </div>             
            <Box mt={8}/>
        </Container>
    )
}