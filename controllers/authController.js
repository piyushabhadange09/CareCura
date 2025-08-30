import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import Admin from "../models/Admin.js";

// ================== Helper ==================
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// ================== REGISTER PATIENT ==================
export const registerPatient = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob, address } = req.body;

    if (!fullName || !email || !password || !phone) {
      return res
        .status(400)
        .json({ message: "⚠️ Please fill all required fields" });
    }

    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: "⚠️ Patient already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const patient = new Patient({
      fullName,
      email,
      password: hashedPassword,
      phone,
      gender,
      dob,
      address,
    });

    await patient.save();
    res
      .status(201)
      .json({ message: "✅ Patient registered successfully", patient });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "❌ Error registering patient", error: error.message });
  }
};

// ================== REGISTER DOCTOR ==================
export const registerDoctor = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      phone,
      specialization,
      qualifications,
      experience,
      licenseNumber,
      availability,
    } = req.body;

    // Check required fields
    if (
      !fullName ||
      !email ||
      !password ||
      !specialization ||
      !qualifications ||
      !experience ||
      !licenseNumber
    ) {
      return res
        .status(400)
        .json({ message: "⚠️ Please fill all required fields" });
    }

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "⚠️ Doctor already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const doctor = new Doctor({
      fullName,
      email,
      password: hashedPassword,
      phone,
      specialization,
      qualifications,
      experience,
      licenseNumber,
      availability,
    });

    await doctor.save();
    res
      .status(201)
      .json({ message: "✅ Doctor registered successfully", doctor });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "❌ Error registering doctor", error: error.message });
  }
};

// ================== REGISTER ADMIN ==================
export const registerAdmin = async (req, res) => {
  try {
    const { fullName, email, password, phone, role } = req.body;

    if (!fullName || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "⚠️ Please fill all required fields" });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "⚠️ Admin already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const admin = new Admin({
      fullName,
      email,
      password: hashedPassword,
      phone,
      role, // Include role here
    });

    await admin.save();
    res
      .status(201)
      .json({ message: "✅ Admin registered successfully", admin });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "❌ Error registering admin", error: error.message });
  }
};

// ================== LOGIN USER (for all roles) ==================
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "⚠️ Email, password, and role are required" });
    }

    let user;
    if (role === "patient") {
      user = await Patient.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    } else if (role === "admin") {
      user = await Admin.findOne({ email });
    } else {
      return res.status(400).json({ message: "⚠️ Invalid role provided" });
    }

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "❌ Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "✅ Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "❌ Error logging in", error: error.message });
  }
};
