const Profile = require('../models/Profile');
const User = require('../models/User');
const uploadToCloudinary = require('../utils/cloudinaryUploader');

class ProfileController {

    // update profile

    static updateProfile = async (req, res) => {

        try {

            const { gender, dateOfBirth, about, contactNumber } = req.body;

            const { id } = req.user;

            if (!dateOfBirth || !contactNumber) return res.status(400).json({
                success: false,
                status: 400,
                message: "Fill the necessary details"
            })

            const userDetails = await User.findById(id);
            const profileId = userDetails.additionalDetails;
            const profileDetails = await Profile.findById(profileId);

            profileDetails.dateOfBirth = dateOfBirth;
            profileDetails.gender = gender;
            profileDetails.about = about;
            profileDetails.contactNumber = contactNumber;
            await profileDetails.save();

            return res.status(200).json({
                success: false,
                status: 200,
                message: "Profile updated successfully"
            })


        } catch (error) {
            console.log("Error in update profile", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    static deleteAccount = async (req, res) => {

        try {

            const { accountID } = req.params;

            const userAccount = await User.findById(accountID);

            if (!userAccount) return res.status(404).json({
                success: false,
                status: 404,
                message: "User account not found"
            });

            // delete profile

            await Profile.findByIdAndDelete({ _id: userAccount.additionalDetails });

            // delete user account

            await User.findByIdAndDelete(accountID);

            return res.status(200).json({
                success: true,
                status: 200,
                message: "User account deleted successfully"
            })

        } catch (error) {
            console.log("Error in delete account", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    static getAllUserDetails = async (req, res) => {
        try {
            const id = req.user.id;
            const userDetails = await User.findById(id)
                .populate("additionalDetails")
                .exec();
            console.log(userDetails);
            res.status(200).json({
                success: true,
                message: "User Data fetched successfully",
                data: userDetails,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };

    static updateDisplayPicture = async (req, res) => {
        try {
            const displayPicture = req.files.avatar
            const userId = req.user.id
            const image = await uploadToCloudinary(
                displayPicture,
                process.env.CLOUDINARY_FOLDER_NAME,
                1000,
                1000
            )
            console.log(image)
            const updatedProfile = await User.findByIdAndUpdate(
                { _id: userId },
                { avatar: image.secure_url },
                { new: true }
            )
            res.send({
                success: true,
                message: `Image Updated successfully`,
                data: updatedProfile,
            })
        } catch (error) {
            console.log("error")
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    };

    static getEnrolledCourses = async (req, res) => {
        try {
            const userId = req.user.id
            const userDetails = await User.findOne({
                _id: userId,
            })
                .populate("courses")
                .exec()
            if (!userDetails) {
                return res.status(400).json({
                    success: false,
                    message: `Could not find user with id: ${userDetails}`,
                })
            }
            return res.status(200).json({
                success: true,
                data: userDetails.courses,
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    };

}

module.exports = ProfileController;