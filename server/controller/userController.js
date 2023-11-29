import Patient from "../models/patientModel.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import ErrorHandler from "../utils/errorhandler.js";


export const addPatient = async (req, res) => {
    try {
        // Extract patient data from the request body
        const {
            name,
            age,
            gender,
            city,
            state,
            address,
            counsellingCount,
            remark,
            activityStatus,
        } = req.body;
        const kendra = req.user.id;

        // Create a new patient instance
        const newPatient = new Patient({
            name,
            age,
            gender,
            city,
            state,
            address,
            counsellingCount,
            remark,
            activityStatus,
            kendra :kendra,
        });

        // Save the patient to the database
        await newPatient.save();

        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add the patient' });
    }
};

export const updatePatient = async (req, res) => {
    try {
        const patientId = req.params.id; // Extract the patient ID from the URL
        const {
            name,
            age,
            gender,
            city,
            state,
            address,
            counsellingCount,
        
            remark,
            activityStatus,
        } = req.body;

        // Find the patient by ID
        const patient = await Patient.findById(patientId);

        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        // Update patient properties
        patient.name = name;
        patient.age = age;
        patient.gender = gender;
        patient.city = city;
        patient.state = state;
        patient.address = address;
        patient.counsellingCount = counsellingCount;
        patient.remark = remark;
        patient.activityStatus = activityStatus;

        // Save the updated patient to the database
        await patient.save();

        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the patient' });
    }
};


export const getCentrePatient = async (req,res,next) => {
    try {
        const patients = await Patient.find({kendra:req.user.id});
        if (!patients) {
            return next(new ErrorHandler(404, "Patient Doesn't Exist"));
        }
        res.status(200).json(patients);
    } catch (error) {
        next(error)
    }
}

