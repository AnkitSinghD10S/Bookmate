import React, { useEffect } from 'react';
import './nav.css';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router';
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
        <img src="logo1.png" alt="Logo" id="logo" />
        <h1 className="text-gray-500">v1</h1>
      </div>
      
      <div className='nav-mid'>
        <div className="nav-search">
          <input type="text" id="search-bar" placeholder="Search your books..." />
          <div className='search-icon'>
             <IoSearch />
          </div>
        </div>
          
      </div>

      
      <div className='nav-right'>
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Contact</Link></li>
        <li><Link to="#">About us</Link></li>
        <li><Link to="/login">Log in</Link></li>
      </div>
    </nav>
  );
}

export default Nav;