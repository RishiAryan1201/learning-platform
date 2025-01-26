import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

export const UserRegister = async (req, res, next) => {
  try {
    // const { name, age, school_name } = req.body;
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    return res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};
