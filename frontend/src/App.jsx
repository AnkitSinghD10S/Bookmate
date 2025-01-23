import React, { useEffect } from 'react';
import './app.css';

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
        <img src="logo.png" alt="Logo" id="logo" />
        <h1 id='heading-name' >BooꓘMate</h1>
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

function Main(){
  return(
    <>
    <main class="main-content">
    <h1>Definitions of "Summary"</h1>
    
    <details>
        <summary>Concise Overview</summary>
        <p>A brief statement or account that presents the main points or essence of a larger work (e.g., book, article, event).</p>
    </details>

    <details>
        <summary>Abstract</summary>
        <p>A short, clear description of the key points or facts in a document, report, or discussion, typically without going into detailed analysis.</p>
    </details>
    <br /><br /><br /><br />

    <details>
        <summary>Synopsis</summary>
        <p>A shortened version of a story, event, or presentation that focuses on its core aspects or outcomes, often used in literature or film.</p>
    </details>

    <details>
        <summary>Recap</summary>
        <p>A condensed version of a previous discussion, showing the important details without elaboration.</p>
    </details>

    <details>
        <summary>Digest</summary>
        <p>A summarized version that compresses a large amount of information into its essential ideas or facts.</p>
    </details>
    <p> rerum. Illum.</p>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p> rerum. Illum.</p>
    <p> rerum. Illum.</p>
    <p> rerum. Illum.</p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, consectetur vitae distinctio repellendus ut tenetur sunt veritatis laudantium quae asperiores et! Nesciunt aliquam tenetur, quibusdam suscipit ad molestias debitis quia.
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
        <a href="#"><i class="brands fa-facebook"></i></a>
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

    <div className='mb-20 px-5'>
    <Main/>
    </div>
    

    <div>   
      <Footer />
    </div>


    </>
    
  );
}

export default App;
