import asyncHandler from "express-async-handler";
import goalsModel from "../models/goalModel.js";
import userModel from "../models/userModel.js";

const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalsModel.find({ user: req.user.id });
  if (!goals) {
    res.status(404);
    throw new Error("No goals found here");
  }
  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error("Enter a name!");
  }
  const newGoal = await goalsModel({
    text: req.body.text,
    user: req.user.id,
  });
  await newGoal.save();
  res.status(200).json(newGoal);
});

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await goalsModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Could not find goal");
  }

  const user = await userModel.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("Unauthorized, bad token");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Unauthorized, bad token");
  }

  const updatedGoal = await goalsModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await goalsModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Could not find goal");
  }
  const user = await userModel.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("Unauthorized, bad token");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Unauthorized, bad token");
  }

  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getGoals, setGoals, updateGoals, deleteGoals };
