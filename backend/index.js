const express = require('express');

const dbConnection = require('./utils/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

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
    origin : "http://localhost:3000",
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    credentials : true
}))

app.listen(PORT , () => {
    console.log(`Server is running at PORT ${PORT}`)
});

