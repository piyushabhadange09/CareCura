// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; // ✅ import footer

// // Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Departments from "./pages/Departments";
// import Doctors from "./pages/Doctors";
// import Appointment from "./pages/Appointment";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import PatientRegister from "./pages/PatientRegister";
// import DoctorRegister from "./pages/DoctorRegister";
// import AdminRegister from "./pages/AdminRegister";
// import RegisterOptions from "./pages/RegisterOptions";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="page-content">
//         <Routes>
//           {/* Main Pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/departments" element={<Departments />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Auth Pages */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<RegisterOptions />} />
//           <Route path="/register/patient" element={<PatientRegister />} />
//           <Route path="/register/doctor" element={<DoctorRegister />} />
//           <Route path="/register/admin" element={<AdminRegister />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ import footer

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PatientRegister from "./pages/PatientRegister";
import DoctorRegister from "./pages/DoctorRegister";
import AdminRegister from "./pages/AdminRegister";
import RegisterOptions from "./pages/RegisterOptions";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import ProtectedRoute

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterOptions />} />
          <Route path="/register/patient" element={<PatientRegister />} />
          <Route path="/register/doctor" element={<DoctorRegister />} />
          <Route path="/register/admin" element={<AdminRegister />} />

          {/* Protected Dashboard Pages */}
          <Route
            path="/patient/dashboard"
            element={
              <ProtectedRoute role="patient">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/dashboard"
            element={
              <ProtectedRoute role="doctor">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
