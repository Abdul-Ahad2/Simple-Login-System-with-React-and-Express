import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Something's Missing");
  }

  const registeredUser = await userModel.findOne({ email });
  if (registeredUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await userModel.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      name: name,
      email: email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not Registered");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not Registered");
  }
});

const getUserData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Data Fetched" });
});

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_Secret, {
    expiresIn: "30d",
  });
};

export { loginUser, registerUser, getUserData };
