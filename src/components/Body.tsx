import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Nothing from './Nothing';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Body = () => {
    
    return (
        <div className="App-body">            
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    <p>Advertising Space</p>
                </Grid>                    
                <Grid item xs={12} sm={8}>
                    <Switch>
                        <Route exact path='/' component={Home}/>                        
                        <Route path='/SignIn' component={SignIn}/>
                        <Route path='/SignUp' component={SignUp}/>
                        <Route path='/ForgotPassword' component={ForgotPassword}/>
                        <Route component={Nothing}/>
                    </Switch>                                   
                </Grid>
                <Grid item xs={12} sm={2}>
                    <p>Advertising Space</p>
                </Grid>
            </Grid>      
                        
        </div>        
    )
}

export default Body