const User = require('../models/User');
const OTP = require('../models/OTP');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');
const mailSender = require('../utils/mailSender');
const Profile = require('../models/Profile');
const crypto = require('crypto');


class AuthController {

    // send OTP

    static sendOtp = async (req, res) => {

        try {

            const { email } = req.body;

            // check if the user already exists
            const userExists = await User.findOne({ email });

            if (userExists) return res.status(401).json({
                success: false,
                status: 401,
                message: "User already registered 🤨"
            })

            // if user does not exists , then generate otp

            const otpOptions = {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
                digits: true
            }

            let otp = otpGenerator.generate(6, otpOptions);

            // check if the otp is unique or not
            let otpExists = await OTP.findOne({ otp: otp });

            while (otpExists) {
                otp = otpGenerator.generate(6, otpOptions);
                otpExists = await OTP.findOne({ otp: otp })
            }

            await OTP.create({ email, otp });

            return res.status(200).json({ success: true, status: 200, message: "OTP sent successfully 😄" });

        } catch (error) {

            console.log("error in sendOtp", error.message);
            return res.status(500).json({
                success: false,
                message: "Internal server error 😣"
            })

        }

    }

    // signUp

    static signUp = async (req, res) => {

        try {

            const { firstName, lastName, email, phoneNumber, password, confirmPassword, accountType, otp } = req.body;

            if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
                return res.status(403).json({ success: false, status: 403, message: "All fields are required 🙂" });
            }

            if (password !== confirmPassword) {
                return res.status(400).json({ success: false, status: 400, message: "Password and confirm password must be same 🙂" })
            }

            // check if the user already exists

            let user = await User.findOne({ email });
            if (user) return res.status(400).json({ success: false, status: 400, message: "User is already registered 🙂" })


            const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
            console.log("recent otp", recentOtp);

            // validate otp

            console.log(otp, recentOtp[0].otp);

            if (recentOtp.length === 0) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: "OTP not found"
                })
            } else if (otp !== recentOtp[0].otp) {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "OTP did not match"
                })
            }

            // Hash the password

            let hashedPassword;

            try {

                let genSalt = await bcrypt.genSalt(Number(process.env.GEN_SALT));
                hashedPassword = await bcrypt.hash(password, genSalt);

            } catch (error) {

                console.log("Error while hashing password", error.message);
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: "Something went wrong! Please try again later. Thank you"
                })

            }

            const profileDetails = await Profile.create({
                gender: null,
                dateOfBirth: null,
                about: null,
                contactNumber: null,
            });

            user = await User.create({ firstName, lastName, email, phoneNumber, password: hashedPassword, confirmPassword: hashedPassword, accountType, avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`, additionalDetails: profileDetails._id, });

            return res.status(201).json({
                success: true,
                status: 201,
                message: "User created successfully 😃🚀"
            })

        } catch (error) {
            console.log("error in signup", error.message);
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }

    }

    // Login

    static login = async (req, res) => {
        try {

            const { email, password } = req.body;

            if (!email || !password) return res.status(403).json({
                success: false, status: 403, message: "All fields are required"
            });

            let user = await User.findOne({ email }).select("+password");

            if (!user) return res.status(400).json({
                success: false,
                status: 400,
                message: "User is not registered"
            })

            // if user exists then create a jwt token and add user details in the payload of the token.

            if (user && await bcrypt.compare(password, user.password)) {

                const payload = {
                    id: user._id,
                    email: user.email,
                    role: user.accountType
                }

                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: "3d",
                });

                // setting the jwt token in cookie for authentication

                const cookieOptions = {
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }

                res.cookie("token", token, cookieOptions);

                return res.status(200).json({
                    success: true,
                    status: 200,
                    message: "Logged In 🚀",
                    role : user.accountType,
                    token,
                    user : {
                        firstName : user.firstName,
                        lastName : user.lastName,
                        email : user.email,
                        profile : user.avatar,
                    }
                })

            }
            else {
                return res.status(401).json({
                    success: false,
                    status: 401,
                    message: "Invalid credentials"
                })
            }

        } catch (error) {
            console.log("Error in login", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    // change password

    static changePassword = async (req, res) => {

        try {

            const { currentPassword, newPassword, confirmNewPassword } = req.body;

            if (!currentPassword || !newPassword || !confirmNewPassword) return res.status(403).json({
                success: false,
                status: 403,
                message: "All fields are required"
            })

            // The change password feature will only work if the user is logged in, so a middleware will be used to check that if the user is logged in or not for some requests.

            const { email } = req.user;

            let user = await User.findOne({ email }).select("+ password");

            if (await bcrypt.compare(currentPassword, user.password)) {

                if (newPassword !== confirmNewPassword) {
                    return res.status(400).json({
                        success: false,
                        status: 400,
                        message: "New password and confirm new password field must be same"
                    })
                }

                // if the newPassword and confirmNewPassword are same, then hash the new password and update the existing password field and send an email to the user.

                let hashedPassword;

                try {

                    let genSalt = await bcrypt.genSalt(Number(process.env.GEN_SALT));
                    hashedPassword = await bcrypt.hash(newPassword, genSalt);

                } catch (error) {
                    console.log("Error while hashing password", error.message);
                    return res.status(500).json({
                        success: false,
                        status: 500,
                        message: "Something went wrong! Please try again later. Thank you"
                    })
                }

                await User.updateOne({ email }, { $set: { password: hashedPassword, confirmPassword: hashedPassword } }, { new: true });

                try {
                    await mailSender(email, "You have changed your password 🔑");
                    console.log("change password mail sent successfully")

                } catch (error) {
                    console.log("something went wrong while sending change password mail")
                }

                return res.status(200).json({
                    success: true,
                    status: 200,
                    message: "Password changed successfully"
                })

            }
            else {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "Current password is incorrect"
                })
            }


        } catch (error) {
            console.log("Error in change password", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    // reset password token

    static resetPasswordToken = async (req, res) => {

        try {

            const { email } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "User is not registered"
                })
            }

            const token = crypto.randomBytes(24).toString("hex");

            // hash the token
            const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

            const updatedDetails = await User.findOneAndUpdate(
                { email }, { token: hashedToken, resetPasswordExpires: Date.now() + 1000 * 60 * 15 }, { new: true }
            );

            const url = `${process.env.CLIENT_URL}/reset-password/${hashedToken}`;

            await mailSender(email, "Password Reset",`Your Link for email verification is ${url}. Please click this url to reset your password. Remember that this link will expire in 15 minutes`)

            return res.status(200).json({
                success: true,
                status: 200,
                message: "Password reset link sent successfully",
                url,
                updatedDetails
            })

        } catch (error) {
            console.log("error in reset password token", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    // reset password

    static resetPassword = async (req, res) => {

        try {

            const {resetPasswordToken, newPassword, confirmNewPassword} = req.body;

            if (newPassword !== confirmNewPassword) {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "New password and confirm new password must be same"
                })
            }

            let user = await User.findOne({token : resetPasswordToken});

            if(!user) return res.status(400).json({
                success : false,
                status : 400,
                message : "Invalid token"
            })

            if(user.resetPasswordExpires < Date.now()) return res.status(400).json({
                success : false,
                status : 400,
                message : "The link is expired. Please request a new link to reset the password"
            })
            
            // hashing the new password and updating the entry in db.

            let hashedPassword;

            try {

                let genSalt = await bcrypt.genSalt(Number(process.env.GEN_SALT));
                hashedPassword = await bcrypt.hash(newPassword, genSalt);

            } catch (error) {

                console.log("Error while hashing password", error.message);
                return res.status(403).json({
                    success: false,
                    status: 403,
                    message: "Something went wrong."
                })
            }

            user = await User.findOneAndUpdate({ token : resetPasswordToken }, { $set: { password: hashedPassword, confirmPassword: hashedPassword } }, {token : null , resetPasswordExpires : null} , { new: true });


            return res.status(200).json({
                success: true,
                status: 200,
                message: "Password reset successfully"
            })

        } catch (error) {
            console.log("Error in reset password", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }
    }

}

module.exports = AuthController;