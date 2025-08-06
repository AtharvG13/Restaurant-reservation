import mongoose from "mongoose";
import validator from "validator";
export const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: [2, "Name must be at least 2 characters long"],
  },

  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    minLength: [10, "Phone number must have 10 Numbers!"],
    maxLength: [10, "Phone number must have 10 Numbers!"],
  },

  time: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});

const customer = mongoose.model("customer", UserSchema);
export default customer;
