const RatingAndReview = require('../models/RatingAndReview');
const Course = require('../models/Course');

class RatingAndReviewController {

    // create rating and review

    static createRatingAndReview = async (req, res) => {

        try {

            const { courseId, rating, review } = req.body;
            const { id } = req.user;

            if (!courseId || !rating || !review) return res.status(400).json({
                success: false,
                status: 400,
                message: "Please provide all the necessary information"
            })

            const courseDetails = await Course.findOne({ _id: courseId, studentEnrolled: { $elemMatch: { $eq: id } } });

            if (!courseDetails) return res.status(400).json({
                success: false,
                status: 400,
                message: "User is not enrolled in this course"
            })

            const isAlreadyReviewed = await RatingAndReview.findOne({ studentId: id, courseId });
            if (isAlreadyReviewed) return res.status(400).json({
                success: false,
                status: 400,
                message: "You have already reviewed this course."
            })

            const ratingAndReview = await RatingAndReview.create({ rating, review, courseId, studentId: id });

            // push the review in the course 

            await Course.findByIdAndUpdate({ _id: courseId }, { $push: { reviewsAndRatings: ratingAndReview._id } }, { new: true });

            return res.status(201).json({
                success: true,
                status: 201,
                message: "Review added successfully.",
                ratingAndReview
            })


        } catch (error) {
            console.log("error in create rating and review", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message
            })
        }

    }

    // get ratings and reviews (couese specific)

    static getRatingAndReviews = async (req, res) => {

        try {

            const { courseId } = req.params;

            const courseDetails = await Course.find({ _id: courseId });
            if (!courseDetails) return res.status(404).json({
                success: false,
                status: 404,
                message: "Course not found"
            });

            const ratingAndReviews = await RatingAndReview.find({ courseId }).sort({ rating: "desc" }).populate({
                path: "studentId",
                select: "firstName lastName"
            }).populate({
                path: "course",
                select: "courseName"
            }).exec();

            if (!ratingAndReviews) return res.status(400).json({
                success: false,
                status: 400,
                message: "No ratings or reviews"
            })

            return res.status(200).json({
                success: true,
                status: 200,
                message: "Ratings and Reviews fetched",
                totalReviews: ratingAndReviews.length,
                ratingAndReviews
            })

        } catch (error) {
            console.log("error in getAllRatingAndReviews", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }

    }

    // get all ratings and reviews

    static getAllRatingAndReviews = async (req, res) => {
        try {

            const allReviews = await RatingAndReview.find({}).sort({ rating: "desc" }).populate({
                path: "studentId",
                select: "firstName lastName"
            }).populate({
                path: "course",
                select: "courseName"
            }).exec();

            return res.status(200).json({
                success : true,
                status : 200,
                message : "Review and Ratings fetched",
                allReviews
            })

        } catch (error) {
            console.log(error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message
            })
        }
    }


    // get average rating and reviews

    static getAverageRatings = async (req, res) => {
        try {

            const { courseId } = req.params;

            const result = await RatingAndReview.aggregate([
                {
                    $match: {
                        course: new mongoose.Schema.Types.ObjectId(courseId) // course id is in string this will convert it into ObjectID
                    }
                },
                { $group: { _id: null, averageRating: { $avg: "$rating" } } }
            ])

            if (result.length > 0) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    averageRating: result[0].averageRating
                })
            }

            return res.status(200).json({
                success: true,
                status: 200,
                message: "Average rating is 0",

            })


        } catch (error) {
            console.log("error in average ratings", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }
    }
}

module.exports = RatingAndReviewController;