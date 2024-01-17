import mongoose, { mongo } from "mongoose";

const goalsSchema = mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

const goalsModel = mongoose.model("goals", goalsSchema);

export default goalsModel;
