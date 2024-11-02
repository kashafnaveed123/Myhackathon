import React, { useEffect, useState } from 'react';
import { db } from "../config/firebase"; // Import Firebase config
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"; // Firestore functions

function Profile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecentUsers = async () => {
      try {
        const recentUsers = [];

        // Fetch recent doctors
        const doctorsQuery = query(
          collection(db, 'doctor'),
          orderBy('createdAt', 'desc'),
          limit(5) // Adjust the limit as needed
        );
        const doctorSnapshot = await getDocs(doctorsQuery);
        doctorSnapshot.forEach(doc => {
          recentUsers.push({ id: doc.id, userType: 'doctor', ...doc.data() });
        });

        // Fetch recent patients
        const patientsQuery = query(
          collection(db, 'patient'),
          orderBy('createdAt', 'desc'),
          limit(5) // Adjust the limit as needed
        );
        const patientSnapshot = await getDocs(patientsQuery);
        patientSnapshot.forEach(doc => {
          recentUsers.push({ id: doc.id, userType: 'patient', ...doc.data() });
        });

        // Sort by createdAt to ensure the overall recent order
        recentUsers.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
        setUsers(recentUsers);
      } catch (error) {
        console.error("Error fetching user data: ", error);
        setError("Error fetching user data.");
      }
      setLoading(false);
    };

    fetchRecentUsers();
  }, []);

  if (loading) {
    return <div className="text-center text-teal-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-900 p-6">
      <div className="w-full max-w-lg p-8 space-y-6 bg-teal-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-teal-100">Recent Profiles</h1>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="p-4 mb-4 bg-teal-700 rounded-lg shadow">
              <h2 className="text-2xl text-teal-100 mb-2">{user.name || 'No Name Provided'}</h2>
              <div className="flex flex-col text-teal-200 space-y-1">
                {user.profilePic && (
                  <img
                    src={user.profilePic}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mb-4 self-center"
                  />
                )}
                <p><strong>Email:</strong> {user.email || 'No Email Provided'}</p>
                <p><strong>Phone:</strong> {user.phone || 'No Phone Provided'}</p>
                <p><strong>Address:</strong> {user.address || 'No Address Provided'}</p>
                
                {user.userType === 'doctor' ? (
                  <p><strong>Specialty:</strong> {user.specialty || 'No Specialty Provided'}</p>
                ) : (
                  <p><strong>Medical History:</strong> {user.medicalHistory || 'No Medical History Provided'}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-teal-200">No recent user data available.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
