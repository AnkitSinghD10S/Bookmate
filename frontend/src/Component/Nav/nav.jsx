import { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { clearAuth } from '../../features/authSlice';

function Nav() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await axios.get('http://localhost:4000/api/auth/logout', { withCredentials: true });
            dispatch(clearAuth());
            navigate('/login')
        } catch (error) {
            console.error("Logout failed:", error);

            if (error.response?.status === 401) {
                alert("You are already logged out or unauthorized.");
                dispatch(clearAuth());
            } else {
                alert(error.response?.data?.message || "Logout failed! Please try again.");
            }
        }
    };

    return (
        <nav className="nav-bar w-full h-18 bg-gray-900 text-white font-bold px-6 py-4 flex justify-between items-center transition-shadow duration-300">

            <div className="flex items-center gap-4">
                <img src="logo1.png" alt="Logo" className="h-[4vw] w-[4vw] " />
                <h1 className="text-gray-400 text-[2vw]">v1</h1>
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
                    <NavLink to="/" className={({ isActive }) =>
                        `text-[1.6vw] transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" className={({ isActive }) =>
                        `text-[1.6vw] transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
                    }>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" className={({ isActive }) =>
                        `text-[1.6vw] transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
                    }>
                        About us
                    </NavLink>
                </li>
                <li>
                    {(user?.role === 'seller' || user?.role === 'admin') && (
                        <NavLink to="/uploadBook" className={({ isActive }) =>
                            `text-[1.6vw] transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
                        }>
                            Upload Book
                        </NavLink>
                    )}
                </li>
                <li>
                    {user ? (
                        <button onClick={handleLogout} className="text-gray-300 text-[1.6vw] hover:text-red-600 transition">
                            Log out
                        </button>
                    ) : (
                        <NavLink to="/login" className={({ isActive }) =>
                            `text-gray-300 text-[1.6vw] hover:text-blue-600 transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
                        }>
                            Log in
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
