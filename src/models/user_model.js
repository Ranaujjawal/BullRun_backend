import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({

    fullName : {
        type:  String,
        required : true
    },
    email: {
        type:  String,
        unique : true,
        indexing : true,
        required : true
    },
    mobileNumber : {
        type:  Number,
        unique : true,
        indexing : true,
        required : true
    },
    password : {
        type:  String,
        required : true
    },
    refreshToken :{
        type : String,
    },
    wallet : [
        {
            contestId : mongoose.Schema.Types.ObjectId,
            ref : "Wallet", 
        }
    ],
    realMoney:{
        type: Number,
        default: 0
    }
},{timestamps : true})

export const  User = mongoose.model('User', userSchema)