import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, makeStyles, TextField, Theme, Typography, Link } from '@material-ui/core';
import Alert from './Alert';
import {fetchData, resStatus} from '../api/proxy';
import { LockOutlined } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import {GetUser, login} from "../api/auth";
import { TokenContext, UserContext } from '../contexts/AuthProvider';

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
    
    const {setToken} = useContext(TokenContext);
    const {user, setUser} = useContext(UserContext);
    

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const password=e.target.password.value;
        const loginRequest = {userName: userName, password: password};
        const responceData = await login(loginRequest);
        const {token} = await responceData;
        setToken(token);
        localStorage.setItem("token", token)
        


        if(token){        
            if(!user){
                let userData = await fetchData(null, "/AuthorizationUser", "GET", {"Authorization" : `Bearer ${token}`});  
                localStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
            }
        } 
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
                    <TextField variant="outlined" margin="normal" required fullWidth
                        id="userName" label="User Name" name="userName"
                        autoComplete="username" autoFocus/>
                    <TextField variant="outlined" margin="normal" required fullWidth
                        id="password" label="Password" name="password" type="password"  
                        autoComplete="curent password"/>
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                        label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                    
                    <Grid container>
                        <Grid item xs>
                            <Link component={RouterLink} to="/ForgotPassword" variant="body2">                                                      
                                Forgot password?
                            </Link>                            
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/SignUp" variant="body2">                                
                                Don't have an account? Sign Up"
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