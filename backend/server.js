import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT;

// app.listen(PORT, () =>
//   console.log(`Server running on ${PORT}`)
// );

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});