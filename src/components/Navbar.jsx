import "../styles/Navbar.css";
import 'boxicons/css/boxicons.min.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="left">
        {/* <img src="" alt="Logo" /> */}
        <span color="red">Ravi</span> Choudhary
      </div>
      <div className="sections">
        <ul>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Portfolio">Protfolio</a>
        </li>
        <li>
          <a href="#TechStack">TechStacks</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      </div>
      <div className="icons">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className='bx bxl-sketch'></i> 
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://Instagram.com" target="_blank" rel="noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
