import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DoctorRegister from './components/DoctorRegister'
import PatientRegister from './components/PatientRegister';
import Appointment from './components/Appointment'
import PatientAppointment from './components/PatientAppointment';
import Profile from './components/Profile';
function App() {
  return (
    <Router>
      <Nav /> {/* Nav will stay on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/doctor-register" element={<DoctorRegister/>} />
        <Route path="/patient-register" element={<PatientRegister/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/patientappointment" element={<PatientAppointment/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
