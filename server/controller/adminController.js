import ErrorHandler from "../utils/errorhandler.js";
import User from "../models/userModel.js";
import Patient from "../models/patientModel.js";

export const getAllUser = async (req,res,next) => {
    try {
        const users = await User.find({_id:{$ne: req.user.id}});
        if (!users) {
            return next(new ErrorHandler(404, "Patient Doesn't Exist"));
        }
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}

export const getAllPatient = async (req,res,next) => {
    try {
        const patients = await Patient.find();
        if (!patients) {
            return next(new ErrorHandler(404, "Patient Doesn't Exist"));
        }
        res.status(200).json(patients);
    } catch (error) {
        next(error)
    }
}

export const approveUser = async (req,res,next) => {
    try {
        const id=req.params.id;
        const role="user";
        await User.findByIdAndUpdate(id, {role:role});
        res.status(200).json({message:"Centre Approved"});
    } catch (error) {
        next(error)
    }
}