import '../App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetUser } from '../api/auth';
import {AuthProvider} from '../contexts/AuthProvider'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Body/>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;