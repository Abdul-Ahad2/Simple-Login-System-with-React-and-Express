import asyncHandler from "express-async-handler";

const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: "Get Goals" });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(404);
    throw new Error("Enter a name!");
  }
  res.status(200).json({ message: "Set Goals" });
});

const updateGoals = asyncHandler(async (req, res) => {
  res.json({ message: `Goal Updated for ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.json({ message: `Goal Deleted for ${req.params.id}` });
});

export { getGoals, setGoals, updateGoals, deleteGoals };
