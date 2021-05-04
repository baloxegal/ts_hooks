import React from 'react';

type MotivationString = {
    motivation: string;
}

 class ForgotPassword extends React.Component<MotivationString> {

    constructor(props: MotivationString){
        super(props);
        this.state = {
            c: "Everything will be fine, you will remember the password",
        };
    }
    render() {
        return <h3 className='App-Forgot-Password'> Forgot Password {this.props.motivation} </h3>
    }
}

export default ForgotPassword;