import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({

    userID : {
        type: String,
        required : true
    },
    contestID : {
        type: String,
        required : true
    },
    virtualMoney : {
        type: Number
    }

},{timestamps: true})

export const Wallet = mongoose.model("Wallet",walletSchema)