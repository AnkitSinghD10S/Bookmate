import  { useEffect } from 'react';
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

        <h1 className="text-gray-500">v1</h1>
      </div>
      <div className='nav-mid'>
          <input type="text" id="search-bar" placeholder="Search your books..." />
          <div className='search-icon'>
      </div>
    </nav>
  );
}

export default Nav;