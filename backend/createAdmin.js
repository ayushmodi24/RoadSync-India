import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const createAdmin = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("ayush", 10);

    const admin = new User({

      name: "Ayush",
      email: "ayush@gmail.com",
      department: "Administration",
      employeeId: "ADMIN001",
      phone: "9999999999",
      password: hashedPassword,
      role: "admin",
      status: "approved"

    });

    await admin.save();

    console.log("Admin created successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit();

  }

};

createAdmin();