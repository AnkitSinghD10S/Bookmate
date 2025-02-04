import React, { useEffect } from 'react';
import './App.css';
import Nav from './Component/Nav/nav';
import Main from './Component/MainContent/content1';
import Footer from './Component/Footer/footer';
// import About from './Component/About/About';


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
};

export default App;