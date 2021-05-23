import '../App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Drower from './Drower';
import { useState, useEffect } from 'react';
import { getUser } from '../api/auth';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {  
    getUser();  
    // let resUser = async () =>{
    //   await getUser();
    // }
    // await setUser(resUser); 
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Header text="Bubbles Network"/>
        <div>
          Hello {user}
        </div>
        <Body/>
        <Footer firstName="Balan"lastName="Valeriu"/>
        {/* <Drower/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
