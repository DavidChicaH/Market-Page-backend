import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
  name: {
    firstName: String,
    lastName: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
