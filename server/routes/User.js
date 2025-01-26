import express from "express";
import {UserRegister} from "../controllers/User.js";

const router = express.Router();

router.post("/registration", UserRegister);

export default router;