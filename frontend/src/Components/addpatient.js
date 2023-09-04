import React, { useState } from 'react';
import axios from 'axios';

function AddPatient() {
  const [patient, setPatient] = useState({
    name: '',
    disease: '',
    medication: '',
    regularCheckup: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend to add the patient
      const response = await axios.post('http://localhost:3001/patients', patient);
      console.log('Patient added:', response.data);

      // Clear the form after successfully adding the patient
      setPatient({
        name: '',
        disease: '',
        medication: '',
        regularCheckup: false,
      });
    } catch (error) {
      console.error('Error adding patient:', error);
      alert('An error occurred while adding the patient');
    }
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Disease:</label>
          <input
            type="text"
            name="disease"
            value={patient.disease}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Medication:</label>
          <input
            type="text"
            name="medication"
            value={patient.medication}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
            Regular Checkup: &nbsp;&nbsp;
            <input
              type="checkbox"
              name="regularCheckup"
              checked={patient.regularCheckup}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatient;
