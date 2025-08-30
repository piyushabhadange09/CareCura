// import React from 'react';
// import '../styles/main.css';
// import doc1 from '../assets/images/doc1.png';
// import doc2 from '../assets/images/doc2.png';
// import doc3 from '../assets/images/doc3.png';
// import doc4 from '../assets/images/doc4.png';
// import doc5 from '../assets/images/doc5.png';
// import doc6 from '../assets/images/doc6.png';

// const Doctors = () => {
//   const doctors = [
//     {
//       name: 'Dr. Aarav Mehta',
//       specialty: 'Cardiologist',
//       experience: '15+ years experience',
//       photo: doc1
//     },
//     {
//       name: 'Dr. Neha Sharma',
//       specialty: 'Neurologist',
//       experience: '10+ years experience',
//       photo: doc2
//     },
//     {
//       name: 'Dr. Rishi Verma',
//       specialty: 'Pediatrician',
//       experience: '8+ years experience',
//       photo: doc3
//     },
//     {
//       name: 'Dr. Kavita Rao',
//       specialty: 'Dermatologist',
//       experience: '12+ years experience',
//       photo: doc4
//     },
//     {
//       name: 'Dr. Mohan Iyer',
//       specialty: 'Orthopedic Surgeon',
//       experience: '18+ years experience',
//       photo: doc5
//     },
//     {
//       name: 'Dr. Sanya Kapoor',
//       specialty: 'Psychiatrist',
//       experience: '9+ years experience',
//       photo: doc6
//     }
//   ];

//   return (
//     <section className="doctors">
//       <div className="doctors-container">
//         <h2>Our Specialist Doctors</h2>
//         <div className="doctor-grid">
//           {doctors.map((doc, index) => (
//             <div className="doctor-card unique-style" key={index}>
//               <img src={doc.photo} alt={doc.name} className="doctor-image" />
//               <h3>{doc.name}</h3>
//               <p><strong>Specialty:</strong> {doc.specialty}</p>
//               <p><strong>Experience:</strong> {doc.experience}</p>
//               <button className="view-profile">View Profile</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Doctors;


import React from 'react';
import '../styles/main.css';
import doc1 from '../assets/images/doc1.png';
import doc2 from '../assets/images/doc2.png';
import doc3 from '../assets/images/doc3.png';
import doc4 from '../assets/images/doc4.png';
import doc5 from '../assets/images/doc5.png';
import doc6 from '../assets/images/doc6.png';
import doctorBg from '../assets/images/doctor-bg.png';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Aarav Mehta',
      specialty: 'Cardiologist',
      experience: '15+ years experience',
      photo: doc1
    },
    {
      name: 'Dr. Neha Sharma',
      specialty: 'Neurologist',
      experience: '10+ years experience',
      photo: doc2
    },
    {
      name: 'Dr. Rishi Verma',
      specialty: 'Pediatrician',
      experience: '8+ years experience',
      photo: doc3
    },
    {
      name: 'Dr. Kavita Rao',
      specialty: 'Dermatologist',
      experience: '12+ years experience',
      photo: doc4
    },
    {
      name: 'Dr. Mohan Iyer',
      specialty: 'Orthopedic Surgeon',
      experience: '18+ years experience',
      photo: doc5
    },
    {
      name: 'Dr. Sanya Kapoor',
      specialty: 'Psychiatrist',
      experience: '9+ years experience',
      photo: doc6
    }
  ];

  return (
    <section
      className="doctors"
      style={{
        backgroundImage: `url(${doctorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 2rem'
      }}
    >
      <div className="doctors-container">
        <h2>Our Specialist Doctors</h2>
        <div className="doctor-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card unique-style" key={index}>
              <img src={doc.photo} alt={doc.name} className="doctor-image" />
              <h3>{doc.name}</h3>
              <p><strong>Specialty:</strong> {doc.specialty}</p>
              <p><strong>Experience:</strong> {doc.experience}</p>
              <button className="view-profile">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
