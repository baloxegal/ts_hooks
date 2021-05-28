import { useState, useEffect } from 'react';
import MenuAppBar from './MenuAppBar'

export default function Header () {

    // const date = DateData();

    useEffect(() => {
        document.title = "Bubbles";
     });

    return(
        <div className="App-header">
            <MenuAppBar/>
        </div>
    )
}