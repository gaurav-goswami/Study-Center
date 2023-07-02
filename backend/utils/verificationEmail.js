const mailSender = require("./mailSender");

const sendVerificationEmail = async (email , otp) => {
    try {

        const mailResponse = await mailSender(email , "Verification Email from Study Center" , otp);
        console.log("Email sent successfully")
        console.log("mail response" , mailResponse);

    } catch (error) {
        console.log("Error while sending mail" , error.message);
        throw error;
    }
}

module.exports = sendVerificationEmail;