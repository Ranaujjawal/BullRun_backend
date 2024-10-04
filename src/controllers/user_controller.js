import { asynchandler } from "../utilities/asynchandler";
import { User } from "../models/user_model";
import { ApiError } from "../utilities/api_error";
const registerUser = asynchandler ( async (req,res)=>{

    // getting data from user 
    // validation checks 
    // check if exist if not send a mail to user by generating otp 
    // save otp to Dp under userid
    // recieves otp from user 
    // if otp matches registeration successful 

    const {fullName,email,password,mobileNumber} = req.body()

    if([fullName,email,password,mobileNumber].some((field) => field?.trim ==="")){
        throw new ApiError(400,"All fields are required")
    }


})