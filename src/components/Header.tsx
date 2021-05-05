import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header (props: any) {

    const date = Data();

    return(

        <div className="App-header">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={3}>
                    <span></span>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <span><Link to='/'>Home</Link></span>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <span><Link to='/SignIn'>SignIn</Link></span>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <span><Link to='/SignUp'>SignUp</Link></span>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <span></span>
                </Grid>
            </Grid>
            <h1>
                {props.text}
            </h1>
            <h4>Today is - {date}</h4>
        </div>
    ) 

}

const Data = () => {
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    const[dateToday, setCount] = useState(date);

    useEffect(() =>{
       document.title = "Exchange";
    });

    return dateToday;    
}