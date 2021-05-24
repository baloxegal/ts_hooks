import '../App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../api/auth';

function App() {

  // const [user, setUser] = useState(null);

  useEffect(() => {  
    getUser();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Body/>
        <Footer firstName="Balan" lastName="Valeriu"/>
      </BrowserRouter>
    </div>
  );
}

export default App;