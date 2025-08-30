import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/auth";
import "../styles/dashboard.css"; // shared CSS for dashboard styling

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user || user.role !== "doctor") {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user) return null;

  const cards = [
    {
      title: "Manage Appointments",
      icon: "📝",
      desc: "View and manage patient appointments",
      path: "/doctor/my-appointments",
    },
    {
      title: "Patient Appointment History",
      icon: "📜",
      desc: "See all past patient appointments",
      path: "/doctor/appointment-history",
    },
    {
      title: "Patient Prescriptions",
      icon: "💊",
      desc: "Write or view patient prescriptions",
      path: "/doctor/prescriptions",
    },
    {
      title: "Patient Medical History",
      icon: "📄",
      desc: "Access patient history (authorized access only)",
      path: "/doctor/patient-history",
    },
    {
      title: "Patient List",
      icon: "👥",
      desc: "View list of assigned patients",
      path: "/doctor/patient-list",
    },
    {
      title: "Edit Profile",
      icon: "⚙️",
      desc: "Update your info and availability",
      path: "/doctor/edit-profile",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome, Dr. {user.fullName}!</h1>
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

export default DoctorDashboard;
