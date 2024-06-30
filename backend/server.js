const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());

// Parse JSON request bodies
app.use(express.json());
// Connect to MongoDB (you can change the connection string as needed)
mongoose.connect('mongodb+srv://disharai2:disharai*2@cluster0.z7064tm.mongodb.net/').then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err);
})

// Create a MongoDB schema and model
const PatientSchema = new mongoose.Schema({
  name: String,
  disease: String,
  medication: String,
  regularCheckup: Boolean,
});

const Patient = mongoose.model('Patient', PatientSchema);

app.use(express.json());

// Create a POST route to add patient data to MongoDB
app.post('/patients', async (req, res) => {
  try {
    const { name, disease, medication, regularCheckup } = req.body;

    // Create a new patient record
    const patient = new Patient({
      name,
      disease,
      medication,
      regularCheckup,
    });

    // Save the patient record to MongoDB
    await patient.save();

    res.status(201).json({ message: 'Patient record added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});
app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});
app.delete('/patients/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the patient by ID
    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(deletedPatient);
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});
// Update a patient by ID
app.put('/patients/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, disease, medication, regularCheckup } = req.body;

    // Find and update the patient by ID
    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      { name, disease, medication, regularCheckup },
      { new: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(updatedPatient);
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
