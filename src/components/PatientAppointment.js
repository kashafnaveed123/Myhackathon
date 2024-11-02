
// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { db } from '../config/firebase'; // Import your Firebase config
// import { collection, addDoc, getDocs } from 'firebase/firestore';

// const PatientAppointment = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [availableSlots, setAvailableSlots] = useState([]); // Array to store available slots
//   const [selectedSlot, setSelectedSlot] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     const fetchAvailableSlots = async () => {
//       try {
//         // Fetch appointments from Firestore
//         const appointmentsCollection = collection(db, 'Doctor Appointment');
//         const appointmentsSnapshot = await getDocs(appointmentsCollection);
//         const appointmentsList = appointmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//         // Filter slots based on the selected date
//         const filteredSlots = appointmentsList.filter(appointment => {
//           const appointmentDate = new Date(appointment.date);
//           // Match the selected date with the appointment date
//           return appointmentDate.toDateString() === selectedDate.toDateString();
//         }).map(appointment => ({
//           id: appointment.id,
//           time: appointment.time, // Ensure this is a valid time string
//         }));

//         setAvailableSlots(filteredSlots);
//       } catch (error) {
//         console.error('Error fetching available slots: ', error);
//         setError('Could not fetch available slots. Please try again.');
//       }
//     };

//     fetchAvailableSlots();
//   }, [selectedDate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedSlot) {
//       setError('Please select a time slot.');
//       return;
//     }

//     setError('');
//     setSuccessMessage('');

//     const appointmentData = {
//       date: selectedDate,
//       time: selectedSlot,
//     };

//     // Save the appointment to Firestore
//     try {
//       const docRef = await addDoc(collection(db, 'PatientAppointments'), appointmentData);
//       console.log('Appointment booked with ID: ', docRef.id);
//       setSuccessMessage('Appointment booked successfully!');

//       // Clear the selected slot after booking
//       setSelectedSlot('');
//     } catch (error) {
//       console.error('Error booking appointment: ', error);
//       setError('Could not book appointment. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-teal-900">
//       <div className="w-full max-w-md p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
//         <h1 className="text-4xl font-bold text-center text-teal-100">Book an Appointment</h1>

//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//         {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Date Picker */}
//           <div>
//             <label className="block text-lg font-semibold text-teal-100 mb-2">Select Date</label>
//             <DatePicker
//               selected={selectedDate}
//               onChange={(date) => setSelectedDate(date)}
//               className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
//               dateFormat="MMMM d, yyyy"
//               required
//             />
//           </div>

//           {/* Available Time Slots */}
//           <div>
//             <label className="block text-lg font-semibold text-teal-100 mb-2">Available Time Slots</label>
//             <select
//               value={selectedSlot}
//               onChange={(e) => setSelectedSlot(e.target.value)}
//               className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
//               required
//             >
//               <option value="">Select a time slot</option>
//               {availableSlots.length > 0 ? (
//                 availableSlots.map(slot => (
//                   <option key={slot.id} value={slot.time}>
//                     {slot.time}
//                   </option>
//                 ))
//               ) : (
//                 <option value="" disabled>No available slots for this date</option>
//               )}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PatientAppointment;






import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { db } from '../config/firebase'; // Import your Firebase config
import { collection, addDoc, getDocs } from 'firebase/firestore';

const PatientAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const appointmentsCollection = collection(db, 'Doctor Appointment');
        const appointmentsSnapshot = await getDocs(appointmentsCollection);
        const appointmentsList = appointmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        console.log('Fetched Appointments:', appointmentsList);

        const filteredSlots = appointmentsList.filter(appointment => {
          const appointmentDate = new Date(appointment.date);
          console.log('Appointment Date:', appointmentDate.toDateString(), 'Selected Date:', selectedDate.toDateString());
          return appointmentDate.toDateString() === selectedDate.toDateString();
        }).map(appointment => ({
          id: appointment.id,
          time: appointment.time,
        }));

        console.log('Filtered Slots:', filteredSlots);

        setAvailableSlots(filteredSlots);
      } catch (error) {
        console.error('Error fetching available slots: ', error);
        setError('Could not fetch available slots. Please try again.');
      }
    };

    fetchAvailableSlots();
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      setError('Please select a time slot.');
      return;
    }

    setError('');
    setSuccessMessage('');

    const appointmentData = {
      date: selectedDate,
      time: selectedSlot,
    };

    try {
      const docRef = await addDoc(collection(db, 'PatientAppointments'), appointmentData);
      console.log('Appointment booked with ID: ', docRef.id);
      setSuccessMessage('Appointment booked successfully!');

      setSelectedSlot('');
    } catch (error) {
      console.error('Error booking appointment: ', error);
      setError('Could not book appointment. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-teal-100">Book an Appointment</h1>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Available Time Slots</label>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              required
            >
              <option value="">Select a time slot</option>
              {availableSlots.length > 0 ? (
                availableSlots.map(slot => (
                  <option key={slot.id} value={slot.time}>
                    {slot.time}
                  </option>
                ))
              ) : (
                <option value="" disabled>No available slots for this date</option>
              )}
            </select>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientAppointment;
