// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // // Routes
// app.use("/api/appointments", require("./routes/appointmentRoutes"));
// app.use("/api/contacts", require("./routes/contactRoutes"));
// // app.use("/api/doctors", require("./routes/doctorRoutes"));
// // app.use("/api/departments", require("./routes/departmentRoutes"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import connectDB from "./config/db.js";

import cors from "cors";

// ===== Routes =====
import authRoute from "./routes/authRoute.js";

const app = express();

// ===== Configure ENV =====
dotenv.config();

app.use(cors({ origin: "*" }));

// ===== Database Config =====
connectDB();

// ===== Middlewares =====
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// ===== API Routes =====
app.use("/api/auth", authRoute); // 🔑 Authentication (Patient, Doctor, Admin)

// ===== Root Endpoint =====
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Hospital Management App</h1>");
});

// ===== Server Listen =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
