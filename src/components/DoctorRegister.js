import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase"; // Your Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const DoctorRegister = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [information, setInformation] = useState("");
  const [Name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !specifications || !information || !Name || !profilePic) {
      setError("Please fill in all fields and upload a profile picture");
      return;
    }

    setError("");

    // Create a doctor object to store
    const doctorData = {
      email,
      specifications,
      information,
      Name,
      profilePic, // Storing the URL created for image preview
      createdAt: new Date(), // Optional timestamp
    };

    try {
      // Add a new document with a generated ID in the 'Doctors' collection
      await addDoc(collection(db, "Doctors"), doctorData);

      // Resetting input fields after successful submission
      setEmail("");
      setSpecifications("");
      setInformation("");
      setName("");
      setProfilePic(null); // Resetting profilePic to null
    } catch (error) {
      console.error("Error adding doctor: ", error);
      setError("Could not register doctor. Please try again.");
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
        <h1 className="text-4xl font-bold text-center text-teal-100">
          Register as Doctor
        </h1>
        <p className="text-lg text-center text-teal-200 mb-8">
          Fill in the details to register
        </p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">
              Profile Picture
            </label>
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
            <label className="block text-lg font-semibold text-teal-100 mb-2">
              Name
            </label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Specifications Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">
              Specifications
            </label>
            <input
              type="text"
              value={specifications}
              onChange={(e) => setSpecifications(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your specifications"
              required
            />
          </div>

          {/* Information Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">
              Information
            </label>
            <textarea
              value={information}
              onChange={(e) => setInformation(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter additional information"
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
            onClick={() => navigate("/signup")}
            className="text-teal-400 hover:underline"
          >
            Back to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
