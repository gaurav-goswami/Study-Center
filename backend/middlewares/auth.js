const jwt = require('jsonwebtoken');

exports.isAuthenticated = async (req, res, next) => {

    try {

        const token = req.cookies.token || req.header("Authorization").replace("Bearer", "");

        if (!token) return res.status(401).json({
            success: false,
            status: 401,
            message: "User is not authenticated 🤨"
        })

        // verify the token

        try {

            const decoded_data = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded_data;

        } catch (error) {
            return res.status(401).json({
                success: false,
                status: 401,
                message: "Token is invalid 😟"
            })
        }

        next();

    } catch (error) {

        console.log("error in isAuth middleware", error.message);
        return res.status(401).json({
            success: false,
            status: 401,
            message: "Something went wrong while validating the token. 😱"
        })

    }

}

// middleware for checking user role

exports.isAdmin = async (req, res, next) => {

    try {

        const { role } = req.user;

        if (role !== "Admin") {
            return res.status(401).json({
                success: false,
                status: 401,
                message: "This route is protected for Admin only"
            })
        }

        next();

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "User role can't be verified, please try again later"
        })
    }

}
exports.isInstructor = async (req, res, next) => {

    try {

        const { role } = req.user;

        if (role !== "Instructor") {
            return res.status(401).json({
                success: false,
                status: 401,
                message: "This route is protected for Instructor only"
            })
        }

        next();

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "User role can't be verified, please try again later"
        })
    }

}
exports.isStudent = async (req, res, next) => {

    try {

        const { role } = req.user;

        if (role !== "Student") {
            return res.status(401).json({
                success: false,
                status: 401,
                message: "This route is protected for Student only"
            })
        }

        next();

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "User role can't be verified, please try again later"
        })
    }

}