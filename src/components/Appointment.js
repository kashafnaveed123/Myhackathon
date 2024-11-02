// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useNavigate } from 'react-router-dom';
// import { db } from '../config/firebase'; // Import your Firebase config
// import { collection, addDoc, updateDoc, getDocs, doc } from 'firebase/firestore';

// const Appointment = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState('09:00AM');
//   const [error, setError] = useState('');
//   const [appointments, setAppointments] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editingId, setEditingId] = useState(null);
  
//   const handleTimeChange = (e) => {
//     setSelectedTime(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedDate || !selectedTime) {
//       setError('Please select both date and time.');
//       return;
//     }

//     setError('');

//     // Convert date and time to strings
//     const formattedDate = selectedDate.toLocaleDateString(); // Format date as string
//     const formattedTime = selectedTime; // Time is already a string

//     const newAppointment = { date: formattedDate, time: formattedTime };

//     if (editingIndex !== null) {
//       // Update existing appointment
//       const updatedAppointments = [...appointments];
//       updatedAppointments[editingIndex] = newAppointment;

//       try {
//         const docRef = doc(db, 'Doctor Appointment', editingId);
//         await updateDoc(docRef, newAppointment);
//         setAppointments(updatedAppointments);
//         setEditingIndex(null);
//         setEditingId(null);
//       } catch (error) {
//         console.error('Error updating appointment: ', error);
//         setError('Could not update appointment. Please try again.');
//       }
//     } else {
//       // Add new appointment
//       try {
//         const docRef = await addDoc(collection(db, 'Doctor Appointment'), newAppointment);
//         setAppointments([...appointments, { id: docRef.id, ...newAppointment }]);
//       } catch (error) {
//         console.error('Error adding appointment: ', error);
//         setError('Could not save appointment. Please try again.');
//       }
//     }

//     // Reset form fields
//     setSelectedDate(new Date());
//     setSelectedTime('09:00AM');
//   };

//   const handleEdit = (index) => {
//     const appointmentToEdit = appointments[index];
//     setSelectedDate(new Date(appointmentToEdit.date)); // Convert string back to Date
//     setSelectedTime(appointmentToEdit.time);
//     setEditingIndex(index);
//     setEditingId(appointmentToEdit.id);
//   };

//   const timeOptions = [
//     '1:00AM', '2:00AM', '3:00AM', '4:00AM', '5:00AM', '6:00AM', 
//     '7:00AM', '8:00AM', '09:00AM', '10:00AM', '11:00AM', '12:00AM', 
//     '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', 
//     '7:00PM', '8:00PM', '09:00PM', '10:00PM', '11:00PM', '12:00PM'
//   ];

//   // Fetch appointments from Firestore on mount
//   useEffect(() => {
//     const fetchAppointments = async () => {
//       const querySnapshot = await getDocs(collection(db, 'Doctor Appointment'));
//       const fetchedAppointments = querySnapshot.docs.map(doc => {
//         const data = doc.data();
//         return {
//           id: doc.id,
//           date: data.date, // Date is stored as string
//           time: data.time, // Time is stored as string
//         };
//       });
//       setAppointments(fetchedAppointments);
//     };

//     fetchAppointments();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-teal-900">
//       <div className="w-full max-w-md p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
//         <h1 className="text-4xl font-bold text-center text-teal-100">Schedule an Appointment</h1>
//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}
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

//           {/* Time Selection */}
//           <div>
//             <label className="block text-lg font-semibold text-teal-100 mb-2">Select Time</label>
//             <select
//               value={selectedTime}
//               onChange={handleTimeChange}
//               className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
//               required
//             >
//               {timeOptions.map((time) => (
//                 <option key={time} value={time}>{time}</option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
//             >
//               {editingIndex !== null ? 'Update Appointment' : 'Schedule Appointment'}
//             </button>
//           </div>
//         </form>

//         {/* Appointments List */}
//         {appointments.length > 0 && (
//           <div className="mt-6">
//             <h2 className="text-lg text-teal-100 mb-2">Scheduled Appointments:</h2>
//             <ul className="space-y-2 text-teal-100">
//               {appointments.map((appointment, index) => (
//                 <li key={appointment.id} className="bg-teal-700 p-3 rounded-lg flex justify-between items-center">
//                   <span>{appointment.date} at {appointment.time}</span>
//                   <div className="flex space-x-2">
//                     <button onClick={() => handleEdit(index)} className="text-yellow-400 hover:underline">Edit</button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Appointment;




import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { db } from '../config/firebase'; // Import your Firebase config
import { collection, addDoc, updateDoc, getDocs, doc } from 'firebase/firestore';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00AM');
  const [error, setError] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      setError('Please select both date and time.');
      return;
    }

    setError('');

    // Convert date and time to strings
    const formattedDate = selectedDate.toLocaleDateString(); // Format date as string
    const formattedTime = selectedTime; // Time is already a string

    const newAppointment = { date: formattedDate, time: formattedTime, booked: true }; // Add booked property

    if (editingIndex !== null) {
      // Update existing appointment
      const updatedAppointments = [...appointments];
      updatedAppointments[editingIndex] = newAppointment;

      try {
        const docRef = doc(db, 'Doctor Appointment', editingId);
        await updateDoc(docRef, newAppointment);
        setAppointments(updatedAppointments);
        setEditingIndex(null);
        setEditingId(null);
      } catch (error) {
        console.error('Error updating appointment: ', error);
        setError('Could not update appointment. Please try again.');
      }
    } else {
      // Add new appointment
      try {
        const docRef = await addDoc(collection(db, 'Doctor Appointment'), newAppointment);
        setAppointments([...appointments, { id: docRef.id, ...newAppointment }]);

        // Save to Patient Appointments collection
        await addDoc(collection(db, 'PatientAppointments'), { ...newAppointment, id: docRef.id });
      } catch (error) {
        console.error('Error adding appointment: ', error);
        setError('Could not save appointment. Please try again.');
      }
    }

    // Reset form fields
    setSelectedDate(new Date());
    setSelectedTime('09:00AM');
  };

  const handleEdit = (index) => {
    const appointmentToEdit = appointments[index];
    setSelectedDate(new Date(appointmentToEdit.date)); // Convert string back to Date
    setSelectedTime(appointmentToEdit.time);
    setEditingIndex(index);
    setEditingId(appointmentToEdit.id);
  };

  const timeOptions = [
    '1:00AM', '2:00AM', '3:00AM', '4:00AM', '5:00AM', '6:00AM', 
    '7:00AM', '8:00AM', '09:00AM', '10:00AM', '11:00AM', '12:00AM', 
    '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', 
    '7:00PM', '8:00PM', '09:00PM', '10:00PM', '11:00PM', '12:00PM'
  ];

  // Fetch appointments from Firestore on mount
  useEffect(() => {
    const fetchAppointments = async () => {
      const querySnapshot = await getDocs(collection(db, 'Doctor Appointment'));
      const fetchedAppointments = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          date: data.date, // Date is stored as string
          time: data.time, // Time is stored as string
          booked: data.booked || false, // Default to false if not present
        };
      });
      setAppointments(fetchedAppointments);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-teal-100">Schedule an Appointment</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Picker */}
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

          {/* Time Selection */}
          <div>
            <label className="block text-lg font-semibold text-teal-100 mb-2">Select Time</label>
            <select
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full p-3 bg-teal-800 border border-teal-500 rounded-lg text-white focus:outline-none focus:border-teal-300"
              required
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 font-semibold transition-colors duration-200"
            >
              {editingIndex !== null ? 'Update Appointment' : 'Schedule Appointment'}
            </button>
          </div>
        </form>

        {/* Appointments List */}
        {appointments.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg text-teal-100 mb-2">Scheduled Appointments:</h2>
            <ul className="space-y-2 text-teal-100">
              {appointments.map((appointment, index) => (
                <li key={appointment.id} className="bg-teal-700 p-3 rounded-lg flex justify-between items-center">
                  <span>{appointment.date} at {appointment.time} - {appointment.booked ? 'Booked' : 'Available'}</span>
                  <div className="flex space-x-2">
                    <button onClick={() => handleEdit(index)} className="text-yellow-400 hover:underline">Edit</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
