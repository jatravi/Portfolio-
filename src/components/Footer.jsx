import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ravi Choudhary. Made with 💞 by Ravi Choudhary.</p>
        <div className="social-links">
          <a href="https://github.com/jatravi" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/_ravi_choudharyy/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://x.com/_jaat_ravi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://youtube.com/u/jat_ravi/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
