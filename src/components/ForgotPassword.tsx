import { Button, Container, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const memebersStyle = makeStyles((theme: Theme) =>({
    submit: {
        margin: theme.spacing(3,0,2)
    }
}));

type MotivationString = {
    motivation: string;
}

type setState = {
    infoString: string;
    styles: any;
}

class ForgotPassword extends React.Component<MotivationString, setState> {
    
    constructor(props: MotivationString){
        super(props);
        this.state = {
            infoString: "Have you forgotten the password? Everything will be fine, you will remember the password",
            styles: () => {
                memebersStyle()
            },
        };        
    }

    render() {
        return (
            <Container maxWidth="xs">
                <h3 className='App-Forgot-Password'> {this.state.infoString}</h3>
                <Button href="/SignIn" type="submit" fullWidth variant="contained" color="primary" className={this.state.styles.submit}>
                    I have remembered the password!!!                                        
                </Button>
            </Container>
        )
    }
}

export default ForgotPassword;