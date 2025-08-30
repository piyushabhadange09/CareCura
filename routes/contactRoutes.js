const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// Test route to insert a dummy contact
router.get("/test", async (req, res) => {
  try {
    const contact = await Contact.create({
      name: "Jane Smith",
      email: "janesmith@example.com",
      message: "I’d like to know more about CareCura.",
    });

    res.json({ message: "Dummy contact created", contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
