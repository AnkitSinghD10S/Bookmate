import { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    const user = useSelector((state) => state.auth.user)
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
        <nav className="nav-bar fixed w-full z-50 font-semibold bg-gray-900 text-white font-bold px-6 py-4 flex justify-between items-center transition-shadow duration-300">

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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-[1.6vw] transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
                        }
                    >
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
                    }>About us</NavLink>
                </li>
                <li>
                    {user ? (
                        <Link to="/logout" className="text-gray-300 text-[1.6vw] hover:text-green-400 transition">
                            Log out
                        </Link>
                    ) : (
                        <Link to="/login" className="text-gray-300 text-[1.6vw] hover:text-green-400 transition">
                            Log in
                        </Link>
                    )}
                </li>

                <li>
                    {user.role === 'seller' ?
                        (
                            <Link to="/uploadBook" className="text-gray-300 text-[1.6vw] hover:text-green-400 transition">Upload Book</Link>
                        )
                        : (
                            ""
                        )}
                </li>
            </ul>

        </nav>
    );
}

export default Nav;
