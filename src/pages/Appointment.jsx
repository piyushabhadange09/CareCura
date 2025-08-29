import React, { useState } from 'react';
import '../styles/main.css';
import appointmentBg from '../assets/images/appointment-bg.png';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    department: '',
    date: '',
    time: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} in ${formData.department} on ${formData.date} at ${formData.time}`);
  };

  return (
    <section
      className="appointment-section"
      style={{
        backgroundImage: `url(${appointmentBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 2rem'
      }}
    >
      <div className="appointment-container">
        <h2>Book an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Patient Name" required onChange={handleChange} />
          <input type="number" name="age" placeholder="Age" required onChange={handleChange} />
          <select name="gender" required onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select name="department" required onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Psychiatry">Psychiatry</option>
          </select>
          <input type="date" name="date" required onChange={handleChange} />
          <input type="time" name="time" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <textarea name="notes" placeholder="Additional Notes / Symptoms" rows="4" onChange={handleChange}></textarea>
          <button type="submit">Confirm Appointment</button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
