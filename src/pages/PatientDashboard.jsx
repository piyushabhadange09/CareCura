// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getUser } from "../utils/auth";
// import "../styles/dashboard.css";

// const PatientDashboard = () => {
//   const navigate = useNavigate();
//   const user = getUser();

//   useEffect(() => {
//     if (!user || user.role !== "patient") {
//       navigate("/login");
//     }
//   }, [navigate, user]);

//   if (!user) return null;

//   const cards = [
//     { title: "My Appointments", icon: "📝", desc: "Book and view upcoming appointments", path: "/patient/my-appointments" },
//     { title: "Appointment History", icon: "📅", desc: "Check all past appointments", path: "/patient/appointment-history" },
//     { title: "Medical History", icon: "📄", desc: "View your medical records", path: "/patient/medical-history" },
//     { title: "Prescriptions", icon: "💊", desc: "Check your prescriptions", path: "/patient/prescriptions" },
//     { title: "View Doctors", icon: "👨‍⚕️", desc: "Browse available doctors", path: "/patient/view-doctors" },
//     { title: "Edit Profile", icon: "⚙️", desc: "Update your account info", path: "/patient/edit-profile" },
//   ];

//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-title">Welcome, {user.fullName}!</h1>
//       <div className="dashboard-cards">
//         {cards.map((card, idx) => (
//           <div key={idx} className="dashboard-card" onClick={() => navigate(card.path)}>
//             <div className="card-icon">{card.icon}</div>
//             <h3 className="card-title">{card.title}</h3>
//             <p className="card-desc">{card.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/auth";
import "../styles/dashboard.css";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user || user.role !== "patient") {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user) return null;

  const cards = [
    {
      title: "Book Appointment",
      icon: "📝",
      desc: "Schedule a new appointment with a doctor",
      path: "/patient/appointment-booking",
    },
    {
      title: "My Appointments",
      icon: "📅",
      desc: "View upcoming appointments",
      path: "/patient/my-appointments",
    },
    {
      title: "Appointment History",
      icon: "🕒",
      desc: "Check all past appointments",
      path: "/patient/appointment-history",
    },
    {
      title: "Medical History",
      icon: "📄",
      desc: "View your medical records",
      path: "/patient/medical-history",
    },
    {
      title: "Prescriptions",
      icon: "💊",
      desc: "Check your prescriptions",
      path: "/patient/prescriptions",
    },
    {
      title: "View Doctors",
      icon: "👨‍⚕️",
      desc: "Browse available doctors",
      path: "/patient/view-doctors",
    },
    {
      title: "Edit Profile",
      icon: "⚙️",
      desc: "Update your account info",
      path: "/patient/edit-profile",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome, {user.fullName}!</h1>
      <div className="dashboard-cards">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="dashboard-card"
            onClick={() => navigate(card.path)}
          >
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;


