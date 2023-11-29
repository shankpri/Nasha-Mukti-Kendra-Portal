import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email:{
            type:String,
            required:true,
        },
        city: {
            type: String,
            required: true,
            unique:false,
        },
        state: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            default:"none" //admin-headadmin  user-nashamukti
        }

    },
    {
        timestamps: true,
    });


const User = mongoose.model("User", userSchema);

export default User;