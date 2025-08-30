import React from "react";
import '../styles/main.css';
import contactBg from '../assets/images/contact-bg.png';
const Contact=()=>{
    return(
       <section
      className="contact"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 2rem'
      }}
    >
        <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Please fill out the form below.</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
    )
}
export default Contact;