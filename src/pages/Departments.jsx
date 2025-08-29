import React from 'react';
import cardiologyIcon from '../assets/images/cardiology.png';
import neurologyIcon from '../assets/images/neurology.png';
import pediatricsIcon from '../assets/images/pediatrics.png';
import orthopedicsIcon from '../assets/images/orthopedics.png';
import radiologyIcon from '../assets/images/radiology.png';
import emergencyIcon from '../assets/images/emergency.png';
import dermatologyIcon from '../assets/images/dermatology.png';
import psychiatryIcon from '../assets/images/psychiatry.png';
import '../styles/main.css';

const Departments = () => {
 const iconStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease'
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  };
  return (
    <section className="departments">
      <div className="departments-container">
        <h2>Our Medical Departments</h2>
        <div className="departments-grid">
          <div className="department-card">
            <img src={cardiologyIcon} alt="Cardiology" style={iconStyle} />
            <h3>Cardiology</h3>
            <p>We provide expert care for heart-related conditions, from high blood pressure to complex cardiac surgeries. Equipped with modern cath labs, our cardiologists ensure life-saving interventions around the clock.</p>
          </div>
          <div className="department-card">
            <img src={neurologyIcon} alt="Neurology" style={iconStyle} />
            <h3>Neurology</h3>
            <p>Our neurology team specializes in treating disorders of the brain, spine, and nervous system. We offer advanced care for strokes, epilepsy, Parkinson's disease, and more with diagnostic precision.</p>
          </div>
          <div className="department-card">
            <img src={pediatricsIcon} alt="Pediatrics" style={iconStyle} />
            <h3>Pediatrics</h3>
            <p>Compassionate and child-friendly healthcare for newborns, children, and adolescents. We offer immunizations, growth tracking, illness care, and specialized treatments in a nurturing environment.</p>
          </div>
          <div className="department-card">
            <img src={orthopedicsIcon} alt="Orthopedics" style={iconStyle} />
            <h3>Orthopedics</h3>
            <p>Comprehensive treatment for bones, joints, muscles, and spine disorders. From sports injuries to joint replacement, we provide personalized rehabilitation and surgical care for improved mobility.</p>
          </div>
          <div className="department-card">
            <img src={radiologyIcon} alt="Radiology" style={iconStyle} />
            <h3>Radiology</h3>
            <p>High-quality diagnostic imaging services including X-rays, CT scans, MRI, and ultrasound. Our expert radiologists work closely with your doctor to ensure fast and accurate results.</p>
          </div>
          <div className="department-card">
            <img src={emergencyIcon} alt="Emergency" style={iconStyle} />
            <h3>Emergency</h3>
            <p>24/7 emergency services for trauma, accidents, cardiac arrests, and acute illnesses. Our ER is staffed by experienced doctors and nurses equipped for quick and effective responses.</p>
          </div>
          <div className="department-card">
            <img src={dermatologyIcon} alt="Dermatology" style={iconStyle} />
            <h3>Dermatology</h3>
            <p>Advanced skincare solutions for acne, allergies, infections, eczema, and cosmetic concerns. Our dermatologists use modern techniques for both medical and aesthetic treatments.</p>
          </div>
          <div className="department-card">
            <img src={psychiatryIcon} alt="Psychiatry" style={iconStyle} />
            <h3>Psychiatry</h3>
            <p>Mental health care that prioritizes empathy and privacy. We treat anxiety, depression, bipolar disorder, and stress-related issues through counseling, therapy, and medication.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
