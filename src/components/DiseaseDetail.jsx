import React from 'react';
import { Link, useParams } from 'react-router-dom';

function DiseaseDetail() {
  const { id } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Disease Detail for ID: {id}</h1>
      <p className="mb-4">Detailed information about the disease...</p>
      <h2 className="text-2xl font-semibold mb-2">Available Doctors</h2>
      <ul className="space-y-2">
        <li><Link to="/doctors/1" className="text-blue-500 hover:underline">Dr. John Doe - Cardiologist</Link></li>
        <li><Link to="/doctors/2" className="text-blue-500 hover:underline">Dr. Jane Smith - Neurologist</Link></li>
      </ul>
    </div>
  );
}

export default DiseaseDetail;
