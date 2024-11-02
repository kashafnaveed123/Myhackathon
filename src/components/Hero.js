import React from 'react'
function Hero() {
  return (
    <>
      <div className="bg-teal-900 text-white min-h-screen flex items-center justify-center px-6 py-10">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
        {/* Text Section */}
        <div className="flex-1 mb-10 md:mb-0 md:mr-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
          The leading choice in <br />
            <span className="relative inline-block">
              <span className="text-teal-300">virtual healthcare</span>
              <span className="absolute inset-0 border border-teal-300 rounded-lg -z-10 px-3 py-1 mt-1"></span>
            </span>
            <br /> 
          </h1>
          <p className="text-lg md:text-xl font-light mt-4">
          Connecting millions of patients and providers worldwide.
            Experience why more than 1 million providers trust us already.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <button className="px-6 py-3 bg-teal-300 text-teal-900 font-semibold rounded hover:bg-teal-100">
              Get started for free
            </button>
            <button className="px-6 py-3 border border-teal-300 text-teal-300 font-semibold rounded hover:bg-teal-700">
              Schedule a Clinic demo
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full md:w-auto">
          <img
            src="https://www.shutterstock.com/image-photo/portrait-man-doctor-standing-team-600nw-2478537933.jpg" // Replace with actual image URL
            alt="Telemedicine Doctor"
            className="rounded-lg object-cover w-full h-full"
          />
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
