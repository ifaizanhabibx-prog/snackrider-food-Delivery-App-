const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.log("Error name:", err.name);
        console.log("Error message:", err.message)
        process.exit(1);
    }
}
module.exports = connectDB;