import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to " + process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
