import React from 'react';
import { useParams } from 'react-router-dom';

function DoctorProfile() {
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Doctor Profile for ID: {id}</h1>
      <p className="mb-4">Doctor's name, specialty, and qualifications...</p>
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Date:</label>
          <input type="date" name="date" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-2">Time:</label>
          <input type="time" name="time" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-2">Patient Name:</label>
          <input type="text" name="patientName" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Book Appointment</button>
      </form>
    </div>
  );
}

export default DoctorProfile;
