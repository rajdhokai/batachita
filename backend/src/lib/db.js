import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI)
      throw new Error("MONGO_URI is not defined in environment variables");

    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB connected successfully", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // 1 status code means failure & 0 status code means success
  }
};

export default connectDB;
