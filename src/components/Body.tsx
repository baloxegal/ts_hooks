import { Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Nothing from './Nothing';
import SignIn from './SignIn';

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