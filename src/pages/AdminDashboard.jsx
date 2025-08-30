import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/auth";
import "../styles/dashboard.css"; // shared dashboard CSS

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user) return null;

  const cards = [
    {
      title: "Manage Doctors",
      icon: "👨‍⚕️",
      desc: "Add, edit, or remove doctors",
      path: "/admin/manage-doctors",
    },
    {
      title: "Manage Patients",
      icon: "🧑‍⚕️",
      desc: "View and edit patient information",
      path: "/admin/manage-patients",
    },
    {
      title: "Manage Appointments",
      icon: "📅",
      desc: "Approve, cancel, or review appointments",
      path: "/admin/manage-appointments",
    },
    {
      title: "Reports & Analytics",
      icon: "📊",
      desc: "View hospital usage statistics",
      path: "/admin/reports",
    },
    {
      title: "Manage Staff",
      icon: "👥",
      desc: "Add or manage admins and staff",
      path: "/admin/manage-staff",
    },
    {
      title: "Edit Profile",
      icon: "⚙️",
      desc: "Update your admin info",
      path: "/admin/edit-profile",
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

export default AdminDashboard;
