import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { getUser, logout } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">CareCure</div>

      {!user ? (
        // Links when user is NOT logged in
        <>
          <ul className="nav-links center-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <ul className="nav-links auth-links">
            <li className="auth-link"><Link to="/login">Login</Link></li>
            <li className="auth-link"><Link to="/register">Register</Link></li>
          </ul>
        </>
      ) : (
        // Links when user IS logged in
        <div className="logged-in-nav">
          <span className="welcome-text">Welcome {user.fullName}</span>
          <div className="user-buttons">
            <button
              className="nav-btn"
              onClick={() => navigate(`/${user.role}/profile`)}
            >
              Profile
            </button>
            <button className="nav-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
