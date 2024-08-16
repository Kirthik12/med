import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import logoani from "F:\\meditech\\src\\components\\video\\WhatsApp Video 2024-07-30 at 10.13.19_4067eb61.mp4"
const Navbar = () => {
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
        <Link to="/dashboard" className="nav-link">
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </Link>
        <Link to="/inventory" className="nav-link">
          <i className="fas fa-warehouse"></i> Inventory
        </Link>
        <Link to="/order" className="nav-link">
          <i className="fas fa-user"></i> Order Details
        </Link>
        <Link to="/" className="nav-link">
          <i className="fas fa-power-off"></i> Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
