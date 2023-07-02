const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        // const isConnected = await mongoose.connect(process.env.DB_URI)
        const isConnected = await mongoose.connect(`${process.env.DB_URI}`)

        if(isConnected) console.log('Successfully connected to database')

    } catch (error) {
        console.log("Database connection failed");
        console.log(error.message);
        process.exit(1);
    }

}

module.exports = dbConnection;