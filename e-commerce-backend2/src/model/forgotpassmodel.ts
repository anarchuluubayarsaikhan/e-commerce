import { Schema, model } from "mongoose";

const forgotpassSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number, 
        required:true,
        createdAt: {
            type:Date,
            expires: "5m",
            default: Date.now
        }
    }
})
export const OTPModel = model("OTP", forgotpassSchema)