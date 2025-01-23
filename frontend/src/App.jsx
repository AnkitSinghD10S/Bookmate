import React, { useEffect } from 'react';
import './App.css';
import Nav from './nav';
import Main from './content1';
import Footer from './footer';

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
}

export default App;
