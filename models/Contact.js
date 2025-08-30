import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Full Name
  email: { type: String, required: true }, // Email Address
  message: { type: String, required: true }, // Message text
  createdAt: { type: Date, default: Date.now }, // Auto timestamp
});

module.exports = mongoose.model("Contact", contactSchema);
