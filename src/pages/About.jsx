// import React from 'react';
// import aboutImage from '../assets/images/about-hospital.png'; // Import image directly like Home.jsx
// import '../styles/main.css';

// const About = () => {
//   return (
//     <section
//       className="about"
//       style={{
//         backgroundImage: `url(${aboutImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <div className="about-container">
//         <div className="about-text">
//           <h2>About CareCure Hospital</h2>
//           <p>
//             CareCure Hospital is a beacon of hope and health. Established with the vision to provide top-tier medical services to every corner of our community, we have consistently delivered compassionate, advanced, and affordable healthcare since our founding.
//           </p>
//           <p>
//             Our hospital is equipped with state-of-the-art medical technology, a team of internationally recognized doctors, and a passion for excellence in patient care. From routine checkups to complex surgeries, we handle it all with precision, empathy, and integrity.
//           </p>
//           <p>
//             We specialize in <strong>Cardiology</strong>, <strong>Neurology</strong>, <strong>Pediatrics</strong>, <strong>Orthopedics</strong>, and <strong>Emergency Medicine</strong>. Each department operates with a patient-first mindset, ensuring that your care experience is seamless and healing.
//           </p>
//           <p>
//             Our mission is simple — to heal, to teach, and to serve. We are proud to be more than just a hospital; we are a place where healing begins and hope thrives.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import aboutImage from '../assets/images/about-hospital.png'; // Background image
import team1 from '../assets/images/team1.png';
import team2 from '../assets/images/team2.png';
import team3 from '../assets/images/team3.png';
import facility1 from '../assets/images/facility1.png';
import facility2 from '../assets/images/facility2.png';
import facility3 from '../assets/images/facility3.png';
import '../styles/main.css';

const About = () => {
  return (
    <>
      {/* Main About Banner Section */}
      <section
        className="about"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="about-container">
          <div className="about-text">
            <h2>About CareCure Hospital</h2>
            <p>
              CareCure Hospital is a beacon of hope and health. Established with the vision to provide top-tier medical services to every corner of our community, we have consistently delivered compassionate, advanced, and affordable healthcare since our founding.
            </p>
            <p>
              Our hospital is equipped with state-of-the-art medical technology, a team of internationally recognized doctors, and a passion for excellence in patient care. From routine checkups to complex surgeries, we handle it all with precision, empathy, and integrity.
            </p>
            <p>
              We specialize in <strong>Cardiology</strong>, <strong>Neurology</strong>, <strong>Pediatrics</strong>, <strong>Orthopedics</strong>, and <strong>Emergency Medicine</strong>. Each department operates with a patient-first mindset, ensuring that your care experience is seamless and healing.
            </p>
            <p>
              Our mission is simple — to heal, to teach, and to serve. We are proud to be more than just a hospital; we are a place where healing begins and hope thrives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <h2>Mission & Vision</h2>
        <p>
          <strong>Our Mission:</strong> To provide high-quality, patient-centered healthcare services with compassion, innovation, and integrity.
        </p>
        <p>
          <strong>Our Vision:</strong> To be a leading healthcare institution recognized for excellence in medical care, education, and community wellness.
        </p>
      </section>

      {/* Leadership & Management */}
      <section className="about-section">
        <h2>Leadership & Management Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={team1} alt="Dr. Mehta" />
            <h4>Dr. A. Mehta</h4>
            <p>Chief Medical Officer</p>
          </div>
          <div className="team-member">
            <img src={team2} alt="Ms. Sharma" />
            <h4>Miss. R. Sharma</h4>
            <p>Hospital Administrator</p>
          </div>
          <div className="team-member">
            <img src={team3} alt="Dr. Verma" />
            <h4>Dr. S. Verma</h4>
            <p>Director of Patient Services</p>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="about-section">
        <h2>Our Facilities</h2>
       <div className="facility-gallery">
  <div className="facility-card">
    <img src={facility1} alt="Modern Operation Theatre" />
    <p>Modern Operation Theatre</p>
  </div>
  <div className="facility-card">
    <img src={facility2} alt="Advanced Diagnostic Lab" />
    <p>Advanced Diagnostic Lab</p>
  </div>
  <div className="facility-card">
    <img src={facility3} alt="24/7 Emergency Wing" />
    <p>24/7 Emergency Wing</p>
  </div>
</div>

      </section>
    </>
  );
};

export default About;
