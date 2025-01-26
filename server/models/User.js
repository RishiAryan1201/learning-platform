import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    school_name: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    parent_1_name: {
      type: String,
      required: true,
    },
    parent_1_occupation: {
      type: String,
      required: true,
    },
    parent_1_mobile:{
      type: Number,
      required: true,
    },
    parent_1_email:{
      type: String,
      required: true,
    },
    parent_2_name: {
      type: String,
      default: '',
    },
    parent_2_occupation: {
      type: String,
      default: '',
    },
    parent_2_mobile:{
      type: Number,
      default: '',
    },
    parent_2_email:{
      type: String,
      default: '',
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);