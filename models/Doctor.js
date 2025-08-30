// models/Doctor.js
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // no duplicate emails
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  specialization: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true, // ensure each license is unique
  },
  availability: {
    type: String, // you can later change to a structured object or array if needed
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = mongoose.model("Doctor", doctorSchema);
export default mongoose.model("Doctor", doctorSchema);
