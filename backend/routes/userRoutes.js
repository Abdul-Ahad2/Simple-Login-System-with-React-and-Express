import express from "express";
import {
  getUserData,
  registerUser,
  loginUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", getUserData);

export default userRouter;
