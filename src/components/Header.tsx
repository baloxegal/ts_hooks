import { useState, useEffect } from 'react';
import MenuAppBar from './MenuAppBar'

export default function Header () {

    // const date = DateData();

    useEffect(() => {
        document.title = "Bubble";
     });

    return(
        <div className="App-header">
            <MenuAppBar/>
        </div>
    ) 

}

// const DateData = () => {
//     var today = new Date();
//     var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
//     const[dateToday, setCount] = useState(date);
//     return dateToday;    
// }