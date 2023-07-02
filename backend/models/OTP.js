const mongoose = require("mongoose");
const sendVerificationEmail = require("../utils/verificationEmail");

const otpSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 60 * 1,
    },

});

otpSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
})

const OTP = mongoose.model("OTP", otpSchema);

module.exports = OTP;