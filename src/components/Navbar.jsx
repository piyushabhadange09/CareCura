import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">CareCure</div>

      {/* Middle: Main navigation links */}
      <ul className="nav-links center-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right: Login & Register */}
      <ul className="nav-links auth-links">
        <li className="auth-link"><Link to="/login">Login</Link></li>
        <li className="auth-link"><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
