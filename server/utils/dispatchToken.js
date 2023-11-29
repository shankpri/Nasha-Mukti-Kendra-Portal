import jwt from "jsonwebtoken";

export const dispatchJsonToken =(user,statusCode,res)=>{
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE
    })
    res
        .status(201)
        .json({
            message:"Successfully Achieved",
            token:token,
            userRole:user.role,
        });
}