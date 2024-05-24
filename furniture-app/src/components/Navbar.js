import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div id="nav">
      <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg" alt="Logo" />
      <h4>Furniture</h4>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
