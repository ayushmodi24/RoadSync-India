const express = require("express");
const User = require("../models/User");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Admin Assign Role
router.put(
  "/assign-role/:userId",
  verifyToken,
  checkRole(["Admin"]),
  async (req, res) => {
    try {
      const { role } = req.body;

      const allowedRoles = ["Citizen", "Department", "Contractor", "Admin"];

      if (!allowedRoles.includes(role)) {
        return res.status(400).json({ message: "Invalid role" });
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { role },
        { new: true }
      );

      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;