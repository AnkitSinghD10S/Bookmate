import React, { useEffect } from 'react';
import './App.css';
import Nav from './Component/Nav/nav';
import Main from './Component/MainContent/content1';
import Footer from './Component/Footer/footer';
// import About from './Component/About/About';


function App() {
  return (
    <>
    <div className='mb-20'>
      <Nav />
    </div>

    <div className='mb-20 px-5'>
    <Main/>
    </div>
    

    <div>   
      <Footer />
    </div>
    

    </>
    
  );
};

export default App;