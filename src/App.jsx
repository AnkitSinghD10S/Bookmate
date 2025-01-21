import React from 'react';
import './app.css';

function Nav() {
  return (
    <>
    <nav className="nav-bar">
      <div className="nav-left">
        <img src="logo.png" alt="Logo" id="logo" />
        <h1>BooꓘMate</h1>
      </div>
      <input
        type="text"
        id="search-bar"
        placeholder="🔍 Search your books..."  />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    </>
  );
}

function Main(){
  return(
    <>
    <main class="main-content">
    <p id='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam vitae magni inventore ullam saepe perferendis repellendus facilis, corporis voluptatum quisquam iure. Libero suscipit, consectetur incidunt eligendi placeat fugiat aspernatur voluptas quisquam sed architecto, tempore totam dolor? Illum earum architecto vero suscipit, dignissimos cum quidem! Quo vitae perferendis soluta deleniti labore.</p>
    </main>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2024 BooꓘMate. All Rights Reserved.</p>
      </div>
      <div className="footer-right">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
      <div className="footer-right">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>

      
    </footer>
  );
}

function App() {
  return (
    <>
    <div className='mb-20'>
      <Nav />
    </div>

    <div className='px-2'>
    <Main/>
    </div>
    

    <div>   
      <Footer />
    </div>


    </>
    
  );
}

export default App;
