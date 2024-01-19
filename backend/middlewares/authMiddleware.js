import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token
      token = req.headers.authorization.split(" ")[1];

      //   verify token
      let decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await userModel.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid Token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No Token");
  }
});

export { protect };
