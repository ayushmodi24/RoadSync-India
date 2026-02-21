const mongoose = require("mongoose");

const repairSchema = new mongoose.Schema(
  {
    damageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Damage",
      required: true,
    },

    assignedContractor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // must have role = Contractor
      required: true,
    },

    materialsUsed: {
      type: [String],  // Array of materials
      required: true,
    },

    completionDate: {
      type: Date,
    },

    cost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Repair", repairSchema);