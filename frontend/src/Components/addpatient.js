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
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Disease:</label>
          <input
            type="text"
            name="disease"
            value={patient.disease}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Medication:</label>
          <input
            type="text"
            name="medication"
            value={patient.medication}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Regular Checkup:
            <input
              type="checkbox"
              name="regularCheckup"
              checked={patient.regularCheckup}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatient;
