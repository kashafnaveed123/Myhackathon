import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  return (
    <div className='justify-center min-h-screen bg-teal-900'>

   
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-teal-100">Register Yourself</h1>
        <p className="text-lg text-center text-teal-200 mb-8">
          Register Yourself as a Doctor or Patient
        </p>

        {/* Registration Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate('/doctor-register')}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
          >
            Register as Doctor
          </button>
          <button
            onClick={() => navigate('/patient-register')}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
          >
            Register as Patient
          </button>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/signin')}
            className="text-teal-400 hover:underline"
          >
            Already have an account? Sign In now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
