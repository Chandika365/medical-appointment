import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Diseases from './components/Diseases';
import DiseaseDetail from './components/DiseaseDetail';
import DoctorProfile from './components/DoctorProfile';
import MyAppointments from './components/MyAppointments';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Medical Appointment</h1>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/diseases" className="hover:underline">Diseases</Link></li>
              <li><Link to="/my-appointments" className="hover:underline">My Appointments</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/diseases/:id" element={<DiseaseDetail />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          &copy; 2024 Medical Appointment. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
