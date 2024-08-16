import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css'; // Import the CSS file for styling
import logoani from "F:\\meditech\\src\\components\\video\\WhatsApp Video 2024-07-30 at 10.13.19_4067eb61.mp4"
const UserNavbar = () => {
  return (
    <nav className="user-navbar">
      <div className="logo-container">    
        <video src={logoani} autoPlay muted loop className='nav_logo' />
      </div>
      <div className="navbar-user">
        <div className="user-info">
          <p className="user-name">Meditech 24x7</p>
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/medicinepage" className="nav-link">
          <i className="fas fa-tachometer-alt"></i> Medicine
        </Link>
        
        <Link to="/about" className="nav-link">
          <i className="fas fa-pills"></i> About
        </Link>
        <Link to="/" className="nav-link">
          <i className="fas fa-capsules"></i> Logout
        </Link>
        
      </div>
    </nav>
  );
};

export default UserNavbar;
