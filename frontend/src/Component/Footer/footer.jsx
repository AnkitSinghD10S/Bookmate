import './footer.css';
function Footer() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <p>© 2024 BooꓘMate. All Rights Reserved.</p>
        </div>
        <div className="footer-mid">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <div className="footer-right">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    );
  }

  export default Footer;