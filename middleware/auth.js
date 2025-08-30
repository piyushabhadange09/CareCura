import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";
import Admin from "../models/Admin.js";
dotenv.config();

//Middleware :Verify JWT
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Expect: "Bearer <token>"
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    // Verify token
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode; // { _id, role, userType }
    next();
  } catch (error) {
    console.log("JWT Error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

// Middleware: Check Admin
export const isAdmin = async (req, res, next) => {
  try {
    let user = null;

    if (req.user.userType === "admin") {
      user = await Admin.findById(req.user._id);
    }

    if (!user) {
      return res
        .status(403)
        .json({ success: false, message: "Admin access denied" });
    }

    next();
  } catch (error) {
    console.log("Admin Middleware Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error in Admin Middleware" });
  }
};

// Middleware: Check Doctor
export const isDoctor = async (req, res, next) => {
  try {
    let user = null;

    if (req.user.userType === "doctor") {
      user = await Doctor.findById(req.user._id);
    }

    if (!user) {
      return res
        .status(403)
        .json({ success: false, message: "Doctor access denied" });
    }

    next();
  } catch (error) {
    console.log("Doctor Middleware Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error in Doctor Middleware" });
  }
};

// Middleware: Check Patient
export const isPatient = async (req, res, next) => {
  try {
    let user = null;

    if (req.user.userType === "patient") {
      user = await Patient.findById(req.user._id);
    }

    if (!user) {
      return res
        .status(403)
        .json({ success: false, message: "Patient access denied" });
    }

    next();
  } catch (error) {
    console.log("Patient Middleware Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error in Patient Middleware" });
  }
};
