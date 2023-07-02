const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName : {
        type : String,
        trim : true
    },
    courseDescription : {
        type : String,
        trim : true
    },
    instructor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    whatYouWillLearn : {
        type : String,
        required : true,
        trim : true
    },
    courseContent : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Section"
        }
    ],
    reviewsAndRatings : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "RatingAndReview"
        }
    ],
    price : {
        type : Number,
        required : true,
    },
    thumbnail : {
        type : String,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    tag : {
        type : String,
        required : true
    }, 
    studentEnrolled : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        // required : true
    }],
    instructions : {
        type : String
    },
    status : {
        type : String,
        enum : ["Draft" , "Published"],
        default : "Draft"
    }

});

const Course = mongoose.model("Course" , courseSchema);

module.exports = Course;