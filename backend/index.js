const express = require('express');

const dbConnection = require('./utils/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require("./routes/User");    
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");
const cloudinaryConnect = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

dotenv.config({
    path : './config/config.env'
})
const PORT = process.env.PORT || 4000;

const app = express();

dbConnection();

// using middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    credentials : true
}))

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);


app.listen(PORT , () => {
    console.log(`Server is running at PORT ${PORT}`)
});

