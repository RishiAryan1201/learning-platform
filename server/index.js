import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => console.log("mongo connected"))
    .catch((err) => console.log("error connecting"));
}

app.get("/", async (req, res) => {
    res.status(200).json({ message: "It's working" });
});

app.use("/api/user", UserRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });
const startServer = async () => {
    try {
      connectDB();
      app.listen(8800, () => console.log(`Server running at port 8800`));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();