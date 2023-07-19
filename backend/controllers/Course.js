const Course = require('../models/Course');
const User = require('../models/User');
const Category = require('../models/Category');
const uploadToCloudinary = require('../utils/cloudinaryUploader');
const { convertSecondsToDuration } = require('../utils/secondToDuration');

class CourseController {

    // create course

    static createCourse = async (req, res) => {

        try {

            const { courseName, courseDescription, whatYouWillLearn, price, category, tag, draft } = req.body;

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

            const validCategory = await Category.findById({ _id: category });

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

            const newCourse = await Course.create({ courseName, courseDescription, instructor: req.user.id, whatYouWillLearn, price, category: validCategory._id, tag, thumbnail: thumbnailImage.secure_url, draft });

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

    // edit course
    static editCourse = async (req, res) => {
        try {
            const { courseId } = req.body
            const updates = req.body
            const course = await Course.findById(courseId)

            if (!course) {
                return res.status(404).json({ error: "Course not found" })
            }

            // If Thumbnail Image is found, update it
            if (req.files) {
                console.log("thumbnail update")
                const thumbnail = req.files.thumbnailImage
                const thumbnailImage = await uploadImageToCloudinary(
                    thumbnail,
                    process.env.FOLDER_NAME
                )
                course.thumbnail = thumbnailImage.secure_url
            }

            // Update only the fields that are present in the request body
            for (const key in updates) {
                if (updates.hasOwnProperty(key)) {
                    if (key === "tag" || key === "instructions") {
                        course[key] = JSON.parse(updates[key])
                    } else {
                        course[key] = updates[key]
                    }
                }
            }

            await course.save()

            const updatedCourse = await Course.findOne({
                _id: courseId,
            })
                .populate({
                    path: "instructor",
                    populate: {
                        path: "additionalDetails",
                    },
                })
                .populate("category")
                .populate("ratingAndReviews")
                .populate({
                    path: "courseContent",
                    populate: {
                        path: "subSection",
                    },
                })
                .exec()

            res.json({
                success: true,
                message: "Course updated successfully",
                data: updatedCourse,
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            })
        }
    }

    // instructor courses
    static getInstructorCourses = async (req, res) => {
        try {
            // Get the instructor ID from the authenticated user or request body
            const instructorId = req.user.id

            // Find all courses belonging to the instructor
            const instructorCourses = await Course.find({
                instructor: instructorId,
            }).sort({ createdAt: -1 })

            // Return the instructor's courses
            res.status(200).json({
                success: true,
                data: instructorCourses,
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: "Failed to retrieve instructor courses",
                error: error.message,
            })
        }
    }

    static getFullCourseDetails = async (req, res) => {
        try {
            const { courseId } = req.body
            const userId = req.user.id
            const courseDetails = await Course.findOne({
                _id: courseId,
            })
                .populate({
                    path: "instructor",
                    populate: {
                        path: "additionalDetails",
                    },
                })
                .populate("category")
                .populate("ratingAndReviews")
                .populate({
                    path: "courseContent",
                    populate: {
                        path: "subSection",
                    },
                })
                .exec()

            let courseProgressCount = await CourseProgress.findOne({
                courseID: courseId,
                userId: userId,
            })

            console.log("courseProgressCount : ", courseProgressCount)

            if (!courseDetails) {
                return res.status(400).json({
                    success: false,
                    message: `Could not find course with id: ${courseId}`,
                })
            }

            let totalDurationInSeconds = 0
            courseDetails.courseContent.forEach((content) => {
                content.subSection.forEach((subSection) => {
                    const timeDurationInSeconds = parseInt(subSection.timeDuration)
                    totalDurationInSeconds += timeDurationInSeconds
                })
            })

            const totalDuration = convertSecondsToDuration(totalDurationInSeconds)

            return res.status(200).json({
                success: true,
                data: {
                    courseDetails,
                    totalDuration,
                    completedVideos: courseProgressCount?.completedVideos
                        ? courseProgressCount?.completedVideos
                        : [],
                },
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    }


    // delete course
    static deleteCourse = async (req, res) => {
        try {
            const { courseId } = req.body

            // Find the course
            const course = await Course.findById(courseId)
            if (!course) {
                return res.status(404).json({ message: "Course not found" })
            }

            // Unenroll students from the course
            const studentsEnrolled = course.studentsEnroled
            for (const studentId of studentsEnrolled) {
                await User.findByIdAndUpdate(studentId, {
                    $pull: { courses: courseId },
                })
            }

            // Delete sections and sub-sections
            const courseSections = course.courseContent
            for (const sectionId of courseSections) {
                // Delete sub-sections of the section
                const section = await Section.findById(sectionId)
                if (section) {
                    const subSections = section.subSection
                    for (const subSectionId of subSections) {
                        await SubSection.findByIdAndDelete(subSectionId)
                    }
                }

                // Delete the section
                await Section.findByIdAndDelete(sectionId)
            }

            // Delete the course
            await Course.findByIdAndDelete(courseId)

            return res.status(200).json({
                success: true,
                message: "Course deleted successfully",
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                success: false,
                message: "Server error",
                error: error.message,
            })
        }
    }

    // get all course

    static getAllCourses = async (req, res) => {

        try {

            const courses = await Course.find({}).populate('instructor').populate({
                path: "courseContent",
                populate: {
                    path: "subSection"
                },
            });

            if (!courses) return res.status(400).json({
                success: false,
                status: 400,
                message: "No courses found"
            });

            return res.status(200).json({
                success: true,
                status: 200,
                message: "Courses fetched",
                enrolledStudents: courses.enrolledStudents?.length,
                totalCourse: courses.length,
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

            const { courseID } = req.params;

            const course = await Course.find({ _id: courseID }).populate(
                {
                    path: "instructor",
                    populate: {
                        path: "additionalDetails",
                    }
                }
            )
                .populate("category")
                .populate("reviewsAndRatings")
                .populate({
                    path: "courseContent",
                    populate: {
                        path: "subSection"
                    },
                }).exec();

            if (!course) return res.status(404).json({
                success: false,
                status: 404,
                message: "Course not found"
            });

            return res.status(200).json({
                success: true,
                status: 200,
                message: "Course fetched",
                course
            })

        } catch (error) {
            console.log("error in getCourseDetails", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message
            })
        }

    }
}


module.exports = CourseController;