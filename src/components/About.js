import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-teal-900 text-white flex flex-col items-center px-6 py-10 md:px-10 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-100 text-center">
        Welcome to MedicoHub
      </h1>
      <p className="text-lg md:text-xl mb-10 leading-relaxed text-center">
        Bridging the gap between patients and healthcare providers through innovative telemedicine solutions.
      </p>

      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service Post */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-lg leading-relaxed">
            MedicoHub offers a range of services including virtual consultations, prescription refills, health assessments, and wellness programs tailored to your needs.
          </p>
        </div>

        {/* Team Post */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Expert Team</h2>
          <p className="text-lg leading-relaxed">
            Our diverse team of healthcare professionals is dedicated to providing quality care. Each member is rigorously vetted to ensure the highest standards of service.
          </p>
        </div>

        {/* Patient Care Post */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Patient-Centric Care</h2>
          <p className="text-lg leading-relaxed">
            At MedicoHub, we prioritize patient privacy and safety, utilizing advanced technology to secure your personal information during consultations.
          </p>
        </div>

        {/* Testimonials Post */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg leading-relaxed">
            "MedicoHub transformed the way I access healthcare. The service is convenient, and the doctors are incredibly professional." - Jane D.
          </p>
        </div>

        {/* Community Post */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg leading-relaxed">
            Join the MedicoHub community today and experience healthcare that puts you first. Together, we can redefine access to medical services.
          </p>
        </div>

        {/* Call to Action Post */}
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-lg leading-relaxed mb-4">
            Ready to take the first step towards better health? Sign up today!
          </p>
          <button className="px-6 py-3 bg-teal-300 text-teal-900 rounded hover:bg-teal-100 font-semibold"
          onClick={()=>navigate('/register')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
