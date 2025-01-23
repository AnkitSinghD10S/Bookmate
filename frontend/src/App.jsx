import './app.css'
function Nav(){
  return(
    <>
    <nav class="nav-bar">

      <div className="nav-left">
        <img src="logo.png" alt="Logo" id="logo"/>
        <h1>BooꓘMate</h1>
      </div>
      <input type="text" name="" id="search-bar" placeholder="🔍       search your books..."/>
      <div className='p-9'>
        <ul>
          <li> <a href="#">Home</a> </li>
          <li> <a href="#">Contact</a> </li>
          <li> <a href="#">About</a> </li>         
        </ul>
      </div>
    </nav>
    </>
    
  );
}

function Foooter(){
  return(
    <>
    <footer class="footer">
    <div class="footer-left">
      <p>© 2024 DataBest. All Rights Reserved.</p>
    </div>
    <div class="footer-right">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact Us</a>
    </div>
  </footer>
    </>
  );
}





function App() {
  return (
    <div>
      <Nav/>
      <Foooter/>
    </div>
  );
}

export default App
