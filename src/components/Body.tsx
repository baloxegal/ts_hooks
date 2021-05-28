import { Grid } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TokenContext } from '../contexts/AuthProvider';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Nothing from './Nothing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserWall from './UserWall';
import {IsAuthenticated} from '../api/auth'
import WriteMessage from './WriteMessage';
import CreateEvent from './CreateEvent';

const Body = () => {
    
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
                            {IsAuthenticated()? <Redirect to="/UserWall" /> : undefined}
                        </Route>
                        <Route path='/SignUp' component={SignUp}/>
                        <Route path='/UserWall' component={UserWall}> 
                            {!IsAuthenticated()? <Redirect to="/SignIn" /> : undefined}
                        </Route>
                        <Route path='/UserFriends' component={UserWall}> 
                            {!IsAuthenticated()? <Redirect to="/UserFriends" /> : undefined}
                        </Route>
                        <Route path='/ForgotPassword' component={ForgotPassword}/> 
                        <Route path='/WriteMessage' component={WriteMessage}/>
                        <Route path='/CreateEvent' component={CreateEvent}/>                
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