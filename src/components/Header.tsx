import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuAppBar from './MenuAppBar'

export default function Header (props: any) {

    const date = Data();

    return(

        <div className="App-header">
            <MenuAppBar/>
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