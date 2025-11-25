// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <div className="logo-icon">
//             <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//               <circle cx="12" cy="16" r="6" stroke="#7C3AED" strokeWidth="2" fill="none" />
//               <circle cx="20" cy="16" r="6" stroke="#7C3AED" strokeWidth="2" fill="none" />
//               <path d="M16 10V22" stroke="#7C3AED" strokeWidth="2" />
//             </svg>
//           </div>
//           <span className="logo-text">Niqah</span>
//         </Link>

//         <ul className="nav-menu">
//           <li className="nav-item">
//             {/* <Link to="" className="nav-link">Home</Link> */}
//             <a href="#home" className="nav-link">Home</a>
//           </li>
//           <li className="nav-item">
//             <a href="#about" className="nav-link">About</a>
//           </li>
//           <li className="nav-item">
//             <a href="#howitworks" className="nav-link">How it Works</a>
//           </li>
//           <li className="nav-item">
//             <a href="#footer" className="nav-link">Contact</a>
//           </li>
//         </ul>

//          <div className="navbar-actions">
//           <Link to="/login" className="nav-login">Log in</Link>
//           <Link to="/register" className="nav-register-btn">Register Profile</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Navbar.css';
import ProfileImgBlue from "../Assets/Images/profileimgBlue.png";
import ProfileImgHug from "../Assets/Images/profileimghug.png";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="12" cy="16" r="6" stroke="#7C3AED" strokeWidth="2" fill="none" />
              <circle cx="20" cy="16" r="6" stroke="#7C3AED" strokeWidth="2" fill="none" />
              <path d="M16 10V22" stroke="#7C3AED" strokeWidth="2" />
            </svg>
          </div>
          <span className="logo-text">Niqah</span>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#howitworks" className="nav-link" onClick={closeMenu}>How it Works</a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>

        </ul>

        {/* Action Buttons */}
        <div className={`navbar-actions ${isMenuOpen ? 'active' : ''}`}>
          {/* <Link to="/login" className="nav-login" onClick={closeMenu}>Log in</Link> */}
          {/* <Link to="/register" className="nav-register-btn" onClick={closeMenu}>Register </Link> */}

          <button className="userProfile" onClick={() => navigate("./userprofiles")}
          >Users Profile
          </button>
          <img onClick={() => {
            navigate("./profile")
          }} className='profileIcon' src={ProfileImgHug}></img>
        </div>

        {/* Overlay for mobile menu */}
        <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      </div>
    </nav>
  );
};

export default Navbar;