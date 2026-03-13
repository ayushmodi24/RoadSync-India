// departmentRoutes.js
import express from "express";
import { getTasks, updateTaskStatus } from "../controllers/departmentController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
router.use(authMiddleware);

router.get("/tasks", getTasks);           // Get tasks assigned to department
router.put("/tasks/:id", updateTaskStatus); // Update status

export default router;