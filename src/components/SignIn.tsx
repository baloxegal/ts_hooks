import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {login} from "../api/auth";

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

export default function SignIn(){
    const classes = useStyles();
    
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        //alert(email);
        const password=e.target.password.value;
        //alert(password);
        const loginRequest = {userName: userName, password: password};
        const responceData = await login(loginRequest);
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
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    {/* <TextField variant="outlined" margin="normal" required fullWidth
                        id="email" label="Email Address" name="email" autoComplete="email"
                        autoFocus/> */}
                    <TextField variant="outlined" margin="normal" required fullWidth
                        id="userName" label="User Name" name="userName" autoComplete="userName"
                        autoFocus/>
                    <TextField variant="outlined" margin="normal" required fullWidth
                        id="password" label="Password" name="password" type="password"  
                        autoComplete="curent password"/>
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                        label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                    <Grid container  spacing={4}>
                        <Grid item xs={12} sm={1}>
                            <span></span>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Link to="/ForgotPassword">                                                      
                                <p>Forgot password?</p>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Link to="/SignUp">                                
                                <p>Don't have an account? Sign Up"</p>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <span></span>
                        </Grid>
                    </Grid>
                    {data?.status && data.status!==200 && <Alert severity="error">{data?.message}</Alert>}
                    {data?.status && data.status===200 && <Alert severity="success">{data?.message}</Alert>}
                </form>
            </div>             
            <Box mt={8}/>
        </Container>
    )
}