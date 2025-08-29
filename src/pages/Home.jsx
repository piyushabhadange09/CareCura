// import React from 'react';
// import heroImage from '../assets/images/hospital-hero.png';
// import cardiologyImage from '../assets/images/cardiology.png';
// import pediatricsImage from '../assets/images/pediatrics.png';
// import neurologyImage from '../assets/images/neurology.png';
// const Home = () => {
//   return (
//     <>
//       <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
//         <div className="hero-content">
//           <h1>Your Health, Our Priority</h1>
//           <p>Quality care from trusted professionals</p>
//           <a href="/appointment" className="btn">Book Appointment</a>
//         </div>
//       </section>

//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="service-cards">
//           <div className="card">
//             <img src={cardiologyImage} alt="Cardiology" />
//             <h3>Cardiology</h3>
//             <p>Expert heart care by our top cardiologists.</p>
//           </div>
//           <div className="card">
//              <img src={pediatricsImage} alt="Pediatrics" />
//             <h3>Pediatrics</h3>
//             <p>Comprehensive care for your little ones.</p>
//           </div>
//           <div className="card">
//             <img src={neurologyImage} alt="Neurology" />
//             <h3>Neurology</h3>
//             <p>Advanced treatment for neurological conditions.</p>
//           </div>
//         </div>
//       </section>

//       <section className="testimonials">
//         <h2>What Our Patients Say</h2>
//         <div className="testimonial">
//           <p>"Amazing care and professional doctors! Highly recommended hospital."</p>
//           <span>- Priya Sharma</span>
//         </div>
//         <div className="testimonial">
//           <p>"Clean, efficient, and compassionate staff. Five stars from me!"</p>
//           <span>- Rahul Patil</span>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
import React from 'react';
import heroImage from '../assets/images/hospital-hero.png';
import cardiologyImage from '../assets/images/cardiology.png';
import pediatricsImage from '../assets/images/pediatrics.png';
import neurologyImage from '../assets/images/neurology.png';
import servicesBg from '../assets/images/services-bg.png';

const Home = () => {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>
          <p>Quality care from trusted professionals</p>
          <a href="/appointment" className="btn">Book Appointment</a>
        </div>
      </section>

      <section className="services" style={{ backgroundImage: `url(${servicesBg})` }}>
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src={cardiologyImage} alt="Cardiology" />
            <h3>Cardiology</h3>
            <p>Heart health is at the core of our hospital’s mission. Our cardiology unit ensures precise diagnostics and expert treatment for heart conditions.</p>
          </div>
          <div className="card">
            <img src={pediatricsImage} alt="Pediatrics" />
            <h3>Pediatrics</h3>
            <p>Children deserve extra care. Our pediatricians offer specialized attention, ensuring health and smiles for all ages from newborns to teens.</p>
          </div>
          <div className="card">
            <img src={neurologyImage} alt="Neurology" />
            <h3>Neurology</h3>
            <p>From migraines to strokes, our neurology experts handle complex nervous system conditions with utmost precision and care.</p>
          </div>
        </div>
      </section>

      {/* <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial">
            <p>"The doctors were caring and the service was fast!"</p>
            <span>- Kavita Sharma</span>
        </div>
        <div className="testimonial">
            <p>"Highly recommend CareCure for any family medical need."</p>
            <span>- Arjun Mehta</span>
        </div>
        <div className="testimonial">
            <p>"A wonderful place with kind staff and clean environment."</p>
            <span>- Sneha Kulkarni</span>
        </div>
        <div className="testimonial">
            <p>"Efficient diagnosis and expert care. Thank you!"</p>
            <span>- Manish Rao</span>
        </div>
      </section> */}
      <section className="testimonials">
  <h2>What Our Patients Say</h2>
  <div className="testimonial-cards">
    <div className="testimonial">
      <p>"The doctors were caring and the service was fast!"</p>
      <span>- Kavita Sharma</span>
    </div>
    <div className="testimonial">
      <p>"Highly recommend CareCure for any family medical need."</p>
      <span>- Arjun Mehta</span>
    </div>
    <div className="testimonial">
      <p>"A wonderful place with kind staff and clean environment."</p>
      <span>- Sneha Kulkarni</span>
    </div>
    <div className="testimonial">
      <p>"Efficient diagnosis and expert care. Thank you!"</p>
      <span>- Manish Rao</span>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;