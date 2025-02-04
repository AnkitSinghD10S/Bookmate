import  { useEffect } from 'react';
import './nav.css';

import { IoSearch } from "react-icons/io5";
const logo = {
  name:'BookMate',
  imageUrl:'logo1.png',
  imageSize: 80,
}
function Nav() {
  useEffect(() => {  
    const handleScroll = () => {
      const nav = document.querySelector('.nav-bar');
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <img src={logo.imageUrl} alt={'Photo of '+logo.name} 
        style={{
          width: logo.imageSize,
          height: logo.imageSize
        }} />
        <h1 className="text-gray-500">v1</h1>
      </div>
      <div className='nav-mid'>
          <input type="text" id="search-bar" placeholder="Search your books..." />
          <div className='search-icon'>
             {/* <IoSearch /> */}
          </div>
      </div>


      <div className='nav-right'>
        <li><a href='./'>Home</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="/login">Log in</a></li>
      </div>
    </nav>
  );
}

export default Nav;