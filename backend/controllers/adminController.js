// import User from "../models/User.js";

// export const getPendingUsers = async (req, res) => {

//   const users = await User.find({ status: "pending" });

//   res.json(users);

// };

// export const approveUser = async (req, res) => {

//   const { id } = req.params;

//   await User.findByIdAndUpdate(id, {
//     status: "approved"
//   });

//   res.json({ message: "User Approved" });

// };

// export const rejectUser = async (req, res) => {

//   const { id } = req.params;

//   await User.findByIdAndUpdate(id, {
//     status: "rejected"
//   });

//   res.json({ message: "User Rejected" });

// };

import User from "../models/User.js";
import Task from "../models/Task.js";

// PENDING USERS
export const getPendingUsers = async (req, res) => {
  const users = await User.find({ status: "pending" });
  res.json(users);
};

// APPROVE USER
export const approveUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "approved" });
  res.json({ message: "User Approved" });
};

// REJECT USER
export const rejectUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "rejected" });
  res.json({ message: "User Rejected" });
};

// ASSIGN TASK
export const assignTask = async (req, res) => {
  const { title, description, departmentId, dueDate } = req.body;
  const task = await Task.create({ title, description, department: departmentId, dueDate });
  res.json({ message: "Task Assigned", task });
};

// GET ALL TASKS
export const getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate("department", "name department email");
  res.json(tasks);
};

// Fetch all approved departments
export const getDepartments = async (req, res) => {
  try {
     const departments = await User.find({ role: "user", status: "approved" });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};