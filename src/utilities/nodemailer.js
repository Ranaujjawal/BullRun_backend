import nodemailer from "nodemailer"
import { asynchandler } from "./asynchandler";
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  const sendMail = asynchandler( async (email,otp) =>{
     try {
      await transporter.sendMail({
       from: '"Ujjawal Rana" <ranaujjawal692@gmail.com>', // sender address
       to: email, // list of receivers
       subject: "otp for registration", // Subject line
       text: "Hi, Thank you for registring with us your OTP for registeration is :" + otp, 
     });
 
     } catch (e) {
      console.log("error sending otp try after sometime ")
     }
  })
  export {sendMail}