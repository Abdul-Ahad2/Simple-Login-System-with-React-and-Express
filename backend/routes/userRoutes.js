import express from "express";
import {
  getUserData,
  registerUser,
  loginUser,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", protect, getUserData);

export default userRouter;
