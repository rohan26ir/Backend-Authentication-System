import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User is Requred"],
    unique: [true, "Username must be unique"]
  },
  email: {
    type: String,
    required: [true, "Email is requred"],
    unique: [true, "Email must be unique"]
  },
  password: {
    type: String,
    required: [true, "Password is requred"],
    unique: [true, "Password must be unique"]
  }
})


const userModel = mongoose.model("users", userSchema)

export default userModel;