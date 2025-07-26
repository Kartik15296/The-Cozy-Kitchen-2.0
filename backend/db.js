const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://kartikkale3074:Kartik3074@cluster0.dgk0thx.mongodb.net/CozyKitchen';

const connectMongoDb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected successfully to MongoDB");
    }
    catch (err) {
        console.error("Error connecting to DB through URL:", err);
    }
}

module.exports = connectMongoDb;
