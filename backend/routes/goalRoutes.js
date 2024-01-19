import express from "express";
import {
  getGoals,
  setGoals,
  deleteGoals,
  updateGoals,
} from "../controllers/goalControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, setGoals);

router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

export default router;
