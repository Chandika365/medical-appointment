import React from 'react';

function MyAppointments() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Appointments</h1>
      <ul className="space-y-2">
        <li>Appointment with Dr. John Doe on 2024-08-30 at 10:00 AM</li>
        <li>Appointment with Dr. Jane Smith on 2024-09-02 at 2:00 PM</li>
      </ul>
    </div>
  );
}

export default MyAppointments;
