import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between w-full">
      
      {/* Left Section */}
      <div className="text-sm md:w-1/3 text-center md:text-left">
        <p>© 2024 BooꓘMate. All Rights Reserved.</p>
      </div>

      {/* Social Media Icons (Use <a> only if these are external) */}
      <div className="flex gap-4 justify-center md:w-1/4 my-4 md:my-0">
        <a href="#" className="text-xl hover:text-green-400 transition">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" className="text-xl hover:text-green-400 transition">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="#" className="text-xl hover:text-green-400 transition">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="text-xl hover:text-green-400 transition">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-end md:w-1/3 items-center">
        <NavLink 
          to="/PrivacyPolicy" 
          className={({ isActive }) =>
            `text-sm transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
          }
        >
          Privacy Policy
        </NavLink>

        <NavLink 
          to="/TermsOfService" 
          className={({ isActive }) =>
            `text-sm transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
          }
        >
          Terms of Service
        </NavLink>
        <NavLink 
          to="/Contact" 
          className={({ isActive }) =>
            `text-sm md:text-[1.1vw] transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
          }
        >
          Contact
        </NavLink>

        <NavLink 
          to="/About" 
          className={({ isActive }) =>
            `text-sm md:text-[1.1vw] transition ${isActive ? 'text-green-400' : 'text-gray-300'}`
          }
        >
          About Us
        </NavLink>

      </div>
    </footer>
  );
}

export default Footer;
