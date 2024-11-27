import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
const dbConnect = async () => {
    try {
        // console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed", error)
    }
}
export default dbConnect;