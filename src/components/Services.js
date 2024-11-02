import React from 'react';

const Services = () => {
  const facilities = [
    {
      title: "Enhanced Security",
      description: "Our providers implement state-of-the-art security measures, including encrypted communication and data protection to ensure patient privacy and confidentiality at all times.",
      image: "https://admin.convexsol.com/uploads/Enhancing_Hospital_Security_with_Visitor_Management_System_a3fb3c8997.webp",
    },
    {
      title: "Comprehensive Patient Care",
      description: "Our healthcare providers prioritize patient well-being, offering personalized care plans and regular follow-ups to ensure effective treatment and support for every individual.",
      image: "https://i.pinimg.com/736x/fd/ca/b9/fdcab9a63fef5a69682b4ced3ec04b29.jpg",
    },
    {
      title: "Advanced Telemedicine Technology",
      description: "Utilizing the latest telehealth technologies, our providers offer seamless virtual consultations, making healthcare accessible from the comfort of your home.",
      image: "https://i.pinimg.com/564x/5b/ca/65/5bca65247b6ec9e923634390df235cc4.jpg",
    },
    {
      title: "24/7 Patient Support",
      description: "Our dedicated support teams are available around the clock to assist with any inquiries, ensuring that patients receive timely and efficient assistance whenever needed.",
      image: "https://nikhilcomforts.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbackend-upload-bucket%2Fassets%252Fnikhilproject%252F2f4732b4aaae87be6da7Tech%2520Support.png&w=1920&q=75",
    },
    {
      title: "Health Education Resources",
      description: "We believe in empowering patients with knowledge. Our providers offer educational materials and resources to help patients make informed decisions about their health and wellness.",
      image: "https://i.pinimg.com/736x/e5/17/e9/e517e996f589b4f60a8f9e848400ec25.jpg",
    },
    {
      title: "Flexible Scheduling Options",
      description: "To accommodate diverse patient needs, our providers offer flexible scheduling for consultations, including evening and weekend appointments.",
      image: "https://i.pinimg.com/564x/56/8a/72/568a7297b05c10843b1ae2f71236f55a.jpg",
    },
  ];

  return (
    <div className="bg-teal-900 py-10 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto bg-teal-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-teal-100 text-center mb-8">Healthcare Provider Facilities</h1>
        <p className="text-lg text-teal-200 text-center mb-10">
          At MedicoHub, our providers offer a range of facilities designed to enhance patient care and ensure a comfortable experience.
        </p>

        {/* Facility Items */}
        <div className="space-y-8">
          {facilities.map((facility, index) => (
            <div key={index} className={`flex items-center bg-teal-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <img
                src={facility.image}
                alt={facility.title}
                className="w-1/3 h-auto rounded-lg shadow-md transition-shadow duration-200 hover:shadow-xl"
              />
              <div className="ml-6 text-teal-100">
                <h2 className="text-2xl font-bold mb-2">{facility.title}</h2>
                <p className="text-lg leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
