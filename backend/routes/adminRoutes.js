import express from "express";
import User from "../models/User.js";

const router = express.Router();

/* GET PENDING USERS */
router.get("/pending", async (req, res) => {

  try {

    const users = await User.find({ status: "pending" });

    res.json(users);

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }

});

/* APPROVE USER */
router.put("/approve/:id", async (req, res) => {

  try {

    await User.findByIdAndUpdate(req.params.id, {
      status: "approved"
    });

    res.json({ message: "User approved" });

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }

});

/* REJECT USER */
router.put("/reject/:id", async (req, res) => {

  try {

    await User.findByIdAndUpdate(req.params.id, {
      status: "rejected"
    });

    res.json({ message: "User rejected" });

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }

});

export default router;