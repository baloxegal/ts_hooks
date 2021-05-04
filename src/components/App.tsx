import '../App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header text="Cel mai bun curs valutar din Moldova!!!"/>
        <Body/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
