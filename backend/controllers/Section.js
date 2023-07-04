const Section = require('../models/Section');
const Course = require('../models/Course');

class SectionController {

    // create section 

    static createSection = async (req, res) => {

        try {

            const { sectionName, courseId } = req.body;

            if (!sectionName || !courseId) return res.status(400).json({
                success: false,
                status: 400,
                message: "All fields are required"
            })

            // after creating section update in course

            const section = await Section.create({ sectionName });

            await Course.findByIdAndUpdate(courseId, { $push: { courseContent: section._id } }, { new: true });

            return res.status(201).json({
                success: true,
                status: 201,
                message: "Course section created successfully"
            })


        } catch (error) {
            console.log("error in create section", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    static updateSection = async (req, res) => {

        try {

            const { sectionName, sectionId } = req.body;
            if (!sectionName || !sectionId) return res.status(400).json({
                success: false,
                status: 400,
                message: "All fields are required"
            })

            await Section.findByIdAndUpdate(sectionId, { sectionName }, { new: true });

            return res.status(200).json({
                success: true,
                status: 200,
                message: "Section updated successfully"
            })

        } catch (error) {
            console.log("error in update section", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    static deleteSection = async (req, res) => {
        try {

            const {sectionId} = req.params;
            const {courseId} = req.body;

            if(!courseId) return res.status(400).json({
                success : false,
                status : 400,
                message : "Please provide course ID"
            })

            await Section.findByIdAndDelete(sectionId);

            await Course.findByIdAndUpdate(courseId , { $pull: { courseContent: sectionId } }, { new: true });

            return res.status(200).json({
                success : true,
                status : 200,
                message : "Section Deleted Successfully"
            })

        } catch (error) {
            console.log("error in delete section", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }
    }

}

module.exports = SectionController; 