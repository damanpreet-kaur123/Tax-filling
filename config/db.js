import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(" MONGODB Connected Successfully");
    } catch(error) {
        console.error("MongoDB connection Failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
