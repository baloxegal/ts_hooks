import { Grid } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TokenContext } from '../contexts/AuthProvider';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Nothing from './Nothing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserWall from './UserWall';
import {useContext} from 'react';

const Body = () => {

    const {token} = useContext(TokenContext);
    
    return (
        <div className="App-body">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    Advertising Space
                </Grid>                    
                <Grid item xs={12} sm={8}>
                    <Switch>
                        <Route exact path='/' component={Home}/>                        
                        <Route path='/SignIn' component={SignIn}> 
                            {token? <Redirect to="/UserWall" /> : undefined}
                        </Route>
                        <Route path='/SignUp' component={SignUp}/>
                        <Route path='/UserWall' component={UserWall}> 
                        {!token? <Redirect to="/SignIn" /> : undefined}
                        </Route>
                        <Route path='/ForgotPassword' component={ForgotPassword}/>                    
                        
                        <Route component={Nothing}/>
                    </Switch>                                   
                </Grid>
                <Grid item xs={12} sm={2}>
                    Advertising Space
                </Grid>
            </Grid>    
        </div>        
    )
}

export default Body