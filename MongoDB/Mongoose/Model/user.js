// models/User.js
import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    default: 18,
  },
}, {
  timestamps: true,
});

// Create the model
const User = mongoose.model("User", userSchema);

const createUser = async () => {
  try {
    const newUser = new User({
      name: "Nilesh Kumar",
      email: "nilesh@example.com",
      age: 25,
    });

    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

export {createUser};
