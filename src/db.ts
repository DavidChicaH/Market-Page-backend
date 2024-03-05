import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  const mongoUri = `mongodb+srv://davidchikhb:${process.env.MONGO_PASSWORD}@fakestoredb.hoo2swe.mongodb.net/?retryWrites=true&w=majority&appName=FakeStoreDB`;

  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
