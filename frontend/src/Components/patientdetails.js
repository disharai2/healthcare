import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap'; // Import React Bootstrap components
import { useAuth0 } from '@auth0/auth0-react';
function PatientDetails() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false); // Initialize modal state
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:3001/patients')
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  const handleDelete = async (patientId) => {
    try {
      // Send a DELETE request to the backend to delete the patient
      await axios.delete(`http://localhost:3001/patients/${patientId}`);
      
      // Update the state to remove the deleted patient
      setPatients((prevPatients) => prevPatients.filter((patient) => patient._id !== patientId));
    } catch (error) {
      console.error('Error deleting patient:', error);
      alert('An error occurred while deleting the patient');
    }
  };

  const handleEdit = (patientId) => {
    const selected = patients.find((patient) => patient._id === patientId);
    setSelectedPatient(selected);
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update the patient data
      const response = await axios.put(`http://localhost:3001/patients/${selectedPatient._id}`, selectedPatient);
      const updatedPatient = response.data;

      // Update the state with the updated patient data
      setPatients((prevPatients) =>
        prevPatients.map((patient) =>
          patient._id === updatedPatient._id ? updatedPatient : patient
        )
      );

      // Close the modal
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating patient:', error);
      alert('An error occurred while updating the patient');
    }
  };

  return (
    <div>
      <h2>All Patients</h2>
      <div className="row">
        {patients.map((patient) => (
          <div className="col-md-4 mb-3" key={patient._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{patient.name}</h5>
                <p className="card-text">
                  <strong>Disease:</strong> {patient.disease}<br />
                  <strong>Medication:</strong> {patient.medication}<br />
                  <strong>Regular Checkup:</strong> {patient.regularCheckup ? 'Yes' : 'No'}
                </p>
                
                  {isAuthenticated && (
                  <>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleDelete(patient._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => handleEdit(patient._id)}
                    >
                      Edit
                    </button>
                  </>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Patient Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={selectedPatient?.name}
                onChange={(e) => setSelectedPatient({ ...selectedPatient, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Disease</Form.Label>
              <Form.Control
                type="text"
                name="disease"
                value={selectedPatient?.disease}
                onChange={(e) => setSelectedPatient({ ...selectedPatient, disease: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Medication</Form.Label>
              <Form.Control
                type="text"
                name="medication"
                value={selectedPatient?.medication}
                onChange={(e) => setSelectedPatient({ ...selectedPatient, medication: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Regular Checkup</Form.Label>
              <Form.Check
                type="checkbox"
                name="regularCheckup"
                checked={selectedPatient?.regularCheckup}
                onChange={(e) => setSelectedPatient({ ...selectedPatient, regularCheckup: e.target.checked })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PatientDetails;
