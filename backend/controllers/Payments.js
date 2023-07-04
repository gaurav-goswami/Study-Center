const { instance } = require('../utils/razorpay');
const Course = require('../models/Course');
const User = require('../models/User');
const mailSender = require('../utils/mailSender');
const { default: mongoose } = require('mongoose');

// capture the payment
exports.capturePayment = async (req, res) => {

    const { course_id } = req.body;
    const { id } = req.user;

    if (!course_id) return res.status(400).json({
        success: false,
        status: 400,
        message: "Please provide course ID"
    })

    let course;

    try {

        course = await Course.findById(course_id);
        if (!course) return res.status(404).json({
            success: false,
            status: 404,
            message: "Course not found"
        })

        const userID = new mongoose.Schema.Types.ObjectId(id);

        if (course.studentEnrolled.includes(userID)) return res.status(400).json({
            success: false,
            status: 400,
            message: "Student already enrolled"
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: 500,
            status: 500,
            message: error.message
        })
    }

    // create order

    const amount = course.price;
    const currency = "INR";

    const options = {
        amount: amount * 100,
        currency,
        receipt: Math.random(Date.now().toString),
        notes: {
            courseID: course_id,
            user_id: id
        }
    }

    try {

        // initiate the payment

        const paymentResponse = await instance.orders.create(options);
        console.log(paymentResponse);

        return res.status(200).json({
            success : true, 
            status : 200,
            courseName : course.courseName,
            courseDescription : course.courseDescription,
            courseThumbnail : course.thumbnail,
            order_id : paymentResponse.id,
            currency : paymentResponse.currency,
            amount : paymentResponse.amount,
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: 500,
            status: 500,
            message: error.message
        })
    }

}

// signature verification razor pay

exports.verifySignature = async (req, res) => {

    const webhookSecret = "1234567890";

    const signature = req.headers["x-razorpay-signature"];
    
    const shasum = crypto.createHmac("sha256" , webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if(signature === digest){
        console.log("Payment is Authorized");

        const {courseID , user_id} = req.body.payload.payment.entity.notes;
        
        try {
            
            const enrolledCourse = await Course.findOneAndUpdate({_id : courseID} , {$push : {studentEnrolled : user_id}} , {new : true});
            
            if(!enrolledCourse) return res.status(404).json({
                success : false,
                status : 404,
                message : "Course not found"
            });

            const enrollStudent = await User.findOneAndUpdate({_id : user_id} , {$push : {courses : courseID}} , {new : true});
            console.log("enroll student" , enrollStudent);

            const emailResponse = await mailSender(enrollStudent.email , "New Course Purchased" , `Thank you for purchasing ${enrolledCourse.courseName}`);

            console.log("email response" , emailResponse);

            return res.status(200).json({
                success : true,
                status : 200,
                message : "Payment Successfull"
            })

        } catch (error) {
            console.log(error.message);
            return res.status(500).json({
                success : false,
                status : 500,
                message : error.message
            })
        }

    }
    else{
        return res.status(400).json({
            success : false,
            status : 400,
            message : "Invalid request"
        })
    }

}