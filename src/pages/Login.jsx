// import React, { useState } from "react";
// import "../styles/main.css";
// import loginBg from "../assets/images/login-bg.png"; // hospital themed background

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "", role: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.role) {
//       alert("Please select a user type.");
//       return;
//     }

//     // TODO: Connect with backend API
//     // Example response simulation
//     const mockResponse = {
//       success: true,
//       role: formData.role,
//       userData: { name: "John Doe" },
//     };

//     if (mockResponse.success) {
//       alert(`Logged in as ${mockResponse.role}`);
//       // Redirect based on role
//       if (mockResponse.role === "patient") window.location.href = "/patient/dashboard";
//       else if (mockResponse.role === "doctor") window.location.href = "/doctor/dashboard";
//       else window.location.href = "/admin/dashboard";
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <section
//       className="login-section"
//       style={{
//         backgroundImage: `url(${loginBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div className="login-container">
//         <h2>CareCure Login</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>User Type</label>
//             <select name="role" required value={formData.role} onChange={handleChange}>
//               <option value="">Select User Type</option>
//               <option value="patient">Patient</option>
//               <option value="doctor">Doctor</option>
//               <option value="admin">Admin/Staff</option>
//             </select>
//           </div>

//           <button type="submit" className="login-btn">Login</button>

//           <div className="login-links">
//             <a href="/forgot-password">Forgot Password?</a>
//             <p>
//               Don’t have an account? <a href="/register">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;


import React, { useState } from "react";
import "../styles/main.css";
import loginBg from "../assets/images/login-bg.png";
import { loginUser } from "../api/api"; // Axios instance
import { setUser } from "../utils/auth"; // localStorage helpers
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      alert("Please select a user type.");
      return;
    }

    try {
      setLoading(true);
      const response = await loginUser(formData);
      const { user, token } = response.data;

      if (user && token) {
        // Save user and token in localStorage
        setUser(user, token);

        alert(`Logged in as ${user.fullName} (${user.role})`);

        // Redirect dynamically based on role
        switch (user.role) {
          case "patient":
            navigate("/patient/dashboard");
            break;
          case "doctor":
            navigate("/doctor/dashboard");
            break;
          case "admin":
            navigate("/admin/dashboard");
            break;
          default:
            navigate("/");
        }
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="login-section"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="login-container">
        <h2>CareCure Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>User Type</label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select User Type</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin/Staff</option>
            </select>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="login-links">
            <a href="/forgot-password">Forgot Password?</a>
            <p>
              Don’t have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
