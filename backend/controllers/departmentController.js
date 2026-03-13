import Task from "../models/Task.js";

// GET TASKS ASSIGNED TO DEPARTMENT
export const getTasks = async (req, res) => {
  const tasks = await Task.find({ department: req.user.id });
  res.json(tasks);
};

// UPDATE TASK STATUS
export const updateTaskStatus = async (req, res) => {
  const { status } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json({ message: "Task Updated", task });
};