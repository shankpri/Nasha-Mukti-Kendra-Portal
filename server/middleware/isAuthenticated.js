import Errorhandler from "../utils/errorhandler.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
export const isAuthenticated = async (req,res,next) => {
    try {
        const token =req.headers.authorization.split(' ')[1];
        console.log(token);
        if(!token){
            return next(new Errorhandler(401,"Login Required"));
        }
        const decodedData= await jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.user = await User.findById(decodedData.id);

        next();
    } catch (error) {
        next(error);
    }
};

export const isAuthorized = (...roles) => {

    return (req, res, next) => {
        try {
            if (!roles.includes(req.user.role)) {
                return next(new Errorhandler(401, "Access Denied not Authorized"));
            }
            next();
        } catch (error) {
            next(error)
        }
    }
}

