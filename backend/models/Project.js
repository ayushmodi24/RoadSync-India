import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  location: String,
  startDate: Date,
  deadline: Date,
  status: {
    type: String,
    default: "active"
  }
});

export default mongoose.model("Project", projectSchema);