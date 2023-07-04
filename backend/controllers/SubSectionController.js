const SubSection = require("../models/SubSection");
const Section = require('../models/Section');
const uploadToCloudinary = require('../utils/cloudinaryUploader');

class SubSectionController {

    // create sub-section 

    static createSubSection = async (req, res) => {

        try {

            const { sectionId, title, description } = req.body;

            const video = req.files.videoFile;

            if (!sectionId || !title || !description) return res.status(400).json({
                success: false,
                status: 400,
                message: "All fields are required"
            })

            // upload video to cloudinary

            let uploadDetails;
            try {

                uploadDetails = await uploadToCloudinary(video, process.env.CLOUDINARY_FOLDER_NAME)

            } catch (error) {
                return res.status(403).json({
                    success: false,
                    status: 403,
                    message: "Something went wrong while uploading the video. Please try again later!"
                })
            }

            const newSubSection = await SubSection.create({ title, timeDuration : uploadDetails.duration, description, videoUrl: uploadDetails.secure_url });

            await Section.findByIdAndUpdate({ _id: sectionId }, { $push: { subSection: newSubSection._id } }, { new: true });

            return res.status(201).json({
                success: true,
                status: 201,
                message: "New sub-section created"
            })

        } catch (error) {
            console.log("Error in create subSection ", error.message);
            return res.status(403).json({
                success: false,
                status: 403,
                message: "Something went wrong. Please try again later"
            })
        }

    }

    // update sub-section

    static updateSubSection = async (req, res) => {
        try {
            const { sectionId, title, description } = req.body
            const subSection = await SubSection.findById(sectionId)

            if (!subSection) {
                return res.status(404).json({
                    success: false,
                    message: "SubSection not found",
                })
            }

            if (title !== undefined) {
                subSection.title = title
            }

            if (description !== undefined) {
                subSection.description = description
            }
            if (req.files && req.files.video !== undefined) {
                const video = req.files.video
                const uploadDetails = await uploadToCloudinary(
                    video,
                    process.env.CLOUDINARY_FOLDER_NAME
                )
                subSection.videoUrl = uploadDetails.secure_url
                subSection.timeDuration = `${uploadDetails.duration}`
            }

            await subSection.save()

            return res.json({
                success: true,
                message: "Section updated successfully",
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                success: false,
                message: "An error occurred while updating the section",
            })
        }
    }

    // delete sub-section

    static deleteSubSection = async (req, res) => {

        try {

            const { subSectionId } = req.params;
            const { sectionId } = req.body;

            if (!subSectionId || !sectionId) return res.status(400).json({
                success: false,
                status: 400,
                message: "Provide all the necessary ID's"
            });

            await SubSection.findByIdAndDelete(subSectionId);

            // delete the subSection id from Section also.

            await Section.findByIdAndUpdate(sectionId, { $pull: { subSection: subSectionId } }, { new: true });

            return res.status(200).json({
                success: true,
                status: 200,
                message: "Sub-section deleted successfully"
            })

        } catch (error) {
            console.log("Error in delete subSection ", error.message);
            return res.status(403).json({
                success: false,
                status: 403,
                message: "Something went wrong. Please try again later"
            })
        }

    }

}

module.exports = SubSectionController;