const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// Test route: create a dummy appointment
router.get("/test", async (req, res) => {
  try {
    const appointment = await Appointment.create({
      name: "John Doe",
      age: 30,
      gender: "Male",
      department: "Cardiology",
      date: "2025-09-01",
      time: "10:00 AM",
      email: "johndoe@example.com",
      phone: "9876543210",
      notes: "Chest pain",
    });

    res.json({ message: "Dummy appointment created", appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
