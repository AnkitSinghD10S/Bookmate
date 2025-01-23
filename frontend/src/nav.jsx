import React, { useEffect } from 'react';
import './nav.css';

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
        <h1 class="text-gray-500">v1</h1>
      </div>
      <input
        type="text"
        id="search-bar"
        placeholder="🔍 Search your books..."
      />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
