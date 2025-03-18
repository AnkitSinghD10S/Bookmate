import React, { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Nav() {
    useEffect(() => {  
        const handleScroll = () => {
            const nav = document.querySelector('.nav-bar');
            if (window.scrollY > 0) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="nav-bar fixed top-0 left-0 w-full z-50 bg-gray-900 text-white px-6 py-4 flex justify-between items-center transition-shadow duration-300">
            
            <div className="flex items-center gap-4">
                <img src="logo1.png" alt="Logo" className="h-14 w-14" />
                <h1 className="text-gray-400 text-lg">v1</h1>
            </div>
            
            <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-1/3">
                <input 
                    type="text" 
                    placeholder="Search your books..." 
                    className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                />
                <IoSearch className="text-gray-400 text-xl" />
            </div>

            <ul className="flex items-center gap-6">
                <li>
                    <Link to="/" className="text-gray-300 hover:text-green-400 transition">Home</Link>
                </li>
                <li>
                    <Link to="#" className="text-gray-300 hover:text-green-400 transition">Contact</Link>
                </li>
                <li>
                    <Link to="#" className="text-gray-300 hover:text-green-400 transition">About us</Link>
                </li>
                <li>
                    <Link to="/login" className="text-gray-300 hover:text-green-400 transition">Log in</Link>
                </li>
            </ul>

        </nav>
    );
}

export default Nav;
