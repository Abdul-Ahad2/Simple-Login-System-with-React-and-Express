import mongoose, { mongo } from "mongoose";

const goalsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    text: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const goalsModel = mongoose.model("goals", goalsSchema);

export default goalsModel;
