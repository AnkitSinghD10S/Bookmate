function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between w-full">
          
          <div className="text-sm md:w-1/3 text-center md:text-left">
              <p>© 2024 BooꓘMate. All Rights Reserved.</p>
          </div>

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

          <div className="flex gap-6 justify-center md:justify-end md:w-1/3">
              <a href="#" className="text-sm hover:text-green-400 transition">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-green-400 transition">Terms of Service</a>
              <a href="#" className="text-sm hover:text-green-400 transition">Contact Us</a>
          </div>

      </footer>
  );
}

export default Footer;
