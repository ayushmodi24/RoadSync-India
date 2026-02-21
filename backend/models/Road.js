const mongoose = require("mongoose");

const roadSchema = new mongoose.Schema(
  {
    roadName: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,  
      required: true,
    },

    constructedDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Good", "Under Maintenance", "Damaged", "Closed"],
      default: "Good",
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",   // Department role user
      required: true,
    },

    contractor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",   // Contractor role user
    },

    damageReports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DamageReport",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Road", roadSchema);