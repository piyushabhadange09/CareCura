// import React, { useState } from "react";
// import "../styles/main.css";
// import registerBg from "../assets/images/register-bg.png";

// const DoctorRegister = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     specialization: "",
//     qualifications: "",
//     experience: "",
//     licenseNumber: "",
//     availability: "",
//   });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Doctor Registered: ${formData.fullName}`);
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
//         <h2> CareCure - Doctor Registration</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//           <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
//           <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
//           <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
//           <input type="text" name="specialization" placeholder="Specialization / Department" required onChange={handleChange} />
//           <input type="text" name="qualifications" placeholder="Qualifications (MBBS, MD, etc.)" required onChange={handleChange} />
//           <input type="number" name="experience" placeholder="Years of Experience" required onChange={handleChange} />
//           <input type="text" name="licenseNumber" placeholder="License / Registration Number" required onChange={handleChange} />
//           <input type="text" name="availability" placeholder="Availability (e.g., Mon-Fri, 9am-5pm)" onChange={handleChange} />
//           <button type="submit" className="register-btn">Register</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default DoctorRegister;
import React, { useState } from "react";
import "../styles/main.css";
import registerBg from "../assets/images/register-bg.png";
import axios from "axios";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    specialization: "",
    qualifications: "",
    experience: "",
    licenseNumber: "",
    availability: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate experience is a number
    if (isNaN(formData.experience) || formData.experience < 0) {
      alert("Please enter valid years of experience.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register/doctor",
        formData
      );

      if (response.data?.doctor) {
        alert(`✅ Doctor Registered: ${response.data.doctor.fullName}`);
        setFormData({
          fullName: "",
          email: "",
          password: "",
          phone: "",
          specialization: "",
          qualifications: "",
          experience: "",
          licenseNumber: "",
          availability: "",
        });
      } else {
        alert("❌ Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "❌ Error registering doctor. Check console for details."
      );
    } finally {
      setLoading(false);
    }
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
        <h2>CareCure - Doctor Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization / Department"
            required
            value={formData.specialization}
            onChange={handleChange}
          />
          <input
            type="text"
            name="qualifications"
            placeholder="Qualifications (MBBS, MD, etc.)"
            required
            value={formData.qualifications}
            onChange={handleChange}
          />
          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            required
            value={formData.experience}
            onChange={handleChange}
          />
          <input
            type="text"
            name="licenseNumber"
            placeholder="License / Registration Number"
            required
            value={formData.licenseNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="availability"
            placeholder="Availability (e.g., Mon-Fri, 9am-5pm)"
            value={formData.availability}
            onChange={handleChange}
          />
          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DoctorRegister;

