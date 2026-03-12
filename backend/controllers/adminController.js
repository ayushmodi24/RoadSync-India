import User from "../models/User.js";

export const getPendingUsers = async (req, res) => {

  const users = await User.find({ status: "pending" });

  res.json(users);

};

export const approveUser = async (req, res) => {

  const { id } = req.params;

  await User.findByIdAndUpdate(id, {
    status: "approved"
  });

  res.json({ message: "User Approved" });

};

export const rejectUser = async (req, res) => {

  const { id } = req.params;

  await User.findByIdAndUpdate(id, {
    status: "rejected"
  });

  res.json({ message: "User Rejected" });

};