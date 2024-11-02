import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../config/firebase"; // Your Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const PatientRegister = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !phone || !address || !medicalHistory || !profilePic) {
      setError('Please fill in all fields and upload a profile picture');
      return;
    }

    setError('');

    try {
      // Store patient data in Firestore
      await addDoc(collection(db, 'patients'), {
        profilePic,
        name,
        email,
        phone,
        address,
        medicalHistory,
      });

      // Clear form fields
      setProfilePic(null);
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setMedicalHistory('');
    } catch (error) {
      console.error("Error adding document: ", error);
      setError('Failed to register patient. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Preview image
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-teal-100">Register as Patient</h1>
        <p className="text-lg text-center text-teal-200 mb-8">
          Fill in the details to register
        </p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              required
            />
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Medical History Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Medical History</label>
            <textarea
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your medical history"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
            >
              Register
            </button>
          </div>
        </form>
        
        {/* Go Back Link */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/signup')}
            className="text-teal-400 hover:underline"
          >
            Back to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
