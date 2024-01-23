import express from "express";
import dotenv from "dotenv";
import router from "./routes/goalRoutes.js";
import userRouter from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandling.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);
app.use("/api/user", userRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
