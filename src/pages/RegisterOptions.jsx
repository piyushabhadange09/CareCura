import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const RegisterOptions = () => {
  return (
    <section className="register-options">
      <div className="register-options-container">
        <h2>Select CareCure Registration Type</h2>
        <div className="register-cards">
          <Link to="/register/patient" className="register-card">🧑‍⚕️ Patient Register</Link>
          <Link to="/register/doctor" className="register-card">👨‍⚕️ Doctor Register</Link>
          <Link to="/register/admin" className="register-card">🏥 Admin/Staff Register</Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterOptions;
