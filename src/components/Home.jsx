import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Medical Appointment Scheduling System</h1>
      <input
        type="text"
        placeholder="Search for diseases or doctors..."
        className="border p-2 mb-4 w-full max-w-md"
      />
      <h2 className="text-2xl font-semibold mb-4">Popular Disease Categories</h2>
      <ul className="space-y-2">
        <li><Link to="/diseases/1" className="text-blue-500 hover:underline">Cardiovascular Diseases</Link></li>
        <li><Link to="/diseases/2" className="text-blue-500 hover:underline">Respiratory Diseases</Link></li>
        <li><Link to="/diseases/3" className="text-blue-500 hover:underline">Neurological Disorders</Link></li>
        <li><Link to="/diseases/4" className="text-blue-500 hover:underline">Gastrointestinal Diseases</Link></li>
        <li><Link to="/diseases/5" className="text-blue-500 hover:underline">Mental Health Disorders</Link></li>
      </ul>
    </div>
  );
}

export default Home;
