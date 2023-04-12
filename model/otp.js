const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
    user_id : {
        type : String,
        required : true
    },
    otp : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date,
        expires: '5m',
        default: Date.now
    }
})

const Otp = mongoose.model("Otp", OtpSchema);

module.exports = Otp;