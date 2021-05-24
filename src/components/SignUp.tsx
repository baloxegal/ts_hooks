import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Theme, Typography, Link } from '@material-ui/core';
import Alert from './Alert';
import {resStatus} from '../api/proxy';
import { LockOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import {register} from "../api/auth";

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

export default function SignUp(){
    const classes = useStyles();
    
    const handleSubmit = async (e : any) => {
        e.preventDefault();

        const userName=e.target.userName.value;
        const firstName=e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email=e.target.email.value;
        const phoneNumber=e.target.phoneNumber.value;
        const avatar = e.target.avatar.value;
        const password=e.target.password.value;        
        
        const registerRequest = {userName: userName, firstName: firstName, lastName: lastName,
                                 email: email, phoneNumber: phoneNumber, avatar: avatar, password: password};
        const responceData = await register(registerRequest);
        setData(responceData);
        console.log(responceData);
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
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>                    
                    <TextField variant="outlined" margin="normal" required fullWidth
                        id="userName" label="User Name" name="userName" autoComplete="username"
                        autoFocus/>
                    <TextField variant="outlined" margin="normal" fullWidth
                        id="firstName" label="First Name" name="firstName" autoComplete="given-name"/>
                    <TextField variant="outlined" margin="normal" fullWidth
                        id="lastName" label="Last Name" name="lastName" autoComplete="family-name"/>             
                    <TextField variant="outlined" margin="normal" fullWidth
                        id="email" label="Email Address" name="email" autoComplete="email"/>
                    <TextField variant="outlined" margin="normal" fullWidth
                        id="phoneNumber" label="Phone Number" name="phoneNumber" autoComplete="tel"/>
                    <TextField variant="outlined" margin="normal" fullWidth
                        id="avatar" label="Avatar" name="avatar" autoComplete="photo"/>
                    <TextField variant="outlined" margin="normal" required fullWidth
                        id="password" label="Password" name="password" type="password"  
                        autoComplete="new-password"/>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className={classes.submit}>
                        Sign Up
                    </Button>
                    
                    <Grid container>
                        <Grid item xs>
                            <Link component={RouterLink} to="/SignIn" variant="body2">                                                      
                                Have an account?
                            </Link>                            
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/SignUp" variant="body2">                                
                                Sign in with Google account
                            </Link>
                        </Grid>
                    </Grid>

                    <Alert type = {resStatus(data.status)} message = {data.message}/>

                </form>
            </div>             
            <Box mt={8}/>
        </Container>
    )
}