import React, { useState } from "react";
import "../styles/main.css";
import registerBg from "../assets/images/register-bg.png";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    phone: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Admin/Staff Registered: ${formData.fullName} (${formData.role})`);
    // TODO: connect with backend API
  };

  return (
    <section
      className="register-section"
      style={{
        backgroundImage: `url(${registerBg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="register-container">
        <h2> CareCure - Admin / Staff Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <select name="role" required onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Nurse">Nurse</option>
            <option value="Lab Technician">Lab Technician</option>
          </select>
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </section>
  );
};

export default AdminRegister;
