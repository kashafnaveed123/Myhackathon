import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate=useNavigate()
  return (
    <div className="bg-teal-900 text-white flex flex-col items-center px-6  md:py-10">
      <header className="flex w-full justify-between items-center max-w-6xl xs:pt-10 ">
        <div className="text-2xl font-bold">
          MedicoHub
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <a href="/" className="hover:text-teal-300">Home</a>
          <a href="/about" className="hover:text-teal-300">About</a>
          <a href="/services" className="hover:text-teal-300">Services</a>
          <a href="/contact" className="hover:text-teal-300">Contact us</a>
          <a href="/appointment" className="hover:text-teal-300">Book Appointment</a>
        <a href="/profile" className="hover:text-teal-300">see Profile </a> 

        </nav>

        <div className="space-x-4 hidden md:flex">
          <button className="px-4 py-2 border border-teal-300 text-teal-300 rounded hover:bg-teal-300 hover:text-teal-900"
          onClick={()=>navigate('/signin')}
          >
            Sign in
          </button>
          <button className="px-4 py-2 bg-teal-300 text-teal-900 rounded hover:bg-teal-100"
             onClick={()=>navigate('/register')}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col items-center space-y-4 text-sm font-semibold mt-4 md:hidden">
          <a href="/" className="hover:text-teal-300">Home</a>
          <a href="/About" className="hover:text-teal-300">About</a>
          <a href="/services" className="hover:text-teal-300">Servies</a>
        <a href="/contact" className="hover:text-teal-300">Contact us </a>
        <a href="/appointment" className="hover:text-teal-300">Book Appointment </a> 
        <a href="/profile" className="hover:text-teal-300">see Profile </a> 
        {/* <a href="/profile" className='text-white' onClick={()=>navigate('/profile')}>
            See profile 
          </a> */}
          <button className="w-full px-4 py-2 border border-teal-300 text-teal-300 rounded hover:bg-teal-300 hover:text-teal-900">
            Sign in
          </button>
          <button className="w-full px-4 py-2 bg-teal-300 text-teal-900 rounded hover:bg-teal-100"
          onClick={()=>('/register')}
          >
            Get Started
          </button>
         
        </nav>
      )}
    </div>
  );
}

export default Nav;
