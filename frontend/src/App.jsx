import './App.css';
import Nav from './Component/Nav/nav';
import Footer from './Component/Footer/footer';
import { Outlet } from 'react-router-dom';
import Login from './component/Login/Login';




function App() {
  return (
    <>
    <div className='nav'>
      <Nav />
    </div>
    <div className='main-content'>
    <Outlet/>
    </div>
    <div className='footer-content'>   
      <Footer />
    </div>
    </>
    
  );
};

export default App;