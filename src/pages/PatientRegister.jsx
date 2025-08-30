// import React, { useState } from "react";
// import "../styles/main.css";
// import registerBg from "../assets/images/register-bg.png";

// const PatientRegister = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     gender: "",
//     dob: "",
//     address: "",
//     emergencyContact: "",
//     bloodGroup: "",
//     medicalHistory: "",
//   });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Patient Registered: ${formData.fullName}`);
//     // TODO: connect with backend API
//   };

//   return (
//     <section
//       className="register-section"
//       style={{
//         backgroundImage: `url(${registerBg})`,
//         backgroundSize: "cover",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div className="register-container">
//         <h2>CareCure - Patient Registration</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//           <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
//           <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
//           <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
//           <select name="gender" onChange={handleChange}>
//             <option value="">Select Gender</option>
//             <option>Male</option><option>Female</option><option>Other</option>
//           </select>
//           <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
//           <input type="text" name="address" placeholder="Address" onChange={handleChange} />
//           <input type="tel" name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} />
//           <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={handleChange} />
//           <textarea name="medicalHistory" placeholder="Medical History / Allergies" rows="3" onChange={handleChange}></textarea>
//           <button type="submit" className="register-btn">Register</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default PatientRegister;

import React, { useState } from "react";
import "../styles/main.css";
import registerBg from "../assets/images/register-bg.png";
import { registerPatient } from "../api/api";

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    emergencyContact: "",
    bloodGroup: "",
    medicalHistory: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerPatient(formData);
      alert(res.data.message); // Success message from backend
    } catch (error) {
      alert(error.response?.data?.message || "Error registering patient");
    }
  };

  return (
    <section
      className="register-section"
      style={{ backgroundImage: `url(${registerBg})`, backgroundSize: "cover", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className="register-container">
        <h2>CareCure - Patient Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option><option>Female</option><option>Other</option>
          </select>
          <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} />
          <input type="tel" name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} />
          <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={handleChange} />
          <textarea name="medicalHistory" placeholder="Medical History / Allergies" rows="3" onChange={handleChange}></textarea>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </section>
  );
};

export default PatientRegister;
