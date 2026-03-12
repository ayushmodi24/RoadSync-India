import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// SIGNUP
export const signup = async (req, res) => {

  try {

    const { name, email, department, employeeId, phone, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      department,
      employeeId,
      phone,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Signup successful. Wait for admin approval."
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};



// LOGIN
export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (user.status !== "approved") {
      return res.status(403).json({
        message: "Account not approved by admin"
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.json({
      token,
      user
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};