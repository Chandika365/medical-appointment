import React from 'react';
import { Link } from 'react-router-dom';

function Diseases() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Diseases</h1>
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

export default Diseases;
