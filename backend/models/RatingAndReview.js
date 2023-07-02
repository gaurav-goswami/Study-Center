const mongoose = require("mongoose");

const ratingAndReviewSchema = new mongoose.Schema({

    courseId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course",
        required : true
    },

    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    rating : {
        type : Number,
        required : true
    },

    review : {
        type : String,
        required : true,
        trim : true
    }

});

const RatingAndReview = mongoose.model('RatingAndReview' , ratingAndReviewSchema);

module.exports = RatingAndReview;