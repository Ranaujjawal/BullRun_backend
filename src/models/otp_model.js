import mongoose from "mongoose";

const otpSchema = new  mongoose.Schema({
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '6m' } 
    },
    id:{
        type:String,
        required:true
    },
    otp:{
        type : Number,
        required : true
    }
})

export const  OTP = mongoose.model('OTP', otpSchema);

