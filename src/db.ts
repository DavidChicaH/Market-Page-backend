import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWD}@fakestoredb.hoo2swe.mongodb.net/?retryWrites=true&w=majority&appName=FakeStoreDB`;

  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to the database");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB ;
