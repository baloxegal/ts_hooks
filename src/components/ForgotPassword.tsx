import React from 'react';

type MotivationString = {
    motivation: string;
}

type setState = {
    infoString: string;
}

class ForgotPassword extends React.Component<MotivationString, setState> {

    constructor(props: MotivationString){
        super(props);
        this.state = {
            infoString: "Have you forgotten the password? Everything will be fine, you will remember the password",
        };
    }  
    
    render() {
        return <h3 className='App-Forgot-Password'> {this.state.infoString}</h3>
    }
}

export default ForgotPassword;