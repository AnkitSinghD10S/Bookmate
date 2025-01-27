import React, { useEffect } from 'react';
import './App.css';
import Nav from './nav';
import Main from './content1';
import Footer from './footer';

function App() {
  return (
    <>
    <div className='nav'>
      <Nav />
    </div>

    <div className='main-content'>
    <Main/>
    </div>

  
    <div className='footer-content'>   
      <Footer />
    </div>
    </>
    
  );
}

export default App;