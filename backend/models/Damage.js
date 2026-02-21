const mongoose = require("mongoose");

const damageSchema = new mongoose.Schema(
  {
    roadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Road",
      required: true,
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    depth: {
      type: Number,   // in cm
      required: true,
    },

    length: {
      type: Number,   // in meters
      required: true,
    },

    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      required: true,
    },

    repairType: {
      type: String,
      enum: [
        "Patching",
        "Resurfacing",
        "Reconstruction",
        "Temporary Fix"
      ],
      required: true,
    },

    estimatedCost: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Reported", "Approved", "In Progress", "Completed"],
      default: "Reported",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Damage", damageSchema);