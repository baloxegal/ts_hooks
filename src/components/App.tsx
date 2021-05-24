import '../App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../api/auth';
import {AuthProvider} from '../contexts/AuthProvider'

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {  
    getUser();
  });

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Body/>
          <Footer firstName="Balan" lastName="Valeriu"/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;