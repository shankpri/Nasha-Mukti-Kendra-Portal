import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorhandler.js";
import {dispatchJsonToken} from "../utils/dispatchToken.js";

export const createUser = async (req, res,next) => {
    try {
        const { name, email,city,state, address} = req.body;
        const password = await bcrypt.hash(req.body.password,6);
        const user = await User.create({ name:name, email:email, city:city, state:state, address:address, password:password });
        dispatchJsonToken(user,201,res);

    } catch (error) {
        console.log(error);
        next(error)
    }
};
export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            return next(new ErrorHandler(404, "User Not Found"))
        }
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return next(new ErrorHandler(401, "Invalid Credentials"))
        }
        //Generating and Sending Token

        dispatchJsonToken(user,201,res);
    }catch (error){
        next(error);
    }
};

export const logout = async (req, res, next) => {
    try {
        res
            .cookie("token",null,{
                expires: new Date(Date.now()),
                httpOnly:true,
            });

        res
            .status(200)
            .json({
                message:"Logout"
            })

    } catch (error){
        next(error);
    }
};