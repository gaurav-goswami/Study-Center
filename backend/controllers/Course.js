const Course = require('../models/Course');
const User = require('../models/User');
const Category = require('../models/Category');
const uploadToCloudinary = require('../utils/cloudinaryUploader');

class CourseController {

    // create course

    static createCourse = async (req, res) => {

        try {

            const { courseName, courseDescription, whatYouWillLearn, price, category, tag, draft } = req.body;

            console.log(category);

            // extract the thumbnail
            const thumbnail = req.files.thumbnailImage;

            if (!courseName || !courseDescription || !whatYouWillLearn || !price || !category || !thumbnail || !tag) {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "All fields are required"
                })
            }

            // validate the category

            const validCategory = await Category.findById({ _id : category });

            if (!validCategory) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: "Category not found"
                })
            }

            // upload thumbnail to cloudinary

            let thumbnailImage;
            try {

                thumbnailImage = await uploadToCloudinary(thumbnail, process.env.CLOUDINARY_FOLDER_NAME)

            } catch (error) {
                console.log(error);
                return res.status(403).json({
                    success: false,
                    status: 403,
                    message: "Something went wrong while uploading thumbnail. Please try again later!"
                })
            }

            // create an entry for course

            const newCourse = await Course.create({ courseName, courseDescription, instructor: req.user.id, whatYouWillLearn, price, category : validCategory._id, tag , thumbnail: thumbnailImage.secure_url, draft });

            // add the course in the instructor's field

            await User.findByIdAndUpdate({ _id: req.user.id }, { $push: { courses: newCourse._id } }, { new: true });

            // update category schema

            await Category.findByIdAndUpdate({ _id: category }, { $push: { course: newCourse._id } }, { new: true });

            return res.status(201).json({
                success: true,
                status: 201,
                message: "Course created successfully"
            })

        } catch (error) {
            console.log("Error in create course", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message
            })
        }

    }

    
    // get all course

    static getAllCourses = async (req, res) => {

        try {

            const courses = await Course.find({}).populate('instructor').populate({
                path : "courseContent",
                populate : {
                    path : "subSection"
                },
            });

            if(!courses) return res.status(400).json({
                success : false,
                status : 400,
                message : "No courses found"
            });

            return res.status(200).json({
                success : true,
                status : 200,
                message : "Courses fetched",
                enrolledStudents : courses.enrolledStudents?.length,
                totalCourse : courses.length,
                courses
            })

        } catch (error) {
            console.log("Error in get all course", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message
            })
        }

    }

    static getCourseDetails = async (req, res) => {

        try {

            const {courseID} = req.params;

            const course = await Course.find({_id: courseID}).populate(
                {
                    path : "instructor",
                    populate : {
                        path : "additionalDetails",
                    }
                }
            )
            .populate("category")
            .populate("reviewsAndRatings")
            .populate({
                path : "courseContent",
                populate : {
                    path : "subSection"
                },
            }).exec();

            if(!course) return res.status(404).json({
                success : false,
                status : 404,
                message : "Course not found"
            });

            return res.status(200).json({
                success : true,
                status : 200,
                message : "Course fetched",
                course
            })
            
        } catch (error) {
            console.log("error in getCourseDetails" , error.message);
            return res.status(500).json({
                success : false,
                status : 500,
                message : error.message
            })
        }

    }
}


module.exports = CourseController;