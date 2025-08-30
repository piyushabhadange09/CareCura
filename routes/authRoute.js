import express from "express";
// import {
//   registerPatient,
//   registerDoctor,
//   registerAdmin,
//   loginUser,
// } from "../controllers/authController.js";
import {
  registerPatient,
  registerDoctor,
  registerAdmin,
  loginUser,
} from "../controllers/authController.js";

import {
  isAdmin,
  isDoctor,
  isPatient,
  requireSignIn,
} from "../middleware/auth.js";

const router = express.Router();

// ================== REGISTER ==================
router.post("/register/patient", registerPatient);
router.post("/register/doctor", registerDoctor);
router.post("/register/admin", registerAdmin);

// ================== LOGIN ==================
router.post("/login", loginUser);

// ================== AUTH TEST ROUTES ==================
router.get("/test/admin", requireSignIn, isAdmin, (req, res) => {
  res.status(200).json({ message: "✅ Admin route works!" });
});

router.get("/test/doctor", requireSignIn, isDoctor, (req, res) => {
  res.status(200).json({ message: "✅ Doctor route works!" });
});

router.get("/test/patient", requireSignIn, isPatient, (req, res) => {
  res.status(200).json({ message: "✅ Patient route works!" });
});

// ================== USER AUTH CHECK ==================
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).json({ ok: true });
});

// ================== ROLE-BASED AUTH CHECK ==================
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).json({ ok: true });
});

router.get("/doctor-auth", requireSignIn, isDoctor, (req, res) => {
  res.status(200).json({ ok: true });
});

router.get("/patient-auth", requireSignIn, isPatient, (req, res) => {
  res.status(200).json({ ok: true });
});

export default router;
