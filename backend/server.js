import express from "express";
import dotenv from "dotenv";
import router from "./routes/goalRoutes.js";
import errorHandler from "./middlewares/errorHandling.js";
import { connectDB } from "./config/connectDB.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
