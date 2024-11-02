import React from 'react';

const Contact = () => {
  return (
    <div className="bg-teal-900 py-12 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-teal-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-teal-100 text-center mb-8">Contact Us</h1>
        <p className="text-lg text-teal-200 text-center mb-10">
          We’re here to help! Whether you’re a patient or a doctor, feel free to reach out with any questions, concerns, or feedback.
        </p>

        {/* Contact Form */}
        <form className="space-y-8">
          {/* Name Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 bg-teal-700 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-3 bg-teal-700 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Contact Type Selection */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Are you a...</label>
            <select className="w-full p-3 bg-teal-700 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-400">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Message</label>
            <textarea
              className="w-full p-3 bg-teal-700 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-400"
              placeholder="Write your message here..."
              rows="5"
              required
            ></textarea>
          </div>

          {/* Complaint Section */}
          <div className="bg-teal-800 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-teal-100 mb-4">Submit a Complaint</h2>
            <p className="text-lg text-teal-200 mb-6">
              If you have a complaint about our services, please provide details below to help us improve your experience.
            </p>

            {/* Complaint Details */}
            <div>
              <label className="block text-lg font-semibold text-teal-100 mb-2">Complaint Description</label>
              <textarea
                className="w-full p-3 bg-teal-700 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-400"
                placeholder="Describe your complaint here..."
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
