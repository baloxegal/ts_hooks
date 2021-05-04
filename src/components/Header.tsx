import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header (props: any) {

    const date = Data();

    return(

        <div className="App-header">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/SignIn'>SignIN</Link></li>
            </ul>     
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