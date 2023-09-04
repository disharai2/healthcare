const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (you can change the connection string as needed)
mongoose.connect('mongodb+srv://shannon:pereira@cluster0.8y3ievi.mongodb.net/TaskManager').then(()=>{
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
