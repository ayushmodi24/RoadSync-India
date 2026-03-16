import express from "express";
import Task from "../models/Task.js";

const router = express.Router();


// GET ALL TASKS (FOR PROJECT PAGE)

router.get("/", async (req, res) => {

  try {

    const tasks = await Task.find().populate("department");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }

});


export default router;