import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    setError('');
    // Add your sign-in logic here
    console.log(`Signing in as ${userType}:`, { email, password });
  };
  const navigate=useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-teal-100">Sign In</h1>
        <p className="text-lg text-center text-teal-200 mb-8">
          Please sign in as a Doctor or Patient
        </p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSignIn} className="space-y-6">
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

          {/* Password Field */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* User Type Selection */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Sign in as</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <a href="#" className="text-teal-400 hover:underline">
            Forgot your password?
          </a>
        </div>

       < div className="text-center mt-4">
          <a href="/register" className="text-teal-400 hover:underline"
          onClick={()=>navigate('/register')}
          >
           Don't have an account? Register now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
