import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required:true ,
        },
        state: {
            type: String,
            required:true ,
        },
        address: {
            type: String,
            required:true ,
        },
        counsellingCount: {
            type: Number,
            default: 1 ,
        },
        remark: {
            type: String,
            required:true ,
        },
        activityStatus: {
            type: String,
            required:true ,
        },
        kendra : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },

    },
    {
        timestamps: true,
    });


const Patient = mongoose.model("Patient", patientSchema);

export default Patient;